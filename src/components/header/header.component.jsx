import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import './header.styles.scss';

const Header = ({currentUser}) => (
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
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/sign-in'>
                        SIGN IN
                    </Link>
            }
        </div>
    </div>
);

export default Header;
