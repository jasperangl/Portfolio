import React from 'react';
import './Skills.css';
import './Skills.js';


// A single recipe component inside our recipe page.
const SkillItem = ({name,langstate,OPEN, Skill, category}) => {

    return(
        <div className='skill-box-item' onClick={() => Skill.operation(name, category)}>
            <div>{name}</div>
            {
                (langstate && OPEN)?
                    <div><i className="fa fa-angle-double-up"></i></div>
                    :<i className="fa fa-angle-double-down"></i> 
            }           
        </div>
    )
}

export default SkillItem;