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
                <br />
                <br />
                <div className="product-list">
                        <div className="Bridal_Collection">
                            <img src="http://img.davidsbridal.com/is/image/DavidsBridalInc/ZP341835_IVORY_ZP_PROD10_008?$plpproductimgdesktop_3up$"></img>
                   
                           
                            <Link to="/Products/BridalCollection"><span>Bridal Collections</span></Link>
                            <hr /> 
                        </div>
                        <div className="DesignerP">
                            <img src="http://img.davidsbridal.com/is/image/DavidsBridalInc/VW351346_IVORY_VW_S17PROD_001?$plpproductimgdesktop_3up$"></img>
                           
                            <Link to="/Products/DesignerP"><span>Designer Pre-Owned Collection</span></Link>
                            <hr />
                        </div>
                        <div>
                            <img src="http://img.davidsbridal.com/is/image/DavidsBridalInc/1711P2381%20AQUANUDE?$plpproductimgdesktop_3up$"></img>   
                                             
                            <Link to="/Products/FormalGowns"><span>Formal Gowns</span></Link>
                            <hr />
                        </div>
                        <div className="prom">
                            {/* <img src="http://img.davidsbridal.com/is/image/DavidsBridalInc/1711P2703%20LAVENDERMULTI?$plpproductimgdesktop_3up$" ></img> */}
                            <img src="http://img.davidsbridal.com/is/image/DavidsBridalInc/1712P2465%20BLUSH?$plpproductimgdesktop_3up$"></img>
                            <img src="http://img.davidsbridal.com/is/image/DavidsBridalInc/1579_MBLKGOLD_PROM_PROD11_072?$plpproductimgdesktop_3up$"></img>
                            <Link to="/Products/Prom"><span>Prom</span></Link>
                            <hr />
                        </div>
                    
               </div>
            </div>
        );
    }
}