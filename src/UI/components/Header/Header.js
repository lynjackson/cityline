import React from 'react';
import logo_img from '../../styles/assets/cl-logo.png'
import menu_icon from '../../styles/assets/Menu.png'
import './Header.scss';

export const Header = () => {
    return(
        <div id='header'> 
            <img className='logo' src={logo_img} alt={''}/> 
            <img className='menu' src={menu_icon} alt={''}/> 
        </div>
    )
}