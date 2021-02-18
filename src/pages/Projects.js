import React, {useState} from 'react';
import Modal from 'react-modal';
import './Projects.css';
import './About.css';
import Close from '../images/close.svg';
import Spreadsheet from "../images/Spreadsheet-final.mp4";
import ShipGame from "../images/ShipGame.mp4";
import PyramidSolitaire from "../images/Pyramidsolitaire-final.mp4";
import Minesweeper from "../images/Minesweeper.mp4";
import ProjectComp from './ProjectsComponent.js';
import SnakeImg from '../images/Snake-PvP.png';
import SpreadsheetImg from '../images/Spreadsheet-final.jpg';
import ShipGameImg from '../images/ShipGameImg2.jpg';
import RecipeImg from '../images/RecipeImg.png';
import MinesweeperImg from '../images/MinesweeperImg.jpg';




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
                        {<ProjectComp
                            symbol={"fa fa-gamepad"}  
                            name={"PvP Snake AI"} 
                            description={"A PvP snake game trained, using 3 reinforcement learning algorithms: Q-Learning, Deep Q-Learning and Advantage Actor-Critc."}
                            link={"/projects/SnakeAI"}
                            img={SnakeImg}
                            language={"Python"} 
                            date={"Nov - Dec 2020"}/>
                        }   
                    </div>
                    <div className='box'>
                        {<ProjectComp  
                            symbol={'fa fa-file-excel-o'}
                            name={"Spreadsheet"} 
                            description={"A spreadsheet application similar to Excel with the ability to store information in Cells and execute computations on them. Data can be saved, stored, opened or visualized in a graph."}
                            link={"https://github.com/jasperangl/Spreadsheet"} 
                            img={SpreadsheetImg}
                            language={"Java"} 
                            date={"Nov - Dec 2019"}/>
                        }
                    </div>
                    <div className='box'>
                        {<ProjectComp  
                            symbol={'fa fa-gamepad'}
                            name={"Ships Game"} 
                            description={"First Java Game programmed using only recursion and no for-loops. The goal is to shoot as many flying ships as possible with the given bullets."}
                            link={"https://github.com/jasperangl/10-Bullets-Game"} 
                            img={ShipGameImg}
                            language={"Java"} 
                            date={"Feb 2019"}/>
                        }
                    </div>
                    <div className='box'>
                        {<ProjectComp  
                            symbol={'fa fa-database'}
                            name={"Recipe Database"} 
                            description={"A small javascript projects on this website that allows you to search through a seemingly infinite amount of different recipes."}
                            img={RecipeImg}
                            link={"/Recipes"}
                            language={"JavaScript"} 
                            date={"Feb 2020"}/>
                        }
                    </div>
                    <div className='box'>
                        {<ProjectComp  
                            symbol={'fa fa-gamepad'}
                            name={"Minesweeper"} 
                            description={"The classic Minesweeper game programmed with Java."}
                            img={MinesweeperImg}
                            link={"https://github.com/jasperangl/Minesweeper"}
                            language={"Java"} 
                            date={"March 2019"}/>
                        }
                    </div>
                    
                    {/** Pyramid Solitaire
                     * <div className='box'>
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
                    */}
                    {/** Craigslist Housing Scraper
                     * <div className='box'>
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
                     * 
                     */}
                    
                </div>
            </div>            
        </section>
    )
    
}



export default Projects;