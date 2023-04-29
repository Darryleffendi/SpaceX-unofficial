import { useNavigate } from "react-router-dom";
import "../../assets/styles/Cards.css"

const MiniCard = (props) => {

    const navigate = useNavigate();
    
    return (
        <div className="mini-card">
            { props.childrenTop }
            <img src={props.image} alt='cardimg'/>
            <div className="mini-card-inner">
                <p className="font-p">{props.content}</p>
                <h3 className="font-main">{props.title}</h3>
                <button className="card-btn font-main" onClick={() => navigate(`${props.url}`)}>
                    LEARN MORE
                </button>
            </div>
        </div>                    
    );
}

export default MiniCard;