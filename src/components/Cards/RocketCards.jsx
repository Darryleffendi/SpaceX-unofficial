import { memo, useContext } from "react";
import Card from "./Card";
import MiniCard from "./MiniCard";
import { ThemeContext } from "../../App";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/Page.css';

// Memoization to improve performance

const RocketCards = (data) => {
    
    let rockets = [];

    const compactTheme = useContext(ThemeContext);
    const navigate = useNavigate();
    data = data.data;
    

    // Reverse Order (from latest to oldest)
    if(data) {
        for(let i = data.rockets.length - 1, idx = 0; i >= 0 ; i --, idx ++) {
            rockets[idx] = data.rockets[i];
        }
    }

    return ( <>
        {
            rockets.map((rocket, key) => {
                let title = rocket.name;
                let content = rocket.company + "'s ";
                let image = "/assets/Images/Rockets/" + rocket.id + ".jpg"

                if(rocket.active) content += "active aircraft";
                else content += "inactive aircraft";
                
                return ( 
                <>
                {
                    (compactTheme) ? (
                        <MiniCard 
                            key={key}
                            id={rocket.id} 
                            title={title.toUpperCase()} 
                            content={content.toUpperCase()} 
                            image={image}
                            url={`/Rockets/Details/${rocket.id}`}
                        />
                    ) : (
                        <Card 
                            key={key}
                            id={rocket.id} 
                            title={title.toUpperCase()} 
                            content={content.toUpperCase()} 
                            image={image}
                            url={`/Rockets/Details/${rocket.id}`}
                        />
                    )
                }
                </> 
                )
            })     
        }
    </> 
    )
}

export default memo(RocketCards);