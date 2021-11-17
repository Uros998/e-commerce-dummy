import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src="https://raw.githubusercontent.com/ZhangMYihua/lesson-7/371b9e96848ac9f8efe0b98930bf8da9ebc33cef/src/assets/crown.svg" className="logo" alt="logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;
