import { memo, useContext } from "react";
import Card from "../Card";
import MiniCard from "../MiniCard";
import { ThemeContext } from "../../App";
import "../../assets/styles/Cards.css"
import nomedia from '../../assets/Images/Pages/nomedia.jpg'

// Memoization to improve performance

const LaunchCards = (data) => {
    let launches = [];
    let launches2 = [];
    let launchYears = {};
    let launchYearDOM = [];

    const compactTheme = useContext(ThemeContext);
    data = data.data;

    // Prioritize Launches with Images (For design purposes)
    if(data) {
        for(let i = data.launches.length - 1; i >= 0 ; i --) {
            if(data.launches[i].links.flickr_images.length > 0) {
                launches.push(data.launches[i]);
            } else {
                launches2.push(data.launches[i]);
            }
        }

        if(compactTheme) {
            for(let i = 0; i < launches.length; i ++) {
                let year = launches[i].launch_date_local.slice(0, 4);

                if(!launchYears[year]) launchYears[year] = [];
                
                launchYears[year].push(launches[i]);
            }

            for(let i = 0; i < launches2.length; i ++) {
                let year = launches2[i].launch_date_local.slice(0, 4);

                if(!launchYears[year]) launchYears[year] = [];
                
                launchYears[year].push(launches2[i]);
            }
            
            Object.keys(launchYears).map((key, index) => {
                launchYearDOM.push(
                    <>
                    <h1 className="font-main content-h">{key}</h1>
                    <div className="content-scroll">
                        <div className="page-content">
                            {
                                launchYears[key].map((launch) => {
                                    let title = launch.mission_name;
                                    let content = launch.launch_date_local.slice(0, 10);
                                    let image = launch.links.flickr_images;
                                    if(image.length === 0) image = nomedia;
                                    
                                    return ( 
                                        <MiniCard key={launch.id} title={title.toUpperCase()} content={content.toUpperCase()} image={image}/>
                                        ) 
                                    })
                                }
                        </div>
                    </div>
                    </>
                );
            });

            launchYearDOM.reverse();
        }
    }

    return ( <>
        {
            (compactTheme) ? (
                launchYearDOM.map((launch) => {
                    return launch;
                })
            ) : ( <>
                {
                    launches.map((launch) => {
                        let title = launch.mission_name;
                        let content = launch.launch_date_local.slice(0, 10);
                        let image = launch.links.flickr_images;
                        
                        return ( 
                            <Card key={launch.id} title={title.toUpperCase()} content={content.toUpperCase()} image={image}/>
                        ) 
                    })
                }
                {
                    launches2.map((launch) => {
                        let title = launch.mission_name;
                        let content = launch.launch_date_local.slice(0, 10);
                        let image = nomedia;
                        
                        return ( 
                            <Card key={launch.id} title={title.toUpperCase()} content={content.toUpperCase()} image={image}/>
                        ) 
                    })
                }
            </>
            )
        }
    </> )
}

export default memo(LaunchCards);