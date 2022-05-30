import React from 'react';
import './skills.css';
import Html from '../img/html.png'
import CSS from '../img/css.png'
import JavaScript from '../img/javascript.jpg';
import NodeExpress from '../img/nodeEx.png';
import imgrec from '../img/react.png';
import Python from '../img/python.jpg';
import MongoDB from '../img/mongo.png';
import Sql from '../img/sql.png';

const Skills = () => {
  return (
    <div className='skills' id='Skills'>
        <div className='s-sec1'>My Skills</div>
        <div className='s-sec2'>
            <div className='part1'>
                <div className='icon-i'>
                    <img src={Html} alt=''/>
                    <img src={CSS} alt=''/>
                    <img src={JavaScript} alt=''/>
                    <img src={NodeExpress} alt=''/>
                    
                </div>
                <ul className='skill-list'>
                    <li> Html5 </li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node/Express</li>
                </ul>
            </div>
            <div className='part2'>
                <div className='icon-i'>
                    <img src={imgrec} alt=''/>
                    <img src={Python} alt=''/>
                    <img src={MongoDB} alt=''/>
                    <img src={Sql} alt=''/>
                    
                </div>
                <ul className='skill-list'>    
                    <li>React</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                    <li>MySql</li>
                </ul>

            </div>
            
        </div>
    </div>
  )
}

export default Skills