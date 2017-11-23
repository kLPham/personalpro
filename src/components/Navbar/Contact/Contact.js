import React, {Component} from 'react';
import './Contact.css';


export default class Contact extends Component{
    render() {
        const s = <hr/>;
        return(
            <div>
                <div><h1 className="Contact-title">Contact Us</h1></div>
                {/* <div><p2>Embro-Bridal Couture</p2></div> */}
                <div className="container">
                    <h4 className="body">
                       
                       <span>4227 Boyer Pl Dallas, TX 75219</span> {s}
                       <span>Phone: 682-521-9297</span>{s} 
                       <span>Monday - 10:30 until 6:00</span>{s}   
                       <span>Tuesday - 10:30 until 6:00</span>{s}  
                       <span>Wednesday - 12:00 until 6:00</span>{s}  
                       <span>Thursday - 12:00 until 8:00</span>{s}   
                       <span>Friday - 10:30 until 6:00</span>{s}   
                       <span>Saturday - 10:00 until 5:00</span>{s}   
                   </h4>
                </div>
            </div>
        );
    }
}