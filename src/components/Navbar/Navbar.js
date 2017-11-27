import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Login from './Login/Login';
import Search from './Search/Search';
import Logo2 from './Logo2.jpeg';
import ShoppingCart from 'react-icons/lib/fa/shopping-cart';
import './Navbar.css';



export default class Navbar extends Component{

    render(){
        // const C = "Cart(0)"
        return(
    <div>
        <div className="front">  
           <Login />
           <Search />
            {/* <span className="button"><Login /></span>
            <span className="search"><Search /></span> */}
        </div>
        <div className="logo" ><img alt="crown" src={Logo2}></img></div>
        <Link to="/Cart"><ShoppingCart className="cart" id="Nav__shoppingCart" /></Link>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="nav_container">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <Link to="/Products">Our Products</Link> 
                    
                </div>
            </div>
        </nav>
    </div>
        )
    }
}




















   {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-tartget="navbar-collapse">
                    <span className="sr-only"></span> 
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                </button> */}


       {/* <div>
                <ul>
                    <Link to="/Products">Our Products></Link> 
                        <ul>
                        <li><Link to="/Products/BridalC">Bridal Collection</Link></li>
                        <li><Link to="/Products/DesignerP">Designer PreOwned Collection</Link></li>
                        <li><Link to="/Products/Accessories">Accessories</Link></li>
                        </ul>   
                </ul>   
            </div>        */}
                   {/* <a className="navbar-brand" href="/Products">Our Products</a> */}  