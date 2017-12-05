import React, { Component } from 'react'; 
import './Footer.css';


import { SocialIcons } from 'react-social-icons';


export default class Footer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const G = "GET CONNECTED WITH US";
        const urls = [
            'http://facebook.com',
            'http://twitter.com',
            'http://linkedin.com',
            'http://www.pinterest.com',
            'http://www.youtube.com'
          ];
       
        return(
                <div className="nav" >
                    <footer className="navbar navbar-default navbar-fixed-bottom">
                    
                      <h2 className="connect">{G}</h2>
                      {/* <p>code & design by Kelly Linh Pham </p> */}
                       <div>
                        <SocialIcons className="social" urls={urls} color="black" size={30} />
                      </div>
                      <div className="aboutList">
                          <div className="smallpart">ONLINE ORDERS
                          <br />
                              <span>Order Status</span>
                              <span>Shipping Information</span>
                              <span>Returns and Exchanges</span>
                              <span>International Orders</span>
                          </div>
                          <div className="smallpart">CUSTOMER SERVICE
                              <span>Contact Us</span>
                              <span>Help and FAQs</span>
                              <span>Size Information</span>
                              <span>Help? 1-682-521-9297</span>
                          </div>
                          <div className="smallpart">RESOURCES
                              <span>Special Offers</span>
                              <span>Wedding Solutions</span>
                              <span>Inspiration & Guidance</span>
                              <span>Catalogs</span>
                          </div>
                          <div className="smallpart">ROYAL COUTURE STORE
                              <span>Browse Store List</span>
                              <span>Schedule an Appointment</span>
                              <span>Information and Services</span>
                              <span>Events</span>
                          </div>
                          <div className="smallpart">ABOUT ROYAL COUTURE
                              <span>Company Info</span>
                              <span>Careers</span>
                              <span>Press Room</span>
                              <span>Investor Relations</span> 
                           </div>
                      </div> 
                      <div className="copyright">
                            <h3>COPY RIGHT 2017 ROYAL COUTURE, LLC. ALL RIGHTS RESERVED IMAGES MAY NOT BE REPRODUCED WIHTOUT PERMISSION</h3>
                      </div>
                    </footer>
                </div>
        )
    }
}