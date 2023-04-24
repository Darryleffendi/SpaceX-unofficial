import { useQuery } from "@apollo/client";
import { Navbar } from "../components/Navbar";
import { GET_ROCKETS } from "../lib/getRockets";
import CardContent from "../components/CardContent.jsx";
import img1 from "../assets/Images/Rockets/Falcon1.jpg";
import img2 from "../assets/Images/Rockets/Falcon9.jpg";
import img3 from "../assets/Images/Rockets/FalconHeavy.jpg";
import img4 from "../assets/Images/Rockets/Starship.jpg";
import "../assets/styles/Rockets.css";

const Rockets = () => {

    const { loading , error, data } = useQuery(GET_ROCKETS);

    if(loading) return <h1>Loading</h1>
    if(error) return <h1>Error</h1>

    let Falcon1 = img1;
    let Falcon9 = img2;
    let FalconHeavy = img3;
    let Starship = img4;
    

    return (
        <div>

            {
                data.rockets.map((rocket) => {
                    let title = rocket.name;
                    let content = rocket.company + "'s ";
                    let image = "../assets/Images/Rockets/" + rocket.id + ".jpg"

                    if(rocket.active) content += "active aircraft";
                    else content += "inactive aircraft";

                    return (
                        <div className="card" style={{backgroundImage:`url(${eval(title.replace(/\s/g, ''))})` }}>
                            <CardContent title={title.toUpperCase()} content={content.toUpperCase()} id={rocket.id} image={image}/>
                        </div>                    
                    )

                })
            }

            <Navbar />
        </div>
    );
}

export default Rockets;