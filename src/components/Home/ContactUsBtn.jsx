import instagram from '../../assets/Images/instagram.png';
import twitter from '../../assets/Images/twitter.png';
import linkedin from '../../assets/Images/linkedin.png';

export const ContactUsBtn = () => {

    return (
        <div className='home-header contactus-div contactus-header'>
            <h4 className='font-main'>HAVE ANY QUESTIONS?</h4>
            <h1 className='font-main'>CONTACT US</h1>
    
            <div className='footer-btn-group'>
                <a href='https://www.instagram.com/darryl_ce/'><img src={instagram} /></a>
                <a href='https://twitter.com/SpaceX'><img src={twitter} /></a>
                <a href='https://www.linkedin.com/in/darryl-christopher-effendi-987171250/'><img src={linkedin} /></a>
            </div>
        </div>
    );
}