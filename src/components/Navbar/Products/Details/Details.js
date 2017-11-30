import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import './Details.css';

// import {  handleCartAdd } from "../../../ducks/reducer";
// import { connect } from "react-redux";




export default class Details extends Component{
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
    
    //GET EACH PRODUCT WITH THE UNIQUE ID: :)
    componentDidMount() {
        axios.get(`/api/product/${this.props.match.params.product_id}`).then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY Kelly is awesome",response);
        });
      }

      //POST ITEMS TO CART WHEN ADDED :)
    handleAddToCart(item){ //:)
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log)
             alert("Your bank account is now empty!")
    }

// access size on product object
// convert from string to array
// map over array, return option tag with size 



    render() {
        const aProduct = this.state.productsToDisplay.map(product_id =>{

            console.log("Products redering",product_id)
            console.log(product_id.size.split(","))
        return(
            <div key={product_id.id}>
             <Link to="/Products">
               <p> { '<'} Back To Bridal Shop </p>
             </Link>
                
                <div className="details">
                    <img className="detailImage" alt="image_url" src={ product_id .image_url }></img>
                    <div className="detail">
                        <p>BRAND: { product_id .brand }</p>
                        <p>DESCRIPTION: { product_id .description }</p>
                            <select>
                                <option>Select Size</option>
                                {product_id.size.split(',').map(size => (
                                <option>SIZE: { size }</option>
                                ))}
                            </select>
                            <hr />
                            <select>
                                <option>Select Color</option>
                                {product_id.color.split(',').map(color => (
                                    <option>COLOR: { color }</option>
                                ))}
                            </select>
                            <hr />
                            <select>
                                <option>QTY: { product_id.quantity }</option>
                            </select>
                        <p>Price: ${ product_id.price }</p>
                        <button className="btn" onClick={ () => this.handleAddToCart(product_id )}>Add to Cart</button>
                        <br />
                    </div>
                </div>
            </div>
        )}
        );

        return(
        <div>
           <div> { aProduct } </div>

        </div>
        )
    }
}



