import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from "../lib/getRockets";
import { useContext } from "react";
import { ThemeContext } from "../App";
import bg from "../assets/Images/Pages/bookmarks.webp";
import "../assets/styles/Page.css"
import RocketCards from "../components/Cards/RocketCards";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import getBookmarks from "../lib/functions/getBookmarks.jsx"
import BookmarkCards from "../components/Cards/BookmarkCards";
import Fade from 'react-reveal/Fade';

const Bookmark = () => {

    const data = getBookmarks();
    const compactTheme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
    <>
    {
        (compactTheme) ? ( 
        // Compact mode
        <>
        <Fade>
            <div className="compact-header" style={{backgroundImage: `url(${bg})`}}>
                <h1 className="font-main">BOOKMARKS</h1>
            </div>
        </Fade>

        <div className="fullscreen"></div>
        {
            (data && data.length > 0) ? ( <>    

            <div className="fullscreen bg-default no-overflow"  style={{height:"200vh", overflowY: "auto"}}>
                <BookmarkCards data={data}/>
            </div>
            <Footer />
            </>
        ) : ( <>
            <div className="fullscreen flex center bg-default">
                <h1 className="font-main fs-l">NO BOOKMARKS</h1>
            </div>
            <Footer />
        </> 
        )}
        </>
        ) : (
            // Fullscreen mode
            <>
            {
                (data && data.length > 0) ? (  
                    <BookmarkCards data={data}/>
                ) : (
                    <div className="fullscreen flex center">
                        <h1 className="font-main fs-l">NO BOOKMARKS</h1>
                    </div>
                )
            }</>
        )
    }
    </>
    );
}

export default Bookmark;