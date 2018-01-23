import React, { Component } from 'react';

import House from './House/House';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Login from './Login/Login';
import Search from './Search/Search';
import Logo2 from './Logo2.jpeg';

import Home from 'react-icons/lib/fa/home';
import ShoppingBag from 'react-icons/lib/fa/shopping-bag';
import './Navbar.css';

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {};
  }
  // burgerToggle() {
  //     let linksEl = document.querySelector('.narrowLinks');
  //     if (linksEl.style.display === 'block') {
  //         linksEl.style.display = 'none';
  //     } else {
  //         linksEl.style.display = 'block';
  //     }
  //   }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="frontpage">
        <div className="front">
          <Login />
          <Search />
        </div>
        <div className="logo">
          <img alt="crown" src={Logo2} />
        </div>
        <Link to="/Cart">
          <ShoppingBag className="cart" id="Nav__shoppingBag" />
        </Link>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="nav_container">
            <div className="links">
              <Link to="/">
                <Home className="home" id="Nav__Home" />
              </Link>
              <Link to="/About">About Us</Link>
              <Link to="/Contact">Contact Us</Link>
              <Link className="myproducts" to="/Products">
                Our Products
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
