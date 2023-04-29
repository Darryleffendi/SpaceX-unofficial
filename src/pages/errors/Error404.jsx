import errorImg from '../../assets/Images/Pages/roadster.jpg';
import '../../assets/styles/Cards.css'

const Error404 = () => {
    return (
        <div className="card" style={{
            backgroundImage: `url(${errorImg})`,
            backgroundPosition: "center"
        }} >
            <div className="card-inner">
                <h3 className="font-main">OOPS!</h3>
                <p className="font-p">Looks like you're lost.</p>
            </div>
        </div>
    );
}

export default Error404