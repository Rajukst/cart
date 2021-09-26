import React, { useEffect, useState } from 'react';
import './MyShop.css'
import Product from '../Product-Item/Product';
import Cart from '../MyCart/Cart';


const MyShop = () => {
    // declaring useState and useEffect for load data 
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('./myData.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // declaring another useState for Product Component
    const [handleCart, setHandleCart] = useState([])

    // creating new array using spreed operator
    const eventHandle = (productItem) => {
        const cartProduct = [...handleCart, productItem];
        setHandleCart(cartProduct);
    }
    return (
        <div className='shop-component'>
            <div className="product-container">
                <h1>Total product: {product.length}</h1>
                <div className="card-section">
                    {
                        // product are mapped to get all property
                        product.map(getProduct => <Product
                            products={getProduct}
                            addCart={eventHandle}
                            key={getProduct.key}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart">
                <Cart getCart={handleCart} ></Cart>
            </div>
        </div>
    );
};

export default MyShop;