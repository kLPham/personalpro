import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




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

                <div className="formal_gowns" key={formalgown.id}>
                    <Link to={`/Products/Details/${formalgown.product_id}`}>
                        <img alt="image_url" src={ formalgown.image_url }></img></Link>
                    <p>BRAND: { formalgown.brand }</p>
                    <p>PRICE: { formalgown.price }</p>
                    <hr/>
                    <br />
                </div>
        )}
        );

        return(
           <div> { allProducts } </div>
        )
    }
}