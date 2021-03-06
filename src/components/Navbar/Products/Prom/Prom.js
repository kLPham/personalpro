import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './Prom.css';

export default class Prom extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: [],
            cart: [],
            productsToDisplay: []
        };

        //bind methods
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
  
    //get products from sql data related to prom
    componentDidMount() {
        axios.get('/api/products/prom').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }
    //add items to card and post it in cart component
    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log);
             alert("Item added to cart")

    }

    render() {
        const allProducts = this.state.productsToDisplay.map(prom =>{
            console.log("Products redering",prom)
        return(
                <div id="prom" key={prom.id}>
                     <Link to={`/Products/Details/${prom.product_id}`}><span><img id="productImage" alt="image_url" src={ prom.image_url }></img></span></Link>
                    <p>{ prom.brand }</p>
                    <p>${ prom.price }</p> 
                    <br />
                </div>
        )}
        );

        return(
            <div>
                    <h3 className="shopTitle" >Welcome to our Prom Collection</h3>
                    <div className="productList"> { allProducts } </div>
            </div>
           
        )
    }
}

