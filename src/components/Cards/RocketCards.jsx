import { memo, useContext } from "react";
import Card from "../Card";
import MiniCard from "../MiniCard";
import { ThemeContext } from "../../App";

// Memoization to improve performance

const RocketCards = (data) => {
    
    let rockets = [];

    const compactTheme = useContext(ThemeContext);
    data = data.data;
    

    // Reverse Order (from latest to oldest)
    if(data) {
        for(let i = data.rockets.length - 1, idx = 0; i >= 0 ; i --, idx ++) {
            rockets[idx] = data.rockets[i];
        }
    }

    return ( <>
        {
            rockets.map((rocket) => {
                let title = rocket.name;
                let content = rocket.company + "'s ";
                let image = "/assets/Images/Rockets/" + rocket.id + ".jpg"

                if(rocket.active) content += "active aircraft";
                else content += "inactive aircraft";
                
                return ( 
                <>
                {
                    (compactTheme) ? (
                        <MiniCard key={rocket.id} title={title.toUpperCase()} content={content.toUpperCase()} image={image}/>
                    ) : (
                        <Card key={rocket.id} title={title.toUpperCase()} content={content.toUpperCase()} image={image}/>
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