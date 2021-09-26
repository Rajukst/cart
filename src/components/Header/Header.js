import React from 'react';
import MyShop from '../Product-Shop/MyShop';
import './Header.css'

const Header = () => {
    return (
        <div className='h-component'>
            <div className="header-section">
                <h1>Nilima Electronic <span>hkahefkash</span> </h1>
                <h2>Wellcome to Nilima Electronics shop</h2>
            </div>
            <div className="myCart">
                <MyShop></MyShop>
            </div>
        </div>
    );
};

export default Header;