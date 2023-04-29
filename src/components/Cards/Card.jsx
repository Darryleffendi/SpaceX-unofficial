import { useNavigate } from "react-router-dom";
import "../../assets/styles/Cards.css"

const Card = (props) => {

    const navigate = useNavigate();

    return (
        <div className="card" style={{backgroundImage:`url(${props.image})` }}>
            <div className="card-inner">
                <p className="font-p">{props.content}</p>
                <h3 className="font-main">{props.title}</h3>
                <button className="card-btn font-main" onClick={() => navigate(`${props.url}`)}>
                    LEARN MORE
                </button>
            </div>
        </div>                    
    );
}

export default Card;