import React, {useState} from 'react';
import Modal from 'react-modal';
import './Projects.css';
import './About.css';
import Close from '../images/close.svg';
import "../images/Spreadsheet-final.mp4";
import ShipGame from "../images/ShipGame.mp4";
import PyramidSolitaire from "../images/Pyramidsolitaire-final.mp4";
import Minesweeper from "../images/Minesweeper.mp4";
import './Projects.js';


// A single recipe component inside our recipe page.
const ProjectComp = ({symbol,name,description,link, language, date, video, img}) => {

    const [modelIsOpen, setModalIsOpen] = useState(false)
    const [clipName, setClipName] = useState('Pen');

    function setName(name) {
        setClipName(name);
    }

    function setModalMode(bool) {
        setModalIsOpen(bool);
    }

    return(
        <div >
            <div>
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
            </div>

            <div className='project'>
                <img src={img}></img>
                <div className='img-content'>
                    <div className='img-title'>{name}</div>
                    <div className='img-button'> 
                        <button className="project-button"><a target='_blank' rel="noopener noreferrer" href={link}>Learn More</a></button>
                    </div>
                    
                </div>
                
                
            </div>

        {/*
        <div >
            <div className='symbol'>
                <i className={symbol}/>
            </div>
            <h5 className='project-name'>{name}</h5>
            <p>{description}</p>
            <ul>
                <li className="project-button"><a target='_blank' rel="noopener noreferrer" href={link}>Source Code</a></li>
                <li className="project-button"><div onClick={function() { setName(video); setModalMode(true)}}>Video Presentation</div></li>
            </ul>
            <h6 className='project-language'>{language}</h6>
            <h6 className='project-date'>{date}</h6>
            
        </div>
        </div>
        */}

        </div>
        
        
    )
}

export default ProjectComp;