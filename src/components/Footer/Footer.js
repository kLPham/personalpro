import React, { Component } from 'react'; 
import './Footer.css';

import { Link } from 'react-router-dom';

import Facebook from 'react-icons/lib/fa/facebook';
import PinterestSquare from 'react-icons/lib/fa/pinterest-square';
import Twitter from 'react-icons/lib/fa/twitter';
import Instagram from 'react-icons/lib/fa/instagram';


export default class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const G = "GET CONNECTED WITH US";
        // const divStyle = {
        //     border: '1px solid gray'
        // };


        return(
                <div className="nav" >
                    <nav className="navbar navbar-default navbar-fixed-bottom">
                      <h2 className="connect">{G}</h2>
                      {/* <p>code & design by Kelly Linh Pham </p> */}
                      <div className="social">
                            <Link to="https://www.facebook.com/"><Facebook className="icon" id="Footer__icon" /></Link>
                            <Link to="https://www.pinterest.com/"><PinterestSquare className="icon" id="Footer__icon" /></Link>
                            <Link to="https://twitter.com/"><Twitter className="icon" id="Footer__icon" /></Link>
                            <Link to="https://www.instagram.com/"><Instagram className="icon" id="Footer__icon" /></Link>
                      </div>
                      <div className="copyright">
                            <h3>COPY RIGHT 2017 ROYAL COUTURE, LLC. ALL RIGHTS RESERVED IMAGES MAY NOT BE REPRODUCED WIHTOUT PERMISSION</h3>
                      </div>
                    </nav>
                </div>
        )
    }
}