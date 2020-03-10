import React from 'react';
import './Projects.css';
import './About.css';

// A Recipe Page
const Projects = () => {
    return(
        <section className='projects'>
            <div className='container'>
                <div className='section-title text-center'>
                    <h1>MY PROJECTS</h1>
                    <h6>Hello</h6>
                </div>
                <div className='project-content'>
                    <div className='box'>
                        <div className='symbol'>
                            <i class='fa fa fa-laptop'/>
                        </div>
                        <h5 className='project-name'>Spreadsheet</h5>
                        <p>Explains what language project is written in,
                             what has been accomplished with project and how
                             did I accomplish it.
                        </p>
                        <ul className="projects-ul" class="nav_links">
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Source Code</a></li>
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Live Version</a></li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i class='fa fa fa-code'/>
                        </div>
                        <h5 className='project-name'>Craigslist housing Scraper</h5>
                        <p>Explains what language project is written in,
                             what has been accomplished with project and how
                             did I accomplish it.
                        </p>
                        <ul className="projects-ul" class="nav_links">
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Source Code</a></li>
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Live Version</a></li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i class='fa fa fa-mobile'/>
                        </div>
                        <h5 className='project-name'>Pyramid Solitaire</h5>
                        <p>Explains what language project is written in,
                             what has been accomplished with project and how
                             did I accomplish it.
                        </p>
                        <ul className="projects-ul" class="nav_links">
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Source Code</a></li>
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Live Version</a></li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i class='fa fa fa-laptop'/>
                        </div>
                        <h5 className='project-name'>Minesweeper</h5>
                        <p>Explains what language project is written in,
                             what has been accomplished with project and how
                             did I accomplish it.
                        </p>
                        <ul className="projects-ul" class="nav_links">
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Source Code</a></li>
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Live Version</a></li>
                        </ul>
                    </div>
                    <div className='box'>
                        <div className='symbol'>
                            <i class='fa fa fa-search'/>
                        </div>
                        <h5 className='project-name'>Ships Game</h5>
                        <p>Explains what language project is written in,
                             what has been accomplished with project and how
                             did I accomplish it.
                        </p>
                        <ul className="projects-ul" class="nav_links">
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Source Code</a></li>
                            <li className="project-button"><a target='_blank' href="https://github.com/jasperangl">Live Version</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;