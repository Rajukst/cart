import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    // console.log(props.products)
    const { name, price, seller, key, description, img } = props.products
    return (
        <div className='product-corner'>
            <div className="product-itm">
                <img src={img} alt="" />
                <h3> Name:{name}</h3>
                <p> Price: {price}</p>
                <p> Company: {seller}</p>
                <p> product Key:{key}</p>
                <p> Description:{description}</p>
                <button onClick={() => props.addCart(props.products)}> {element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;