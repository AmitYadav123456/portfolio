import React from 'react'
import './Contact.css'
import m5 from '../../img/m5.png'
import m1 from '../../img/m1.png'
import m3 from '../../img/m3.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { useContext } from 'react';
import { themeContext } from '../../Context';


const Contact = () => {
    const formRef= useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_wadech4', 'template_4nqnkp2', formRef.current, 'gc-NKUf-UJBqVXNr4')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
  
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={m5} alt="" className='c-icon' />
                        +91 72240 30...
                    </div>
                    <div className="c-info-item">
                        <img src={m3} alt="" className='c-icon' />
                        Contact@amit.yadav
                    </div>
                    <div className="c-info-item">
                        <img src={m1} alt="" className='c-icon' />
                        421 Amitesh nagar, Near choitram Mandi <br /> Indore
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className='c-desc'>
                    <b>What's your story?</b>Get in touch. Always available for freelancing if the right project comes along Me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name'name='user name'  />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject'name='user_subject'  />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email'name='user_email'  />
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows='5' placeholder='Message' name='message'/>
                    <button>Submit</button>
                    {done && "Thanks...."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact