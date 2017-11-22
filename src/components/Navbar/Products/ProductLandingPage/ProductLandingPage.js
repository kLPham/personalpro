import React, {Component} from 'react';
// import BridalC from './BridalC/BridalC';
// import DesignerP from './DesignerP/DesignerP';
// import Accessories from './Accessories/Accessories';
import { Link } from 'react-router-dom';
import './ProductLandingPage.css';


export default class ProductLandingPage extends Component{
    render() {
        return(
            <div className="ProductLandingPage">
                <div className="title"><h2>Welcome to our Bridal Shop</h2></div>
                    <hr />
                <div className="product-list">
                        <div className="Bridal_Collection">
                           <Link to="/Products/BridalCollection"><span>Bridal Collection</span></Link>
                         </div>
                        <div className="DesignerP">
                            <Link to="/Products/DesignerP"><span>Designer Pre-Owned Collection</span></Link>
                        </div>
                        <div className="Formal_Gown">              
                            <Link to="/Products/FormalGowns"><span>Formal Gowns</span></Link>  
                        </div>
                        <div className="prom">
                            <Link to="/Products/Prom"><span className="p">Prom</span></Link>
                        </div>
               </div>
            </div>
        );
    }
}