import React from 'react';
import ResumeDoc from '../images/Resume.pdf';

const Resume = () => {
    return (
        <embed src={ResumeDoc} type='application/pdf' width='100%' height='600px' />
    );
}

export default Resume;