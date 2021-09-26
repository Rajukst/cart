import React from 'react';
import MyShop from '../Product-Shop/MyShop';
import './Header.css'

const Header = () => {
    return (
        <div className='h-component'>
            <div className="header-section">
                <h1>Hello I am from header </h1>
                <h2>Wellcome to your fevorute grosary shop</h2>
            </div>

            <MyShop></MyShop>
        </div>
    );
};

export default Header;