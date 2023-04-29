import instagram from '../../assets/Images/instagram.png';
import twitter from '../../assets/Images/twitter.png';
import linkedin from '../../assets/Images/linkedin.png';

export const ContactUsBtn = () => {

    return (
        <div className='contactus-btn contactus-div'>
            <a href='https://www.instagram.com/darryl_ce/'><img src={instagram} /></a>
            <a href='https://twitter.com/SpaceX'><img src={twitter} /></a>
            <a href='https://www.linkedin.com/in/darryl-christopher-effendi-987171250/'><img src={linkedin} /></a>
        </div>
    );
}