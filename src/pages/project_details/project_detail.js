import React from 'react';

import "../About.css"
import "./project_details.css"
import img from "../../images/Snake-PvP.jpg"
import SnakeReport from "../../images/Snake PvP Paper.pdf"

// A Recipe Page
const SnakeAI = () => {

    return(
            <div className='project-container'>
                <div className='row1'>
                    <div className='col'>
                        <div className='project-intro'>
                            <h1>PvP Snake AI</h1>
                            <p>An Artificial Intelligence project where we trained an agent to play Snake against an oppenent based on three different 
                                reinforcement learning strategies.
                            </p>
                            
                        </div>
                        
                    </div>
                    <div className='col'>
                        <img src={img}></img>
                    </div>
                </div>
                <div className='row2'>
                    <div className='col1'>
                        <div className='languages'>
                            <h3>Languages/Libraries</h3>
                            <ul>
                                <li>Python</li>
                                <li>Pandas</li>
                                <li>PyTorch</li>
                                <li>matPlotLib</li>
                            </ul>
                        </div>
                        <div className='languages'>
                            <h3>Additional Resources</h3>
                            <ul>
                                <li>Video Presentation</li>
                                <li><a href='https://github.com/jasperangl/PvP-Snake' target='_blank'>Code</a></li>
                                <li><a href={SnakeReport} target='_blank'>Publication</a></li>
                                
                            </ul>
                        </div>
                        <div className='languages'>
                            <h3>Date</h3>
                            <ul>
                                <li>Dec 2020</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col2'>
                        <div className='description'>
                            <h3>Project description</h3>
                            <p>We developed the game’s custom environment, along with different artificial intelligence algorithms to best compete in this game.
                            We decided to explore reinforcement learning algorithms to control one snake agent in Snake PvP, with the discrete goal of maximizing 
                            the score that it can get before losing all of its lives. We tried multiple reinforcement learning algorithms, and compared how well each 
                            algorithm accumulated points in Snake PvP. We started with an epsilon-greedy q-learning algorithm.We found that reinforcement learning can 
                            effectively inform the snake agent to get to the apple. But with basic information about the enemy’s position, the agent undervalued the apple 
                            and overvalued not-dying to the enemy. The next approach was to use a neural network with a hidden layer to calculate approximate q-values so 
                            that memory storage was not an issue. This was the best approach that we found, as the snake had the exact right information to gain points.
                             Finally, we used an Actor-Critic model to build a policy for the agent to follow. Previous work has been done with an actor-critic algorithm 
                             for the single-player snake. (Knagg 2019) However, in our training we were getting stuck at local optima and never reached promising results. 
                             Therefore, the Deep Q Learning agent seemed to be the most effective agent at Snake PvP.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SnakeAI;