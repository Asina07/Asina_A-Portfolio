import React from 'react';
import  './navbar.css';
import {Link} from 'react-scroll';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from '../about/About';

function Navbar() {
  return (
      <div className='navbar' id='Navbar'>
      <BrowserRouter>
        <div className='N-name'>Asina A</div>
        <div className='N-list'>
          <ul className='lst'>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeclass'>
              <li className='list' to='Home'>Home</li>
            </Link>
            <Link spy={true} to='About' smooth={true}>
              <li className='list'>About</li>
             </Link>
            <Link spy={true} to='Skills' smooth={true}>
              <li className='list'>Skills</li>
             </Link>
            <Link spy={true} to='Contact' smooth={true}>
              <li className='list'>ContactMe</li>
             </Link>
          
              <li className='list'></li>
           
          </ul>
       
        </div>
        <Routes>
          <Route path='Navbar'/>
          <Route path='About'  element = {<About/>}/>
          <Route path='Skills'/>
          <Route path='Contact'/>

        </Routes>
        </BrowserRouter>
   
     </div>
        
  )
}

export default Navbar;