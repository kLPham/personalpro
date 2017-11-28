//SERVER HERE
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

//import fontawesome here:
const FontAwesome = require('react-fontawesome');
//IMPORT CONTROLLER
// const cartController = require("./controllers/cart_controller");





//STRIPE:entry point and bootstraps your Express application
// const SERVER_CONFIGS = require('./constants/server');

// const configureServer = require('./server');
// const configureRoutes = require('./routes');


// configureServer(app);
// configureRoutes(app);



//STRIPE END HERE.








































const { dbUser, database } = require("./config");
const { secret } = require("./config").session;

//Auth0 here
const { domain, clientID, clientSecret } = require("./config.js").passportAuth0;
const {connectionString} = require('./config');

const port = 3001;

const app = express();

//uncomment this when i am ready to have project in production. Final step
// app.use(express.static(`${__dirname}/build`));

app.use(
  session({
    secret: 'Wylie Pham',
    resave: false,
    saveUninitialized: false
  })
);
massive(connectionString)
  .then(db => app.set("db", db))
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());


//strategy here as opposed to having its own file: AUTH0
passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: "/api/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      console.log(profile);
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuth([profile.id, profile.displayName])
              .then(created => {
                console.log(created);
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//GET USER LOGIN BELOW:
app.get("/api/login", passport
    .authenticate("auth0", {
    successRedirect: "http://localhost:3000/"
  })
);

app.get("/api/me", function(req, res) {
  if (!req.user) 
  return res.status(404);
  res.status(200).json(req.user);
});

//TESTING TO SEE IF WE GET INFO FROM OUR DATABASE
app.get("/api/test", (req, res, next) => {
  req.linhIsCoolVariable
  req.app
    .get("db")
    .getUsers()
    .then(response => {
      res.json(response);
    })
    .catch(console.log);
});

app.get("/api/test", (req, res, next) => {
  req.app
    .get("db")
    .getUserByAuthId([])
    .then(response => {
      res.json(response);
    })
    .catch(console.log);
});




//GET PRODUCT TYPE from database-products table: :)
app.get('/api/products/:product_type', (req, res, next)=> {
  console.log('product_type request:', req.params.product_type);
  req.app
    .get('db')
    .getProducts(req.params.product_type)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(console.log);
})

//SHOPPING CART RELATED CALL BELOW:
//session cart: post to db
app.post('/api/cart', (req, res)=>{
  let item= req.body.item;
   if(!req.session.cart ){
     req.session.cart = [];
   }
   req.session.cart.push(item); //add item to cart
   return res.json(req.session.cart);
  })
 
   //get info of products using session to display to cart component
   app.get('/api/cart',(req, res)=>{
       return res.json(req.session.cart);
   })
 
 
   //update cart when REMOVE ITEMS FROM CART BACK-END :)
   app.delete('/api/cart/:id',(req, res)=>{
    // console.log('Cart: ', req.session.cart);
    req.session.cart = req.session.cart.filter((product)=> {
       if(product.id == req.params.id){
        return false;
       }
       else{
         return true;
       }
     })
    //  req.session.cart.splice(index, 1);
     res.json(req.session.cart);   //send back cart from session
 })
  




//GET ITEMS FROM CART TO SEND IT TO CHECKOUT-PAGE:@@@
 app.get('/api/checkout',(req, res) =>{
   return res.json(req.session.checkout);
 })

 //post items to checkout page @@@
 app.post('/api/checkout', (req, res)=>{
  let item= req.body.item;
   if(!req.session.checkout ){
     req.session.checkout = [];
   }
   req.session.checkout.push(item); //add item to cart
   return res.json(req.session.checkout);
  })
 


//SEARCH PRODUCTS:@@@
// app.get('/api/products', function(req, res) {
//   const { term } = req.query;

//   // SELECT * FROM Products WHERE type LIKE '%$1%'
// })














 //GET ONLY ONE ITEM FOR DETAIL PAGE:
app.get('/api/product/:product_id', (req, res, next)=>{
  console.log('product_id request:', req.params.product_id);
  req.app
    .get('db')
    .getAProduct(req.params.product_id)
    .then(response => {
      console.log(response)
      res.status(200).json(response);
    })
    .catch(console.log);
})




// // CART
// app.get("/api/cart", cart_Controller.get);
// app.post("/api/cart", cart_Controller.add);
// app.delete("/api/cart/:product", cartController.delete);




//SUBMIT ORDERS CALL BELOW: get & update orders :NEED TO WORK ON THIS@@@
app.get('/api/orders',(req, res)=>{
  const {order_id, consumer_id, product_id, name, email, phone_number, shipping_address, billing_address } = req.body;
  req.app.get('db').submitOrders(req.submitOrders);
  return res.json(req.body);
})



//*NEED TO WORK ON THIS@@@
app.post('/api/orders', (req, res)=>{
  // console.log('orders request:', order_id, consumer_id, product_id, name, email, phone_number, shipping_address, billing_address );
  req.app.post('db').submitOrders(req.body)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(console.log);
})


//STRIPE HERE:

//CONSTANTS/FRONTEND.JS
// const FRONTEND_DEV_URLS = [ 'http://localhost:3000' ];

// const FRONTEND_PROD_URLS = [
//   'https://www.yourdomain.com',
//   'https://yourdomain.com'
// ];

// module.exports = process.env.NODE_ENV === 'production'
//   ? FRONTEND_PROD_URLS
//   : FRONTEND_DEV_URLS;  //only this matters //when your app goes in production use your own domain of your frontend application.
//STRIPE END HERE.

//CONSTANTS/SERVER.JS
// const path = require('path');

// const SERVER_PORT = 8080;

// const SERVER_CONFIGS = {
//   PRODUCTION: process.env.NODE_ENV === 'production',
//   // PORT: process.env.PORT || SERVER_PORT,
// };

// module.exports = SERVER_CONFIGS;
//STRIPE END HERE.


//CONSTANTS/STRIPE.JS
// const configureStripe = require('stripe');

// const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
//     ? 'sk_test_JlmWEXFhyXX7zivmfy6eraJu'
//     :'pk_test_SgQ6st52BRImIvvg2VhkhE5H';

// const stripe = configureStripe(STRIPE_SECRET_KEY);

// module.exports = stripe;
//STRIPE END HERE.

//ROUTES/INDEX.JS
// const paymentApi = require('./payment');

// const configureRoutes = app => {
//   paymentApi(app);
// };

// module.exports = configureRoutes;
//STRIPE END HERE.


//ROUTES/PAYMENT.JS
// const stripe = require('../constants/stripe');

// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

// const paymentApi = app => {
//   app.get('/', (req, res) => {
//     res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//   });

//   app.post('/', (req, res) => {
//     stripe.charges.create(req.body, postStripeCharge(res));
//   });

//   return app;
// };

// module.exports = paymentApi;
//STRIPE END HERE.












app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
