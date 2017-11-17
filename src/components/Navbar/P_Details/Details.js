import React, { Component } from "react";
// import { addToCart } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import swag from '../../../assets/swag';
// import { addToCart } from "../../ducks/reducer";
import axios from 'axios';


class Details extends Component{
    constructor(){
        super()

        this.state={
            data: []
        }
          
        // }  id: [],
        //     brand: '',
        //     description: '',
        //     size: 0,
        //     color: '',
        //     unit_price: 0,
        //     quantity: 0

        this.AddToCart = this.AddToCart.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }
        getProducts(products){
            // window.location.href = "http://localhost:3002/Cart";
            axios.get('/products').then((resp)=> {
                this.setState({data:products})
            })   
    }

       addToCart(id){
            axios.put('/products').then((resp)=>{
               this.setState({data: id})
           })
       }
    render(){
        return(
            
            <div>
                <Link to="/Products">
                <p> { '<'} Back To Results </p>
                </Link>
                <p> {this.state.getProducts}</p>
                <p>{this.state.addToCart}</p>
                {/* <img src={ this.state.img } alt= 'gown' width="350px" /> */}
                {/* <p> {this.state.brand}</p>
                <p> {this.state.description}</p>
                <p> {this.state.size}</p>
                <p> {this.state.color}</p>
                <p> {this.state.unit_price}</p>
                <p> {this.state.Quantity}</p> */}
                <button onClick={this.AddToCart}>Add To Shopping Bag</button>
            </div>

        )
    }
} 

export default Details;