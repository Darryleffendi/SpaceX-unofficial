import { useQuery } from "@apollo/client";
import Card from "../components/Card";
import { Navbar } from "../components/Navbar";
import { GET_LAUNCHES } from "../lib/getLaunches";
import InternetError from "./errors/InternetError";

const checkImageDimension = (url) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
        alert(this.width + 'x' + this.height);
    }
}

const Launches = () => {

    const { loading , error, data } = useQuery(GET_LAUNCHES);

    let launches = [];
    let launches2 = [];

    // Prioritize Launches with Images (For design purposes)
    if(!loading && !error) {
        for(let i = data.launches.length - 1, idx1 = 0, idx2 = 0; i >= 0 ; i --) {
            if(data.launches[i].links.flickr_images.length > 0) {
                launches[idx1] = data.launches[i];
                idx1 ++;
            } else {
                launches2[idx2] = data.launches[i];
                idx2 ++;
            }
        }
    }

    console.log(launches);

    return (
        <>
            {
                (loading) ? <div></div> : ((error) ? <InternetError /> :
                
                launches.map((launch) => {
                    let title = launch.mission_name;
                    let content = launch.launch_date_local.slice(0, 10);
                    let image = launch.links.flickr_images;

                    return (
                        <Card title={title.toUpperCase()} content={content.toUpperCase()} id={launch.id} image={image}/>
                    )

                })
            )}
        </>
    );
}

export default Launches;