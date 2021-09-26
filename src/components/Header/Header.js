import React from 'react';
import MyShop from '../Product-Shop/MyShop';
import './Header.css'

const Header = () => {
    return (
        <div className='h-component'>
            <div className="header-section">
                <h1>Wellcome <span>Nilima Electronic</span> </h1>
                <p>At select Best Buy stores, we can repair your out-of-warranty iPhone or Samsung phone screen, no matter where you bought it.</p>
                <h2>Total Budget: 100 Million</h2>
            </div>
            <div className="myCart">
                <MyShop></MyShop>
            </div>
        </div>
    );
};

export default Header;