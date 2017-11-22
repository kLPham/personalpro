import React, {Component} from 'react';
import axios from 'axios';


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
 
    
    componentDidMount() {
        axios.get('/api/products/prom').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    handleAddToCart(item){
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log)
    }

    render() {
        const allProducts = this.state.productsToDisplay.map(prom =>{
            console.log("Products redering",prom)
        return(

                <div className="prom" key={prom.id}>
                    <p>Brand: { prom.brand }</p>
                    <img src={ prom.image_url }></img>
                    <p>Description: { prom.description }</p>
                    <p>Size: { prom.size }</p>
                    <p>Color: { prom.color }</p>
                    <p>Unit_Price: { prom.unit_price }</p>
                    <p>Quantity: { prom.quantity }</p>
                    <button onClick={ () => this.handleAddToCart(prom)}>Add to Cart</button>
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