import React from 'react';
import './Skills.css';
import './Skills.js';
import Close from '../images/close.svg';


// A single recipe component inside our recipe page.
const SkillCollapsible = ({name,langstate,infotext, Skill, category}) => {

    return(
            <div>
                {
                    langstate?
                        <div className='collapsible'>
                            <div className='close-div'>
                                <img onClick={() => Skill.operation('Close', category)} className='Close' src={Close} alt=''></img>
                            </div>
                            <div className='caption'>{name}</div>
                            <div className='info-text'>{infotext}</div>
                        </div>
                    :null
                }
            </div>
    )
}

export default SkillCollapsible;