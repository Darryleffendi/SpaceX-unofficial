import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_LAUNCH_BY_ID } from "../lib/getLaunchByID";
import nomedia from '../assets/Images/Pages/nomedia.jpg'
import Footer from "../components/Footer";
import linkToEmbed from "../lib/functions/linkToEmbed";
import { useState } from "react";
import addBookmark from "../lib/functions/addBookmark";
import removeBookmark from "../lib/functions/removeBookmark";
import checkBookmark from "../lib/functions/checkBookmark";
import bookmarkImg from "../assets/Images/bookmark.png";
import bookmarkedImg from "../assets/Images/bookmarked.png";
import '../assets/styles/Page.css'
import LoadingPage from "../components/LoadingPage";
import Fade from 'react-reveal/Fade';

const LaunchDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    let images;
    let bg;

    const { loading, error, data } = useQuery(GET_LAUNCH_BY_ID, {
        variables: { launchId: id }
    });

    const [bookmarked, setBookmarked] = useState(checkBookmark(id));

    const handleBookmark = () => {
        if(!bookmarked) {
            setBookmarked(true);
            addBookmark(
                id, 
                'Launches',
                data.launch.mission_name, 
                data.launch.launch_date_local.substring(0, 10), 
                data.launch.links.flickr_images[0]
            );
        } else {
            setBookmarked(false);
            removeBookmark(id);
        }
    }

    if(data)
    {
        images = data.launch.links.flickr_images
        
        bg = images[images.length - 1];
    }
    return (
    <>
    {
        (loading) ? <LoadingPage />: ((error) ? (() => navigate('/Error/400badrequest')) : 
        ( <>
            <Fade>
                <div className="compact-header fullscreen no-overflow flex center" style={{backgroundImage:`url(${bg})`}}>
                    <h1 className="font-main">{data.launch.mission_name.toUpperCase()}</h1>
                </div>
            </Fade>

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

            <div className="launch-details-container fullscreen bg-black">
                <div className="launch-details">
                    <p className="font-p fs-s o-30 m-0">{data.launch.launch_date_local.substring(0,10)}</p>
                    <h1 className="font-main fs-l m-0">{data.launch.mission_name.toUpperCase()}</h1>
                    <p className="font-p fs-s mt-5">{(!data.launch.details) ? 'NO DESCRIPTION' : data.launch.details}</p>
                </div>
                {
                    (data.launch.links.video_link) ? (
                        <iframe width="560" height="315" src={linkToEmbed(data.launch.links.video_link)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    ) : <></>
                }
            </div>
            <div className="fullscreen bg-cover no-overflow" style={{backgroundImage:`url("/assets/Images/Rockets/${data.launch.rocket.rocket.id}_3D.jpg")`, marginTop:'-1px'}}>
                <div className="launch-details">
                    <div className="w-100" style={{height:'30vh'}}></div>
                    <p className="font-p m-0 o-50 fs-s">ROCKET USED</p>
                    <h1 className="font-main m-0 fs-l">{data.launch.rocket.rocket.name.toUpperCase()}</h1>
                    <button className="card-btn font-main" onClick={() => navigate(`/Rockets/Details/${data.launch.rocket.rocket.id}`)}>
                        LEARN MORE
                    </button>
                </div>
            </div>
            <Footer bg='black' />
        </>))
    }
    </>
    )
}

export default LaunchDetails;