const Footer = (props) => {

    let classBg = 'bg-default footer-div no-overflow';

    if(props.bg === 'black') classBg = 'bg-black footer-div no-overflow';

    return (
        <div className={classBg}>
            <div className="footer-content flex fs-xxs">
                <p className="font-p o-30">SPACEX - LC089</p>
                <a className="font-main" href="https://www.instagram.com/darryl_ce/">INSTAGRAM</a>
                <a className="font-main" href="https://www.linkedin.com/in/darryl-christopher-effendi-987171250/">LINKEDIN</a>
                <a className="font-main" href="https://twitter.com/SpaceX">TWITTER</a>
            </div>
        </div>
    )
}

export default Footer;