//SERVER HERE
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
// const strategy = require('../src/strategy');

const { dbUser, database } = require("./config");
const { secret } = require("./config").session;

const { domain, clientID, clientSecret } = require("./config.js").passportAuth0;
const {connectionString} = require('./config');

const port = 3001;

const app = express();

// app.use(express.static(`${__dirname}/build`));

app.use(
  session({
    secret: '@nyth!ng y0u w@nT',
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


//strategy here as opposed to having its own file
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

app.get(
  "/api/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/"
  })
);

app.get("/api/me", function(req, res) {
  if (!req.user) return res.status(404);
  res.status(200).json(req.user);
});

app.get("/api/test", (req, res, next) => {
  req.ericsCoolVariable
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

//get products from sql database
// app.get('/api/products', (req, res, next)=>{
//   req.app.get('db').getProducts().then(response => {
//     res.status(200).json(response);
//   })
//   .catch(console.log);
// })

app.get('/api/products/:product_type', (req, res, next)=>{
  console.log('product_type request:', req.params.product_type);
  req.app.get('db').getProducts(req.params.product_type)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(console.log);
})

//session cart
app.post('/api/cart', (req, res)=>{
 let item= req.body.item;
  if(!req.session.cart ){
    req.session.cart = [];
  }

  //send info of products using session to display to cart component
  app.get('/api/cart',(req, res)=>{
      return res.json(req.session.cart);
  })
  //add item
  req.session.cart.push(item);


  //update cart when remove item from cart
   //remove index item
  app.post('/api/cart',(req, res)=>{
    req.session.cart.splice(index);
    return res.json(req.session.cart);
})
 
  

  console.log('Cart: ', req.session.cart);
  //send back cart from session
  res.json(req.session.cart);
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
