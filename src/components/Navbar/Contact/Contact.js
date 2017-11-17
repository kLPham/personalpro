import React, {Component} from 'react';
import './Contact.css';


export default class Contact extends Component{
    render() {
        return(
            <div>
                <div><h1 className="Contact-title">Contact Us</h1></div>
                {/* <div><p2>Embro-Bridal Couture</p2></div> */}
                <div className="container">
                    <h4 className="body">
                        <ul>
                        <li>4227 Boyer Pl Dallas, TX 75219</li>
                        Phone: 682-521-9297
                        Monday - 10:30 until 6:00
                        Tuesday - 10:30 until 6:00
                        Wednesday - 12:00 until 6:00
                        Thursday - 12:00 until 8:00
                        Friday - 10:30 until 6:00
                        Saturday - 10:00 until 5:00
                        </ul>
                   </h4>
                </div>
            </div>
        );
    }
}