import React from 'react';
import './About.css';

function About() {
    return(
    <section id='About'className='about-me'>
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h1>ABOUT ME</h1>
                    <h6>Information About Me</h6>
                </div>
            </div>
            <div className='row'>
                <ul className='about-content flex-direction'>
                    <li className='profile-img'></li>
                    <li className='text'>
                        <h4>I'm Jasper Angl</h4>
                        <h6>An undergraduate student at <span>Northeastern University</span> studying <span>Computer Science</span> and 
                            <span> Cognitive Psychology</span></h6>
                        <p>I am a passionate programmer and athlete in the sport of rowing.
                            Currently I am studying at Northeastern University and am rowing for their Varisty team.
                            Although I have only started programming in college I already gathered a good amount of experience and my eager to 
                            learn more about the world of programming is increasing every day.
                        </p>
                        <div className="icons">
                            <a className='icon' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/jasper-angl/"><i className="fa fa-linkedin"></i></a>
                            <a className='icon' target='_blank' rel='noopener noreferrer' href="https://github.com/jasperangl"><i className="fa fa-github"></i></a>
                            <a className='icon' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/jasper.angl/"><i className="fa fa-instagram"></i></a>
                            <a className='icon' target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/jasper.angl"><i className="fa fa-facebook"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>

    </section>
    );
}

export default About;