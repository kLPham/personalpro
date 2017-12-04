import React, {Component} from 'react';
import './House.css';
import { Link } from 'react-router-dom';

import ProductLandingPage from '../Products/ProductLandingPage/ProductLandingPage';



export default class House extends Component{
    render() {
        return(
            <div className="Home">
                <h2 className="Home-title">Congratulations on your engagement!</h2>
                <h3 className="Home-Image">Fall 2017 Style</h3>
            <div className="group">
                <div className="Bc">
                    <Link to="/Products/BridalCollection"><span className="centered">Bridal Gowns</span></Link>
                </div>
                <div className="F">
                    <Link to="/Products/FormalGowns"><span className="centered">Formal Gowns</span></Link>
                </div>
               
            </div>
            <div className="group2">
                <div className="D">
                    <Link to="/Products/DesignerP"><span className="centered">Designer Pre-Owned</span></Link>
                </div>
            
                <div className="P">
                    <Link to="/Products/Prom"><span className="centered">Prom</span></Link>
                </div>
            </div>
                <ProductLandingPage />
                
            </div>
        );
    }
}