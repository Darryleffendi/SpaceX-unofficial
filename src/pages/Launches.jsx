import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import { GET_LAUNCHES } from "../lib/getLaunches";
import bg from "../assets/Images/Pages/launches.jpg"
import LaunchCards from "../components/Cards/LaunchCards";
import $ from 'jquery'
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingPage";
import Fade from 'react-reveal/Fade';

const Launches = () => {

    const { loading , error, data } = useQuery(GET_LAUNCHES);
    const compactTheme = useContext(ThemeContext);
    const navigate = useNavigate();

    let scrollpos = 0;
    const handleScroll = () => {
        if(!compactTheme) return;
        
        scrollpos = window.pageYOffset;
        if(scrollpos >= 750) {
            $('.navbar').css('background-color', '#0b0911');
        } else {
            $('.navbar').css('background-color', '#00000000');
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [compactTheme, handleScroll]);

    return (
        <>
            {
                (loading) ? <LoadingPage /> : ((error) ? (() => navigate('/Error/400badrequest')) :
                
                (compactTheme) ? (
                    // Compact mode
                    <>
                    <Fade>
                        <div className="compact-header" style={{backgroundImage: `url(${bg})`, backgroundPositionY: "center"}}>
                            <h1 className="font-main">LAUNCHES</h1>
                        </div>
                    </Fade>

                    <div style={{width:"100vw", height:"100vh"}}></div>

                    <div className="fullscreen bg-default no-overflow" style={{height:"1550vh", overflowY: "auto"}}>
                        <LaunchCards data={data} />
                    </div>
                    <Footer />
                    </>
                ) : (
                    <LaunchCards data={data} />
                )
            )}
        </>
    );
}

export default Launches;