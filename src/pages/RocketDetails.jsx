import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../assets/styles/Page.css'
import { GET_ROCKET_BY_ID } from "../lib/getRocketByID";
import { RocketData } from "../assets/RocketData.jsx"
import RocketOverview from "../components/Cards/RocketOverview.jsx"
import Engine from "../components/Cards/Engine";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import dollar from '../lib/functions/dollar.jsx';
import Footer from "../components/Footer";
import bookmarkImg from "../assets/Images/bookmark.png";
import bookmarkedImg from "../assets/Images/bookmarked.png";
import checkBookmark from "../lib/functions/checkBookmark";
import addBookmark from "../lib/functions/addBookmark";
import removeBookmark from "../lib/functions/removeBookmark";
import LoadingPage from "../components/LoadingPage";

const RocketDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const extraData = RocketData[id];

    const { loading, error, data } = useQuery(GET_ROCKET_BY_ID, {
        variables: { rocketId: id }
    });

    const [bookmarked, setBookmarked] = useState(checkBookmark(id));    
    
    const handleBookmark = () => {
        if(!bookmarked) {

            let active = 'active';
            if(!data.rocket.active) active = 'inactive';
            
            setBookmarked(true);
            addBookmark(
                id,
                'Rockets',
                data.rocket.name,
                `${data.rocket.company}'s ${active} aircraft`.toUpperCase(), 
                `./assets/Images/Rockets/${id}.jpg`
            );
        } else {
            setBookmarked(false);
            removeBookmark(id);
        }
    }

    let country = '';
    if(data && data.rocket.country === 'United States') {
        country = 'USA';
    } else if(data) {
        country = 'MARSHALL ISLANDS'
    }

    return (
    <>
    {
        (loading) ? <LoadingPage /> : ((error) ? (() => navigate('/Error/400badrequest')) : 
        ( <>

            <div className="compact-header" style={{backgroundImage: `url("/assets/Images/Rockets/${id}_2.jpg")`}}>
                <div className="header-inner">
                    <h1 className="font-main m-0">{data.rocket.name.toUpperCase()}</h1>
                    <p className="font-p">{extraData.desc}</p>
                </div>
            </div>

            <Parallax pages={8} className='custom-scroll'>
                
                <ParallaxLayer>
                    <div className="fullscreen">
                        <button className="bookmark-btn font-main fs-xs" onClick={() => handleBookmark()}>
                            {
                                (bookmarked) ? <>
                                    <p>BOOKMARKED</p> <img src={bookmarkedImg} />
                                </> : <>
                                    <p>BOOKMARK</p> <img src={bookmarkImg} />
                                </>
                            }
                        </button>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1}>
                        <div style={{height:'40vh', justifyContent:'space-around'}} className='w-100 bg-black flex'>
                            <div className="rocket-subhead">
                                <p className="font-p m-0 text-center fs-xs o-50">FLYING SINCE</p>
                                <h1 className="font-main m-0 text-center fs-m">{data.rocket.first_flight.slice(0, 4)}</h1>
                            </div>

                            <div className="rocket-subhead">
                                <p className="font-p m-0 text-center fs-xs o-50">COST PER LAUNCH</p>
                                <h1 className="font-main m-0 text-center fs-m">{dollar(data.rocket.cost_per_launch)}</h1>
                            </div>

                            <div className="rocket-subhead">
                                <p className="font-p m-0 text-center fs-xs o-50">BASED IN</p>
                                <h1 className="font-main m-0 text-center fs-m">{country}</h1>
                            </div>
                        </div>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 1.4, end:4.5}} className='z--10'>

                    <img src={`/assets/Images/Rockets/${id}_3D.jpg`} className='rocket-3d-bg'/>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1.9, end:2.4}} className='z-10'>
                    <div className="rocket-desc">
                        <p className="font-p" >
                            {data.rocket.description}
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 3.2, end:4.5}} className='z-10'>
                    <RocketOverview rocket={data.rocket}/>
                </ParallaxLayer>
                
                <ParallaxLayer sticky={{ start:4.5, end: 5.2}} className='z-20'>
                    <div className="fullscreen bg-default flex center">
                        <div className="rocket-iframe">
                            {RocketData[id].iframe}
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start:5, end:6.8}} className='z--10'>
                    <Engine data={data.rocket.engines}/>
                    <Footer bg='black'/>
                </ParallaxLayer>

            </Parallax>

        </>))
        }
    </>
    )
}

export default RocketDetails;