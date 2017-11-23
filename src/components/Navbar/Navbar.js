import React, { Component } from 'react';
import './Navbar.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Login from './Login/Login';
// import User from '../User_Link';
import Search from './Search/Search';



//import Cart

export default class Navbar extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const C = "Shopping Cart"
        return(
    <div>
        <div className="loginNInput">  
            <span><Login /></span>
            <Link to="/Cart"><span>{C}</span></Link>
            <span><Search /></span>
        </div>
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