import React from 'react';
import './Footer.css';
import { Link
} from 'react-router-dom';

const Footer = () => {

    return(
        
        <footer className="footer">
            <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="footer-left">
                <div className="icons">
                    <a className='icon' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jasper-angl/"><i className="fa fa-linkedin"></i></a>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href="https://github.com/jasperangl"><i className="fa fa-github"></i></a>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/jasper.angl/"><i className="fa fa-instagram"></i></a>
                    <a className='icon' target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/jasper.angl"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
            <div className="footer-center menu">
                <div className='Contact'>
                <i className="fa fa-map-marker menu"></i>
                <p><a  target='_blank' rel='noopener noreferrer' href="https://www.google.com/maps/place/10+Leon+St,+Boston,+MA+02115/@42.3367372,-71.0942511,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a2182d03a23:0xdc7950d5b25a2e4e!8m2!3d42.3367372!4d-71.0920571">
                    <span> 10 Leon Street,</span> Boston, MA, USA</a></p>
                </div>
                <div className='Contact'>
                <i className="fa fa-phone menu" ></i>
                <p><a href="tel:6462390871">(+1) 646 239-0871</a></p>
                </div>
                <div className='Contact'>
                <i className="fa fa-envelope menu"></i>
                <p><a href="mailto: angl.j@northeastern.edu"> angl.j@northeastern.com</a></p>
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <div>
                    <h2> Jasper<span> Angl</span></h2>
                    <p className="menu">
                    <a href="/portfolio/"> Home </a> | 
                    <a href="/portfolio/#About">  About </a> | 
                    <a href="/portfolio/#Projects">  Projects </a> | 
                    <a href="/portfolio/#Contact">  Contact </a> | 
                    <Link to='/Resume'>Resume</Link> 
                    
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;