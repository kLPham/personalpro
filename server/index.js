//SERVER HERE
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");


require("dotenv").config(); //%


//import fontawesome here:
const FontAwesome = require('react-fontawesome');

// const controller= require('./controllers/controller');


const { dbUser, database } = require("./config");
const { secret } = require("./config").session;

//Auth0 here
const { domain, clientID, clientSecret } = require("./config.js").passportAuth0;
const {connectionString} = require('./config');

const port = 3001;

const app = express();



//uncomment this when i am ready to have project in production. Final step
// app.use(express.static(`${__dirname}/build`));


//STRIPE:entry point and bootstraps your Express application
const stripe = require("stripe")(process.env.STRIPE_SECRET);  
const SERVER_CONFIGS = require('../src/react-express-stripe/backend/constants/server');

const configureServer = require('../src/react-express-stripe/backend/server');
const configureRoutes = require('../src/react-express-stripe/backend/routes/index');

configureServer(app);
configureRoutes(app);
//STRIPE END HERE.




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
      
      app
        .get("db")
        .getUserByAuthId(profile.consumer_id)  // .getUserByAuthId(profile.id)%%
        .then(response => {
          if (!response[0]) {
      app
        .get("db")
        .createUserByAuth([profile.consumer_id, profile.displayName]) //  .createUserByAuth([profile.id, profile.displayName])
        .then(created => {
            
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


// AUTHORIZATION BELOW:
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



//GET USER LOG IN & OUT STATUS HERE:
app.get("/api/login", (req, res, next) => {
  res.status(200).json(req.session);
});

app.get("/api/logout", (req, res, next) => {
  req.logout()
  req.session.destroy();
  res.redirect("http://localhost:3000/");
});
 //END%


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

//SHOPPING CART:
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
 //SHOPPING CART END.
  



//SEARCH PRODUCTS:@@@
// app.get('/api/products', function(req, res) {
//   const { term } = req.query;

//   // SELECT * FROM Products WHERE type LIKE '%$1%'
// })



//CHECKOUT WITH STRIPE
app.post('/checkout', (req,res) => {
    stripe.charges.create(req.body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr)
        res.status(500).send({ error: stripeErr });
      } else {
        delete req.session.cart;
        console.log("session" + req.session)
        res.json(req.session.cart);
      }
  })
})






//SUBMIT ORDERS CALL BELOW: get DATA & SUBMIT orders :NEED TO WORK ON THIS@@@
app.get('/api/orders',(req, res)=>{
  const {order_id, consumer_id, product_id, name, email, phone_number, shipping_address, billing_address } = req.body;
  req.app.get('db').submitOrders(req.submitOrders);
  return res.json(req.body);
})



//POST ORDERS TO SUBMITORDERS
// //*NEED TO WORK ON THIS@@@
// app.post('/api/orders', (req, res)=>{
//   // console.log('orders request:', order_id, consumer_id, product_id, name, email, phone_number, shipping_address, billing_address );
//   req.app.post('db').submitOrders(req.body)
//   .then(response => {
//     res.status(200).json(response);
//   })
//   .catch(console.log);
// })




app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
