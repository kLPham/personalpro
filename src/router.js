import React from 'react';
import { Switch, Route } from 'react-router-dom';

import House from './components/Navbar/House/House';
import Login from './components/Navbar/Login/Login';
import Cart from './components/Navbar/Cart/Cart';
import CheckoutWStripe from './components/Navbar/CheckoutWStripe';

import About from './components/Navbar/About/About';
import SizeChart from './components/Navbar/About/SizeChart';
import FAQ from '././components/Navbar/About/FAQ';
import OrderNPaymentInfo from './components/Navbar/About/OrderNPaymentInfo';
import ReturnPolicy from './components/Navbar/About/ReturnPolicy';
import ShippingRates from './components/Navbar/About/ShippingRates';
import CustomerService from './components/Navbar/About/CustomerService';

import Contact from './components/Navbar/Contact/Contact';
import PaymentSuccess from './components/Navbar/PaymentSuccess';

import Products from './components/Navbar/Products/Products';
import BridalCollection from './components/Navbar/Products/BridalCollection/BridalCollection';

// import BridalC_Details from './components/Navbar/Products/BridalCollection/BridalC_Details/BridalC_Details';
import Details from './components/Navbar/Products/Details/Details';
import DesignerP from './components/Navbar/Products/DesignerP/DesignerP';
import FormalGowns from './components/Navbar/Products/FormalGowns/FormalGowns';
import Prom from './components/Navbar/Products/Prom/Prom';

// import Accessories from './components/Navbar/Products/Accessories/Accessories';
import ProductLandingPage from './components/Navbar/Products/ProductLandingPage/ProductLandingPage';

export default (
  <Switch>
    <Route exact path="/" component={House} />
    <Route path="/Login" component={Login} />
    <Route path="/Cart" component={Cart} />
    <Route path="/CheckoutWStripe" component={CheckoutWStripe} />
    <Route
      path="/About"
      render={() => (
        <About>
          <Switch>
            <Route path="/About/SizeChart" component={SizeChart} />
            <Route path="/About/FAQ" component={FAQ} />
            <Route
              path="/About/OrderNPaymentInfo"
              component={OrderNPaymentInfo}
            />
            <Route path="/About/ReturnPolicy" component={ReturnPolicy} />
            <Route path="/About/ShippingRates" component={ShippingRates} />
            <Route path="/About/CustomerService" component={CustomerService} />
          </Switch>
        </About>
      )}
    />

    <Route path="/Contact" component={Contact} />
    <Route path="/PaymentSuccess" component={PaymentSuccess} />
    <Route
      path="/Products"
      render={() => (
        <Products>
          <Switch>
            <Route
              path="/Products/BridalCollection"
              component={BridalCollection}
            />
            <Route path="/Products/Details/:product_id" component={Details} />
            <Route path="/Products/DesignerP" component={DesignerP} />
            <Route path="/Products/FormalGowns" component={FormalGowns} />
            <Route path="/Products/Prom" component={Prom} />
            <Route component={ProductLandingPage} />
          </Switch>
        </Products>
      )}
    />
  </Switch>
);
