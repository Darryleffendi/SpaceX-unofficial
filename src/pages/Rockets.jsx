import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../lib/getRockets";
import { useContext } from "react";
import { ThemeContext } from "../App";
import bg from "../assets/Images/Pages/rockets.jpg";
import "../assets/styles/Page.css"
import RocketCards from "../components/Cards/RocketCards";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingPage";
import Fade from 'react-reveal/Fade';

const Rockets = () => {

    const { loading , error, data } = useQuery(GET_ROCKETS);
    const compactTheme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
    <>
        {
            (loading) ? <LoadingPage /> : ((error) ? (() => navigate('/Error/400badrequest')) :
            
            (compactTheme) ? (
                // Compact mode
                <>
                <Fade>
                    <div className="compact-header" style={{backgroundImage: `url(${bg})`}}>
                        <h1 className="font-main">ROCKETS</h1>
                    </div>
                </Fade>

                <div className="fullscreen"></div>

                <div className="fullscreen bg-default no-overflow">
                    <div className="content-scroll">
                        <div className="page-content">
                            <RocketCards data={data}/>
                        </div>
                    </div>
                </div>
                <Footer />
                </>
            ) : (
                // Fullscreen mode
                <RocketCards data={data}/>
            )
        )}
    </>
    );
}

export default Rockets;