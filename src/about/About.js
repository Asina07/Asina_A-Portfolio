import React from 'react';
import './about.css';
import img from '../img/aboutme.jpeg'
import {FaDownload} from 'react-icons/fa'

function About() {
  return (
    <div className='about' id='About'>
        <div className='a-me'>About Me</div>
        <div className='a-mee'>My Introduction</div>
        <div className='section'>
            <div className='section-1'>
                <img src={img}/>
            </div>
            <div className='section-2'>
                <p>Computer Science graduated with 1.6 years work experience in the ﬁeld of IT Support. Committed and goal-oriented looking to pursue a career in the MERN stack development domain. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment. Vibrant and Zealous attitude towards problem solving helps me tackle real-life case studies and come up with unique and innovative solutions. </p>
                <div className='download'>
                    <a href = 'https://wwwasinaamyresume007in.on.drv.tw/Resume/html%20resume/MyResume/resume.html' target= '_blank'>
                        <button className='sec-but'>DownloadCV</button>
                        <button className='sec-but1'><FaDownload/></button>
                    </a>
                </div>
            </div>
           
        </div>
    </div>
    
  )
}

export default About