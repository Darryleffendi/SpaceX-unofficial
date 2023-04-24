import { useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/Images/logo2.png';
import bookmark from '../assets/Images/bookmark.png';
import search from '../assets/Images/search.png';
import $ from 'jquery';

export const Navbar = ({ children }) => {

    const navigate = useNavigate();
    $('.navbar').css('background-color', '#00000000')

    return (
    <>
        <div className="navbar">
            <button onClick={() => navigate('/Home')}>
                <img alt='btn' src={logo} className="nav-logo"/>
            </button>
            
            <button className='nav-btn nav-desktop' onClick={() => navigate('/Rockets')}>ROCKETS</button>
            <button className='nav-btn nav-desktop' onClick={() => navigate('/Launches')}>LAUNCHES</button>
            <button className='nav-btn nav-desktop' onClick={() => navigate('/Bookmarks')}>BOOKMARKS</button>

            <div className='nav-right nav-desktop'>
                { children }
                <button className="nav-btn2" >
                    <img alt='btn' src={search} />
                </button>
            </div>

            <div></div>
        </div>
        
        <div className='nav-bottom nav-mobile'>

        </div>
    </>
        
    );
}