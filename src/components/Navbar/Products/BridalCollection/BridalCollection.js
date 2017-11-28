import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './BridalCollection.css';
// import Details from '../../Details/Details';


export default class BridalCollection extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: [],
            productsToDisplay: []
        };
    }
  
    //request for a response of bridal collection from database:
    componentDidMount() {
        axios.get('/api/products/bridal_collection').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    render() {
        const allProducts = this.state.productsToDisplay.map(bridalcollection =>{
            console.log("Products redering",bridalcollection)
        return(
        <div>
            <div className="product_list_BC">
                <div className="bridal_collection" key={bridalcollection.id}>
                     <Link to={`/Products/Details/${bridalcollection.product_id}`}><span><img alt="image_url" src={ bridalcollection.image_url }></img></span></Link>
                    <p>{ bridalcollection.brand }</p>
                    <p>${ bridalcollection.price }</p> 
                    <br />
                </div>
            </div>
        </div>
        )}
        );

        return(
            <div>
                    <div> { allProducts } </div>
                   
            </div>
        )
      
    }


}

