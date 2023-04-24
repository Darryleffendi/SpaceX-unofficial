import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../lib/getRockets";
import Card from "../components/Card.jsx";
import InternetError from "./errors/Error400";
import { useContext } from "react";
import { ThemeContext } from "../App";
import bg from "../assets/Images/Pages/rockets.jpg";
import "../assets/styles/Page.css"
import RocketCards from "../components/Cards/RocketCards";
import { useNavigate } from "react-router-dom";

const Rockets = () => {

    const { loading , error, data } = useQuery(GET_ROCKETS);
    const compactTheme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
    <>
        {
            (loading) ? <div></div> : ((error) ? (() => navigate('/400badrequest')) :
            
            (compactTheme) ? (
                // Compact mode
                <>
                <div className="compact-header" style={{backgroundImage: `url(${bg})`}}>
                    <h1 className="font-main">ROCKETS</h1>
                </div>

                <div style={{width:"100vw", height:"100vh"}}></div>

                <div className="fullscreen bg-default no-overflow">
                    <div className="content-scroll">
                        <div className="page-content">
                            <RocketCards data={data}/>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <RocketCards data={data}/>
            )
        )}
    </>
    );
}

export default Rockets;