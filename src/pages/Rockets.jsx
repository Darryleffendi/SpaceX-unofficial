import { useQuery } from "@apollo/client";
import { Navbar } from "../components/Navbar";
import { GET_ROCKETS } from "../lib/getRockets";
import Card from "../components/Card.jsx";
import InternetError from "./errors/InternetError";
import $ from "jquery";
import { useState } from "react";

const Rockets = () => {

    const { loading , error, data } = useQuery(GET_ROCKETS);

    let rockets = [];

    // Reverse Order (from latest to oldest)
    if(!loading && !error) {
        for(let i = data.rockets.length - 1, idx = 0; i >= 0 ; i --, idx ++) {
            rockets[idx] = data.rockets[i];
        }
    }

    return (
        <>
            {
                (loading) ? <div></div> : ((error) ? <InternetError /> :
                
                rockets.map((rocket) => {
                    let title = rocket.name;
                    let content = rocket.company + "'s ";
                    let image = "/assets/Images/Rockets/" + rocket.id + ".jpg"

                    if(rocket.active) content += "active aircraft";
                    else content += "inactive aircraft";

                    return (
                        <Card title={title.toUpperCase()} content={content.toUpperCase()} id={rocket.id} image={image}/>
                    )

                })
            )}
        </>
    );
}

export default Rockets;