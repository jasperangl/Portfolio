import React, {useState} from 'react';
import Modal from 'react-modal';
import './Projects.css';
import './About.css';
import Close from '../images/close.svg';
import Spreadsheet from "../images/Spreadsheet-final.mp4";
import ShipGame from "../images/ShipGame.mp4";
import PyramidSolitaire from "../images/Pyramidsolitaire-final.mp4";
import Minesweeper from "../images/Minesweeper.mp4";


Modal.setAppElement('#root')

// A Recipe Page
const Projects = () => {

    const [modelIsOpen, setModalIsOpen] = useState(false)
    const [clipName, setClipName] = useState('Pen');

    function setName(name) {
        setClipName(name);
    }

    function setModalMode(bool) {
        setModalIsOpen(bool);
    }


    return(
        
        <section id='Projects' className='projects'>
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
            <div className='container'>
                <div className='section-title text-center'>
                    <h1>MY PROJECTS</h1>
                </div>

                {/* This is the Video Modal that opens on button click */}
                <Modal 
                    isOpen={modelIsOpen} 
                    onRequestClose={() => setModalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'rgba(102, 102, 102, 0.75)'
                            },

                            content: {
                                background: 'null',
                                border: 'null'
                            }                            
                        }
                    }>
                    <video class='preview'src={clipName} controls='true'></video>
                    <div>
                        <img onClick={() => setModalIsOpen(false)} className='close' src={Close} alt=''></img>
                    </div>
                </Modal>

                <div className='project-content'>
                    <div className='box'>
                        <div className='symbol'>
                            <i className='fa fa-file-excel-o'/>
                        </div>
                        <h5 className='project-name'>Spreadsheet</h5>
                        <p>A spreadsheet application similar to Excel 
                            with the ability to store information in Cells and execute computations on them.
                            Data can be saved, stored, opened or visualized in a graph. 
                        </p>
                        <ul>
                            <li className="project-button"><a target='_blank' rel="noopener noreferrer" href="https://github.com/jasperangl/Spreadsheet">Source Code</a></li>
                            <li className="project-button"><div onClick={function() { setName(Spreadsheet); setModalMode(true)}}>Video Presentation</div></li>
                        </ul>
                        <h6 className='project-language'>Java</h6>
                        <h6 className='project-date'>Nov - Dec 2019</h6>
                        
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i className='fa fa-gamepad'/>
                        </div>
                        <h5 className='project-name'>Ships Game</h5>
                        <p>First Java Game programmed using only recursion and no for-loops.
                             Goal is to shoot as many flying ships as possible with the given bullets.

                        </p>
                        <ul >
                            <li className="project-button"><a target='_blank' rel="noopener noreferrer" href="https://github.com/jasperangl/10-Bullets-Game">Source Code</a></li>
                            <li className="project-button"><div  onClick={function() { setName(ShipGame); setModalMode(true)}}>Video Presentation</div></li>
                        </ul>
                        <h6 className='project-language'>Java</h6>
                        <h6 className='project-date'>Feb 2019</h6>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i className='fa fa-database'/>
                        </div>
                        <h5 className='project-name'>Recipe Database</h5>
                        <p>A small javascript projects on this website that allows you to search through a seemingly infinite amount of different recipes.
                        </p>
                        <div className='project-bottom'>
                            <ul>
                <li className="project-button"><a href="/portfolio/Recipes">Live Version</a></li>
                            </ul>
                            <h6 className='project-language'>Javascript</h6>
                            <h6 className='project-date'>Feb 2020</h6>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i className='fa fa-gamepad'/>
                        </div>
                        <h5 className='project-name'>Pyramid Solitaire</h5>
                        <p>A textual Java card game with two game modes, 
                            sophisticated testing and applied MVC Pattern.
                        </p>
                        <div className='project - bottom'>
                            <ul>
                                <li className="project-button"><a target='_blank' rel="noopener noreferrer" href="https://github.com/jasperangl/Pyramid-Solitaire">Source Code</a></li>
                                <li className="project-button"><div onClick={function() { setName(PyramidSolitaire); setModalMode(true)}}>Video Presentation</div></li>
                            </ul>
                            <h6 className='project-language'>Java</h6>
                            <h6 className='project-date'> Oct - Nov 2019</h6>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i className='fa fa-gamepad'/>
                        </div>
                        <h5 className='project-name'>Minesweeper</h5>
                        <p>The classic Minesweeper game programmed with Java. 
                            
                        </p>
                        <div className='project-bottom'>
                            <ul>
                                <li className="project-button"><a target='_blank' rel="noopener noreferrer" href="https://github.com/jasperangl/Minesweeper">Source Code</a></li>
                                <li className="project-button"><div onClick={function() { setName(Minesweeper); setModalMode(true)}}>Video Presentation</div></li>
                            </ul>
                            <h6 className='project-language'>Java</h6>
                            <h6 className='project-date'>March 2019</h6>
                        </div>
                    </div>
                    
                    <div className='box'>
                        <div className='symbol'>
                            <i className='fa fa fa-search'/>
                        </div>
                        <h5 className='project-name'>Craigslist housing Scraper</h5>
                        <p>My first Python program that scrapes housing data from Craigslist housing and exports data to a CSV-File.
                        </p>
                        <div className='project-bottom'>
                            <ul>
                                <li className="project-button"><a target='_blank' rel="noopener noreferrer" href="https://github.com/jasperangl/Craigslist-housing-scraper">Source Code</a></li>
                            </ul>
                            <h6 className='project-language'>Python</h6>
                            <h6 className='project-date'>Jan 2020</h6>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
    
}



export default Projects;