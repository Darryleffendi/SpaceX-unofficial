import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect } from 'react';
import { useRef } from 'react';
import '../assets/styles/Home.css';
import $ from 'jquery';
import { Company } from '../components/Home/Company';
import { CompanyDetails } from '../components/Home/CompanyDetails';
import { Ceo } from '../components/Home/Ceo.jsx';
import { useQuery } from '@apollo/client';
import {GET_COMPANY_INFO} from '../lib/getCompanyInfo.jsx';
import { ContactUs } from '../components/Home/ContactUs.jsx';
import { ContactUsBtn } from '../components/Home/ContactUsBtn.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoadingPage from '../components/LoadingPage';
import Fade from 'react-reveal/Fade';

export default function Home() {

    const { loading, error, data } = useQuery(GET_COMPANY_INFO);
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate();
    
    const parallaxRef = useRef();
    const content1Ref = useRef();
    const content2Ref = useRef();
    const content3Ref = useRef();
    const content4Ref = useRef();

    const handleLoad = () => {
        setLoaded(true);
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));  
    };  

    useEffect(() => {
        if(data) {
            const observer = new IntersectionObserver((entries) => {
                for(let i = 0; i < entries.length; i ++) {
                    // If intersect (entrance to screen)
                    if(entries[i].isIntersecting) {
                        if(entries[i].target === parallaxRef.current) {
                            $('.navbar').css('opacity', '0%');
                            $('.navbar').css('margin-top', '-40px');
                        } else if(entries[i].target === content1Ref.current) {
                            $('.company-div').css('display', 'block');
                            $('.parallax-container').css('opacity', '0%');
                            $('.company-details-div').css('display', 'none');
                        } else if(entries[i].target === content2Ref.current) {
                            $('.parallax-container').css('opacity', '0%');
                            $('.company-details-div').css('display', 'block');
                            $('.company-div').css('display', 'none');
                            $('.ceo-div').css('display', 'none');
                        } else if(entries[i].target === content3Ref.current) {
                            $('.parallax-container').css('opacity', '0%');
                            $('.ceo-div').css('display', 'block');
                            $('.company-details-div').css('display', 'none');
                        } else if(entries[i].target === content4Ref.current) {
                            $('.parallax-container').css('opacity', '0%');
                            $('.contactus-div').css('display', 'flex');
                            $('.ceo-div').css('display', 'none');
                            $('.navbar').css('opacity', '0%');
                            $('.navbar').css('margin-top', '-40px');
                            sleep(30).then(() => {  
                                $('.contactus-div').css('opacity', '100%');
                            });  
                        }   
                    // If not intersect (Exit from screen)
                    } else {
                        if(entries[i].target === parallaxRef.current) {
                            $('.navbar').css('opacity', '100%');
                            $('.navbar').css('margin-top', '0');
                        } else if(entries[i].target === content1Ref.current) {
                            $('.parallax-container').css('opacity', '100%');
                            sleep(600).then(() => {  
                                $('.company-div').css('display', 'none');
                            });  
                        } else if(entries[i].target === content2Ref.current) {
                            $('.parallax-container').css('opacity', '100%');
                            sleep(600).then(() => {  
                                $('.company-details-div').css('display', 'none');
                            });  
                        } else if(entries[i].target === content3Ref.current) {
                            $('.parallax-container').css('opacity', '100%');
                            sleep(600).then(() => {  
                                $('.ceo-div').css('display', 'none');
                            });  
                        } else if(entries[i].target === content4Ref.current) {
                            $('.parallax-container').css('opacity', '100%');
                            $('.contactus-btn').css('opacity', '0%');
                            $('.navbar').css('opacity', '100%');
                            $('.navbar').css('margin-top', '0');
                            sleep(600).then(() => {  
                                $('.contactus-div').css('display', 'none');
                            });  
                        }   
                    }
                }
            })
            
            try {
                observer.observe(parallaxRef.current);
                observer.observe(content1Ref.current);            
                observer.observe(content2Ref.current);
                observer.observe(content3Ref.current);
                observer.observe(content4Ref.current);
            } catch(error) {
                console.log(error);
            }
        }
    }, [loaded, loading, error, data]);

    return (
        <Fade>
        <div className='main-root' onLoad={() => handleLoad()}>
            
            {
                (loading) ? <LoadingPage /> : ((error) ? (() => navigate('/Error/400badrequest')) : (
                    <>
                        <ContactUs />
                        <Company data={data}/>
                        <CompanyDetails data={data}/>
                        <Ceo data={data}/>
                    </>
                ))
            }

            <Parallax pages={6} className="parallax-container custom-scroll">
                {/* Parallax Assets Source & Idea
                    https://www.firewatchgame.com/
                    Edited with Photoshop 
                */}
                
                <div className="parallax parallax-bg"></div>

                <ParallaxLayer speed={-0.4} className="parallax-outer">
                    <div className="parallax parallax-4"></div>
                </ParallaxLayer>

                <ParallaxLayer speed={-0.2} className="parallax-outer">
                    <div className="parallax parallax-3"></div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.01} className="parallax-outer">
                    <div className="parallax parallax-2"></div>
                </ParallaxLayer>

                <ParallaxLayer speed={-0.3} className="parallax-outer">
                    <div className="parallax-logo"></div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.18} className="parallax-outer">
                    <div className="parallax parallax-1"></div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.5} className="parallax-outer">
                    <div className="parallax parallax-0" ref={parallaxRef}></div>
                    <div className="contents">

                        <div className="seperator-top"></div>
                        <div className="content" ref={content1Ref}></div>
                        <div className="seperator"></div>
                        <div className="content" ref={content2Ref}></div>
                        <div className="seperator"></div>
                        <div className="content" ref={content3Ref}></div>
                        <div className="seperator"></div>
                        <div className="content-bottom" ref={content4Ref}></div>
                    </div>
                </ParallaxLayer>                
            </Parallax>
            
            <ContactUsBtn />            
        </div>
        </Fade>
    )
}