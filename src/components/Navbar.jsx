import '../assets/styles/Navbar.css';
import logo from '../assets/Images/logo2.png';
import bookmark from '../assets/Images/bookmark.png';
import search from '../assets/Images/search.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button onClick={() => navigate('/Home')}>
                <img src={logo} className="nav-logo"/>
            </button>
            
            <a className='nav-btn' onClick={() => navigate('/Rockets')}>ROCKETS</a>
            <a className='nav-btn' onClick={() => navigate('/Launches')}>LAUNCHES</a>
            <a className='nav-btn' onClick={() => navigate('/SHIPS')}>SHIPS</a>

            <div className='nav-right'>
                <button className="nav-btn2" >
                    <img src={bookmark} />
                </button>
                <button className="nav-btn2" >
                    <img src={search} />
                </button>
            </div>
            
        </div>
    );
}