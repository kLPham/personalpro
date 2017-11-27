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
    
    componentDidMount() {
        axios.get('/api/products/designer_preowned_collection').then(response => {
            this.setState({ productsToDisplay: response.data })
          console.log("YAY",response);
        });
      }

    handleAddToCart(item){
        // console.log("justin")
        axios.post('/api/cart',{item: item})
             .then((response) => this.setState({cart: response.data}))
             .catch(console.log)
             alert("Item added to cart")
    }

    render() {
        // const productId = this.state.item.map((product_id)=>{
        //     // <li key={product_id.id}></li>
        // })
        const allProducts = this.state.productsToDisplay.map(designerpreowned =>{
            console.log("Products redering",designerpreowned)
        return(
            <div className="product_list">
                <div className="designer_preowned_collection" key={designerpreowned.id}>
                    <p>Brand: { designerpreowned.brand }</p>
                    <img alt="image_url" src={ designerpreowned.image_url }></img>
                    <p>Description: { designerpreowned.description }</p>
                    <p>Size: { designerpreowned.size }</p>
                    <p>Color: { designerpreowned.color }</p>
                    <p>Price: ${ designerpreowned.price }</p>
                    <p>Quantity: { designerpreowned.quantity }</p>
                    <button className="btn" onClick={ () => this.handleAddToCart(designerpreowned)}>Add to Cart</button>
                    <hr/>
                    <br />
                </div>
               
            </div>
        )}
        );

        return(
           <div> { allProducts } </div>
        )
    }
}
