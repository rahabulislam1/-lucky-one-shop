import React from 'react';
import './Footer.css';
import img from '../../../Images/Logo/Copyright-Logo.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer'>
            <h3 className='text-center'>Copyright <img src={img} alt="" /> {year}</h3>
        </div>
    );
};

export default Footer;