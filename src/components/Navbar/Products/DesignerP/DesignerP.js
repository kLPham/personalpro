import React, {Component} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';



// import Details from '../Details/Details';


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
             alert("Your bank account is now empty!")
    }

    render() {
        // const productId = this.state.item.map((product_id)=>{
        //     // <li key={product_id.id}></li>
        // })
        const allProducts = this.state.productsToDisplay.map(designerpreowned =>{
            console.log("Products redering",designerpreowned)
        return(
            <div>
                {/* <div>
                        <Link to="/Products">
                            <p> { '<'} Back To Bridal Shop </p>
                        </Link>
                </div> */}
                <div className="product_list">
                    <div className="designer_preowned_collection" key={designerpreowned.id}>
                        <Link to={`/Products/Details/${designerpreowned.product_id}`}>
                        <img alt="image_url" src={designerpreowned.image_url }></img></Link>
                        <p>BRAND: { designerpreowned.brand }</p>
                        <p>PRICE: ${ designerpreowned.price }</p>
                        <hr/>
                        <br />
                    </div>
                </div>
            </div>
        )}
        );

        return(
           <div> { allProducts } </div>
        )
    }
}
