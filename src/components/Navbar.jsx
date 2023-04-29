import { useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/Images/logo2.png';
import searchImg from '../assets/Images/search.png';
import bookmark from '../assets/Images/bookmark.png';
import launch from '../assets/Images/launchnav.png';
import rocket from '../assets/Images/rocketnav.png';
import logonav from '../assets/Images/logonav.png';
import $ from 'jquery';
import Search from './Search';
import React, { useState } from 'react';

export const SearchContext = React.createContext();

export const Navbar = ({ children }) => {

    const navigate = useNavigate();
    const [searchClick, setSearchClick] = useState(false);

    $('.navbar').css('background-color', '#00000000');
    
    return (
        <SearchContext.Provider value={searchClick}>
        <div className="navbar">
            <Search setSearchClick={setSearchClick} />
            <button className='btn-clear' onClick={() => navigate('/Home')}>
                <img alt='btn' src={logo} className="nav-logo"/>
            </button>
            
            <button className='nav-btn nav-desktop btn-clear' onClick={() => navigate('/Rockets')}>ROCKETS</button>
            <button className='nav-btn nav-desktop btn-clear' onClick={() => navigate('/Launches')}>LAUNCHES</button>
            <button className='nav-btn nav-desktop btn-clear' onClick={() => navigate('/Bookmarks')}>BOOKMARKS</button>

            <div className='nav-right nav-desktop'>
                { children }

                <button className="nav-btn2 btn-clear" onClick={() => setSearchClick(!searchClick)} >
                    <img alt='btn' src={searchImg} />
                </button>
            </div>

            {
                (searchClick) ? <></> : (
                    <div className='nav-mobile mobile-context-btn'>
                        { children }
                    </div>
                )
            }
            
            <div></div>
        </div>
        
        <div className='nav-bottom nav-mobile'>
            <div className='bottom-flex'>
                <button className='nav-bottom-btn' onClick={() => {
                    navigate('/Launches');
                    $('.navbar').css('opacity', '100%');
                    $('.navbar').css('margin-top', '0');
                }}>
                    <img src={launch} alt='btn' />
                    <p className='font-p'>LAUNCHES</p>
                </button>
                <button className='nav-bottom-btn' onClick={() => {
                    navigate('/Rockets');
                    $('.navbar').css('opacity', '100%');
                    $('.navbar').css('margin-top', '0');
                }}>
                    <img src={rocket} alt='btn' />
                    <p className='font-p'>ROCKETS</p>
                </button>
                <button className='nav-bottom-main' onClick={() => {
                    navigate('/Home');
                    $('.navbar').css('opacity', '100%');
                    $('.navbar').css('margin-top', '0');
                }}>
                    <img src={logonav} alt='btn' />
                </button>
                <button className='nav-bottom-btn' onClick={() => {
                    navigate('/Bookmarks');
                    $('.navbar').css('opacity', '100%');
                    $('.navbar').css('margin-top', '0');
                }}>
                    <img src={bookmark} alt='btn' /><p className='font-p'>BOOKMARK</p>
                </button>
                <button className='nav-bottom-btn' onClick={() => {
                    setSearchClick(!searchClick)
                    $('.navbar').css('opacity', '100%');
                    $('.navbar').css('margin-top', '0');
                }}>
                    <img src={searchImg} alt='btn' /><p className='font-p'>SEARCH</p>
                </button>
            </div>
        </div>
        </SearchContext.Provider>
        
    );
}
