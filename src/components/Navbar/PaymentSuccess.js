import React, {Component} from 'react';
import './Navbar.css';
import Sh from './Sh.gif';
import Message from './Message.png';

export default class PaymentSuccess extends Component{
    render() {
        return(
            <div className="SuccessContainer">
                <h4 className="Sh">Thank You For Shopping With us</h4>
                <img className="prettyGirl" alt="prettyGirlInWhiteDress" src={Sh}></img>
                <img className="bubble" src={Message}></img>
            </div>
        );
    }
}