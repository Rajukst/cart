import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />
const Cart = (props) => {
    const { getNewCartItem } = props;

    // calculating total amount
    let initialAmount = 0;
    for (const newAmount in getNewCartItem) {
        initialAmount = initialAmount + newAmount.price;
        console.log(initialAmount)
    }
    return (
        <div className='cart-component'>
            <h1>{element} Your Cart Summary</h1>
            <h3> Total Product Added: {props.getCart.length} </h3>
            <h4> Total Cost:</h4>
        </div>
    );
};

export default Cart;