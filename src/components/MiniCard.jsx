import "../assets/styles/Cards.css"

const MiniCard = (props) => {

    return (
        <div className="mini-card">
            <img src={props.image} alt='image'/>
            <div className="mini-card-inner">
                <p className="font-p">{props.content}</p>
                <h3 className="font-main">{props.title}</h3>
                <button className="card-btn font-main">
                    LEARN MORE
                </button>
            </div>
        </div>                    
    );
}

export default MiniCard;