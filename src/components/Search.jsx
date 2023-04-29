import { useContext, useState } from "react"
import { SearchContext } from "./Navbar";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../lib/getLaunches";
import LoadingPage from "./LoadingPage";
import Error400 from "../pages/errors/Error400";
import SearchCard from "./Cards/SearchCard";
import { useNavigate } from 'react-router-dom';

const Search = ({setSearchClick}) => {
    
    const clicked = useContext(SearchContext);
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    const [ message, setMessage ] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    if(loading) return <div></div>
    else if(error) return <div></div>

    let dataList = []

    for(let i = data.launches.length - 1; i >= 0; i --) {
        if(data.launches[i].mission_name.toLowerCase().includes(message.toLowerCase())) {
            dataList.push(data.launches[i]);
        }
    }

    return ( <>
        <div className="search-div fixed bg-default transition fullscreen" style={ clicked ? {top: '0vh'} : {top: '100vh'}}>
            <div className="searchbar-container">
                <form className="form" onSubmit={(e) => {e.preventDefault(); return false}}>
                    <button type="button">
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input onChange={handleChange} className="input" placeholder="Search Launches" required="" type="text" />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>

                <div className="close-container" onClick={() => setSearchClick(!clicked)}>
                    <div className="leftright"></div>
                    <div className="rightleft"></div>
                </div>
            </div>

            <div className='search-contents dark-scroll flipped'>
                {
                    dataList.map((item, key) => {
                        return <SearchCard 
                            key ={key}
                            image={item.links.flickr_images}
                            desc = {item.launch_date_local.substring(0, 10)}
                            title = {item.mission_name.toUpperCase()}
                            children = {
                                <button className="card-btn font-main" onClick={
                                    () => {
                                        navigate(`/Launches/Details/${item.id}`)
                                        setSearchClick(!clicked)
                                    }
                                }>
                                    LEARN MORE
                                </button>
                            }
                        />
                    })
                }
            </div>

        </div>
    </>)
}

export default Search