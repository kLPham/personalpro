import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FormalGowns.css';


export default class FormalGown extends Component{
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
  
    
    componentDidMount() {
        axios.get('/api/products/formal_gowns').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log);
             alert("Your bank account is now empty!")

    }

    render() {
        const allProducts = this.state.productsToDisplay.map(formalgown =>{
            console.log("Products redering",formalgown)
        return(

                <div id="formal" key={formalgown.id}>
                    <Link to={`/Products/Details/${formalgown.product_id}`}>
                        <img id="productImage"alt="image_url" src={ formalgown.image_url }></img></Link>
                    <p>BRAND: { formalgown.brand }</p>
                    <p>PRICE: { formalgown.price }</p>
                    <hr/>
                    <br />
                </div>
        )}
        );

        return(
            <div>
                    <h3 className="shopTitle" >Welcome to our Formal Gowns Collection</h3>
                    <div className="productList"> { allProducts } </div>
            </div>
        )
    }
}