import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <Link to='/' className='logo text-dark' href='#'>Магазин</Link>
            <Link to='/cart' className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart'/>
                {numItems}
            </Link>
        </header>
    );
};

export default ShopHeader;