import '../assets/styles/Navbar.css';
import logo from '../assets/Images/logo2.png';
import bookmark from '../assets/Images/bookmark.png';
import search from '../assets/Images/search.png';
import hamburger from '../assets/Images/hamburger.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    return (
    <>
        <div className="navbar">
            <button onClick={() => navigate('/Home')}>
                <img src={logo} className="nav-logo"/>
            </button>
            
            <a className='nav-btn nav-desktop' onClick={() => navigate('/Rockets')}>ROCKETS</a>
            <a className='nav-btn nav-desktop' onClick={() => navigate('/Launches')}>LAUNCHES</a>
            <a className='nav-btn nav-desktop' onClick={() => navigate('/Ships')}>SHIPS</a>

            <div className='nav-right nav-desktop'>
                <button className="nav-btn2 " >
                    <img src={bookmark} />
                </button>
                <button className="nav-btn2" >
                    <img src={search} />
                </button>
            </div>

            <div></div>
        </div>
        
        <div className='nav-bottom nav-mobile'>

        </div>
    </>
        
    );
}