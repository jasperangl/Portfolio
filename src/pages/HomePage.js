import React from 'react';
import './HomePage.css';
import About from './About.js';
import Projects from './Projects.js';
function HomePage() {
  
    return(
      <div className='wrapper'>
        <section className='intro'>
          <div className='intro-div'>
              <h1 className='title'>Jasper Angl</h1>
              <p className='comment'>An undergraduate at Northeastern University studying 
                Computer Science / Cognitive Psychology</p>
              <ul className='start-buttons'>
                <li className='contact-button'>
                  <a href='/Contact'>Contact</a>
                </li>
                <li className='contact-button'>
                  <a href='/Resume'>View Resume</a>
                </li>
              </ul>
            </div> 
        </section>
        <About/>
        <Projects/>
      </div>    

    );
  }

  export default HomePage;