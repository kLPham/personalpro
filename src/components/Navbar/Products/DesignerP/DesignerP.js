import React, {Component} from 'react';
import axios from 'axios';


export default class DesignerPreowned extends Component{
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
        // addItem(val){
        //     this.setState({item: val})
        // }
    // componentDidMount() {
    //     axios.get('/api/products/bridal_collection').then(response =>{
    //         this.setState({})
    //         console.log(response);
    //     })
    
    // }
    
    componentDidMount() {
        axios.get('/api/products/designer_preowned_collection').then(response => {
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
        const allProducts = this.state.productsToDisplay.map(b =>{
            console.log("Products redering",b)
        return(

                <div className="designer_preowned_collection" key={b.id}>
                    <p>Brand: { b.brand }</p>
                    <img src={ b.image_url }></img>
                    <p>Description: { b.description }</p>
                    <p>Size: { b.size }</p>
                    <p>Color: { b.color }</p>
                    <p>Unit_Price: { b.unit_price }</p>
                    <p>Quantity: { b.quantity }</p>
                    <button onClick={ () => this.handleAddToCart(b)}>Add to Cart</button>
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