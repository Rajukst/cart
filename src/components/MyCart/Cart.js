import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />
const Cart = (props) => {
    const { getCart } = props;
    console.log(getCart)
    // calculating total amount
    let initialAmount = 0;
    let productCount = '';
    for (let newAmount of getCart) {
        initialAmount = initialAmount + newAmount.price;
        productCount = productCount + newAmount.name
        console.log(initialAmount)
    }
    return (
        <div className='cart-component'>
            <h1>{element} Your Cart Summary</h1>
            <div className='pragraph'>
                <p>Product Count: {productCount}</p>
            </div>

            <h3> Total Product Added: {props.getCart.length} </h3>
            <h4> Total Cost: {initialAmount.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;