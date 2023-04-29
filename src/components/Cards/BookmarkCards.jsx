import { useContext } from "react";
import Card from "./Card";
import MiniCard from "./MiniCard";
import { ThemeContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Page.css"
import nomedia from '../../assets/Images/Pages/nomedia.jpg'

const BookmarkCards = (data) => {
    const compactTheme = useContext(ThemeContext);
    let rocketList = [];
    let launchList = [];

    data = data.data;

    if(data && compactTheme) {
        data.map((item, key) => {
            if(item.type === "Rockets") {
                rocketList.push(
                    <MiniCard
                        key={key}
                        id={item.id}
                        title={item.name.toUpperCase()} 
                        content={item.desc.toUpperCase()} 
                        image={item.image}
                        url={`/${item.type}/Details/${item.id}`}
                    />
                )
            } else {
                launchList.push(
                    <MiniCard 
                        key={key}
                        id={item.id}
                        title={item.name.toUpperCase()} 
                        content={item.desc.toUpperCase()} 
                        image={item.image}
                        url={`/${item.type}/Details/${item.id}`}
                    />
                )
            }
        })
    }

    return (<>
        {
            (compactTheme) ? (
                <>
                    <h1 className="font-main content-h">ROCKETS</h1>
                    <div className="content-scroll no-responsive">
                        <div className="page-content no-responsive">
                            {
                                rocketList.map((item) => { return item })
                            }
                        </div>
                    </div>

                    <h1 className="font-main content-h">LAUNCHES</h1>
                    <div className="content-scroll no-responsive">
                        <div className="page-content no-responsive">
                            {
                                launchList.map((item) => { return item })
                            }
                        </div>
                    </div>
                </>
            ) : (
                <> {
                    data.map((item) => {
                        return <Card 
                            id={item.id}
                            title={item.name.toUpperCase()} 
                            content={item.desc.toUpperCase()} 
                            image={item.image}
                            url={`/${item.type}/Details/${item.id}`}
                        />
                    })
                }
                </>
            )
        }
    </> )
}

export default BookmarkCards;