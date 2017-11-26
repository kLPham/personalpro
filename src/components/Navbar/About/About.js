import React, {Component} from 'react';
import './About.css';



export default class About extends Component{
    render() {
        const about_us =""
        return(
            <div className="About">
                <h1 className="About-title">About Us</h1>
                
                <br/>
                <div className="container">
                    <p2>Friendly, low pressure boutique with gorgeous gowns! Embro-Bridal Couture has been serving Dallas/Ft Worth for over 2 years. We are family owned and find such joy in helping brides find the gown of their dreams. We offer a vast array of gowns from many amazing designers, and over 300 samples in store. Our gowns range from $800- $3000. We also have a Sample Room of gowns to purchase off the rack at a variety of price points!</p2>

                    <p2>We are a full service boutique, offering bridal gowns and all accessories needed to complete your bridal vision and we offer an in-house seamstress for bridal gown alterations for a one- stop shop to perfect your bridal look.</p2>
                </div>
            </div>
            
        );
    }
}