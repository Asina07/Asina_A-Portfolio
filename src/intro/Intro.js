import React from 'react';
import './intro.css';
import { FaGithub} from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import Bg  from '../img/bg.jpg';
import Img from '../img/Asina.jpeg';
import {Link} from 'react-scroll';


function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='left'>Hy! I Am</div>
            <div className='left'>Asina</div>
            <div className='left'>Mern Stack Developer</div>
            <p className='left'>I am a Passionate, Efficient and Confident Web Developer. My Experience helped me develop expert knowledge of the Programming Skills and Application  Knowledge. Iam highly motivated to continue learning and improving my craft.</p>
            <p className='left'></p>
            <Link spy={true} to='Contact' smooth={true}><button className='left btn'>HireMe</button></Link>
            <ul className='left i-icon'>
              <a href='https://github.com/Asina07' target= '_blank'><li><FaGithub /></li></a>
              <a href='https://www.linkedin.com/in/asinaa/' target= '_blank'><li><FaLinkedin/></li></a>
              <a href='https://www.instagram.com/azieshebie/?igshid=YmMyMTA2M2Y=' target= '_blank'><li><FaInstagram/></li></a>
            </ul>
        </div>
        <div className='i-right'>
          <img src={Bg} alt = ""/>
          <img src={Img} alt = ""/>

          
        </div>
    </div>
  )
}

export default Intro