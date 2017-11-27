import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import {  handleCartAdd } from "../../../ducks/reducer";
import { connect } from "react-redux";



class Details extends Component{
    constructor(){
        super()

        this.state={
            data: []
            // id: [],
            // brand: '',
            // description: '',
            // size: 0,
            // color: '',
            // unit_price: 0,
            // quantity: 0
        }
        

        this.handleCartAdd = this.handleCartAdd.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }
        getProducts(products){
            // window.location.href = "http://localhost:3002/Cart";
            axios.get('/products').then((res)=> {
                this.setState({data:products})
            })   
    }

    handleCartAdd(id){
            axios.put('/products').then((res)=>{
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
                <p>{this.state.handleCartAdd}</p>
                {/* <img src={ this.state.img } alt= 'gown' width="350px" /> */}
                {/* <p> {this.state.brand}</p>
                <p> {this.state.description}</p>
                <p> {this.state.size}</p>
                <p> {this.state.color}</p>
                <p> {this.state.price}</p>
                <p> {this.state.quantity}</p> */} 
                <button onClick={this.handleCartAdd}>Add To Shopping Bag</button>
            </div>

        )
    }
} 

function mapStateToProps(state) { //redux is gonna call this function whenever the state in the store changes.
    return state
  }

//do the same for every component but put: export default connect(mapStateToProps, {}) (Cart);

export default connect(mapStateToProps, { handleCartAdd }) (Details);
