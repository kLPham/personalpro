import React from 'react';
// import BridalC from './BridalC/BridalC';
// import DesignerP from './DesignerP/DesignerP';
// import Accessories from './Accessories/Accessories';
import './Products.css';


export default function Products(props) {
        return(
            <div className="Products">
                <div className='Products-Header'>
                    
                </div>
                {props.children} 
             
            </div>
        );
    }
