import React from 'react';
import './Projects.css';
import './About.css';
import './Skills.css';

const Skills = () => {

    return (
        <div id='Skills' className='Skills'>
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className='container'>
                <div className='section-title text-center'>
                    <h1>My Skills</h1>
                </div>
                
                <div className='skill-sections'>
                    <div className='skill-section'>
                        <h3>Langauges:</h3>
                        <div className='skill-box'>
                            <div className='skill-box-item'>Java</div>
                            <div className='skill-box-item'>Python</div>
                            <div className='skill-box-item'>JavaScript</div>
                            <div className='skill-box-item'>HTML</div>
                            <div className='skill-box-item'>CSS</div>
                        </div>
                    </div>
                    <div className='skill-section'>
                        <h3>Libraries / Frameworks:</h3>
                        <div className='skill-box'>
                            <div className='skill-box-item'>ReactJS</div>
                            <div className='skill-box-item'>Pandas</div>
                            <div className='skill-box-item'>scikit-learn</div>
                            <div className='skill-box-item'>NumPy</div>
                        </div>
                    </div>
                    <div className='skill-section'>
                        <h3>Additionals:</h3>
                        <div className='skill-box'>
                            <div className='skill-box-item'>Git</div>
                            <div className='skill-box-item'>Adobe Lightroom</div>
                            <div className='skill-box-item'>Adobe Premiere Pro</div>
                            <div className='skill-box-item'>Affinity Photo</div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;