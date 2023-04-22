import "../assets/styles/Cards.css"
import useImage from "../hooks/useImage";

const CardContent = (props) => {

    const { loading, error, image } = useImage(props.image)

    if(error) return <h1>kontol</h1>

    return (            
        <div className="card-inner">
            
            <p className="font-p">{props.content}</p>
            <h3 className="font-main">{props.title}</h3>
            <img src={ image }/>
        </div>
    );
}

export default CardContent;