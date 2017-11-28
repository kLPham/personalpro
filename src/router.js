import React from 'react';
import { Switch, Route } from 'react-router-dom';


import House from './components/Navbar/House/House';
import Login from './components/Navbar/Login/Login';
import Cart from './components/Navbar/Cart/Cart';
import Checkout from './components/Navbar/Checkout/Checkout';
import About from './components/Navbar/About/About';
import Contact from './components/Navbar/Contact/Contact';

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
        <Route  exact path="/" component={House} />
        <Route path="/Login" component={Login} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Products" render={()=> (
            <Products>
            <Switch>
                <Route path="/Products/BridalCollection" component={BridalCollection} />
                <Route path="/Products/Details/:product_id" component={Details} />
                <Route path="/Products/DesignerP" component={DesignerP} />
                <Route path="/Products/FormalGowns" component={FormalGowns} />
                <Route path="/Products/Prom" component={Prom} />
                <Route component={ProductLandingPage} />
            </Switch>
            </Products>
        )} />
    </Switch>
        
        );