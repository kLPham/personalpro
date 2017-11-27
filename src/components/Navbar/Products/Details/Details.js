import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

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
    
    //GET EACH PRODUCT WITH THE UNIQUE ID:
    componentDidMount() {
        axios.get(`/api/product/${this.props.match.params.product_id}`).then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log)
             alert("Your bank account is now empty!")
    }

    render() {
        const aProduct = this.state.productsToDisplay.map(product_id =>{
            console.log("Products redering",product_id)
        return(
            <div key={product_id .id}>
                
                <div>
                    <div >
                        <p>Brand: { product_id .brand }</p>
                        <img alt="image_url" src={ product_id .image_url }></img>
                        <p>Description: { product_id .description }</p>
                        <p>Size: { product_id.size }</p>
                        <p>Color: { product_id.color }</p>
                        <p>Price: ${ product_id.price }</p>
                        <p>Quantity: { product_id.quantity }</p>
                        <button className="btn" onClick={ () => this.handleAddToCart(product_id )}>Add to Cart</button>
                        <hr/>
                        <br />
                    </div>
                </div>
            </div>
        )}
        );

        return(
        <div>
           <div> { aProduct } </div>
           <div>
           <Link to="/Products">
               <p> { '<'} Back To Bridal Shop </p>
           </Link>
            </div>
        </div>
        )
    }
}


// function mapStateToProps(state) { //redux is gonna call this function whenever the state in the store changes.
//     return state
//   }

// //do the same for every component but put: export default connect(mapStateToProps, {}) (Cart);

// export default connect(mapStateToProps, { handleCartAdd }) (Details);
