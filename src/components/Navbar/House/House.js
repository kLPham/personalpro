import React, {Component} from 'react';
import './House.css';
// import wedding from './wedding.jpg';
// import User from '../User_Link';
// import b from './b.jpg';
import ProductLandingPage from '../Products/ProductLandingPage/ProductLandingPage';


export default class House extends Component{
    render() {
        return(
            <div className="Home">
                <h2 className="Home-title">Congratulations on your engagement!</h2>
                <h3 className="Home-body">New Style Fall 2017</h3>
                <ProductLandingPage />
                <h3 className="Home-Image">Different Style for Every Bride</h3>
            </div>
        );
    }
}