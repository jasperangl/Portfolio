import React from 'react';
import './About.css';

function About() {
    return(
    <section className='about-me'>
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h1>ABOUT ME</h1>
                    <h6>Information About Me</h6>
                </div>
            </div>
            <div className='row'>
                <ul className='about-content'>
                    <li className='profile-img'>
                        <img />
                    </li>
                    <li className='text'>
                        <h4>I'm Jasper Angl</h4>
                        <h6>An undergraduate student at <span>Northeastern University</span> studying <span>Computer Science</span> and 
                            <span> Cognitive Psychology</span></h6>
                        <p> I don't know what to write here yet. I should try to find a sample that
                            I can copy that has a similar length as the short paragraph that I am currently
                            writing here and might be a sentence longer than this.
                        </p>
                        <div class="icons">
                            <a className='icon' target='_blank' href="https://www.linkedin.com/in/jasper-angl/"><i class="fa fa-linkedin"></i></a>
                            <a className='icon' target='_blank' href="https://github.com/jasperangl"><i class="fa fa-github"></i></a>
                            <a className='icon' target='_blank' href="https://www.instagram.com/jasper.angl/"><i class="fa fa-instagram"></i></a>
                            <a className='icon' target='_blank' href="https://www.facebook.com/jasper.angl"><i class="fa fa-facebook"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>

    </section>
    );
}

export default About;