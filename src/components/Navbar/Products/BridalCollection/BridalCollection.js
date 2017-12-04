import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BridalCollection.css';

// import './BridalCollection.css';
// import Details from '../../Details/Details';

import RaisedButton from 'material-ui/RaisedButton';


export default class BridalCollection extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: [],
            productsToDisplay: [],
            filteredProducts: [],
            sortVal: '',
            searchVal: ''
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
            
                <div id="bridal" key={bridalcollection.id}>
                     <Link to={`/Products/Details/${bridalcollection.product_id}`}><img id="productImage" alt="image_url" src={ bridalcollection.image_url }></img></Link>
                <div className="font">
                    <p >{ bridalcollection.brand }</p>
                    <p>${ bridalcollection.price }</p> 
                </div>
                    <br />
                </div>
        )}
        );

        return(
           <div>
              <h3 className="shopTitle" >Welcome to our Bridal Collection</h3>
                    <div className="productList"> { allProducts } </div>
            </div>       
           
        )
      
    }


}

