import errorImg from '../../assets/Images/Pages/starlink.jpg';
import '../../assets/styles/Cards.css'

const Error400 = () => {
    return (
        <div className="card" style={{
            backgroundImage: `url(${errorImg})`,
            backgroundPosition: "center"
        }} >
            <div className="card-inner">
                <h3 className="font-main">OOPS!</h3>
                <p className="font-p">Looks like you have a problem on your internet connection.
                    <br />Check out STARLINK for a more reliable internet provider
                </p>
            </div>
        </div>
    );
}

export default Error400