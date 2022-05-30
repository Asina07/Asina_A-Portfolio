import React, {useRef} from 'react';
import './contact.css';
import {FaPhone} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaAddressBook} from 'react-icons/fa';
import emailjs from '@emailjs/browser';






function Contact() {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u5xk766', 'template_9eyd9jl', form.current, 'e-5Mc48jGTpoWEwIE')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            console.log("message sent Successfully!")
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact' id='Contact'>
        <div className='c-me'>Contact Me</div>
        <div className='c-get'>Get in Touch</div>
        <div className='c-sec'>
            <div className='c-sec1'>
                <ul className='c-icons'>
                    <li><FaPhone/></li>
                    <li><FaMailBulk/></li>
                    <li><FaAddressBook/></li>
                </ul>
                <ul className='c-list'>
                    <li> Call Me<h6>+971 585899011</h6></li>
                    <li>Email<h6><a href="mailto:asinaabdulla1111@gmail.com" target= '_blank'>asinaabdulla1111@gmail.com</a></h6></li>
                    <li>Location<h6>Ras Al Khaima, Dubai</h6></li>
                </ul>
            </div>
            <div className='c-sec2'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name'/>
                    <input type='email' name='user_email' className='user' placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <button id='btn' type='submit'>send</button>
                
                </form>
            </div>
        </div>
    
        

    </div>
  )
}

export default Contact