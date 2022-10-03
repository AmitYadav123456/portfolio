import React from 'react'
import'./About.css'
import m2 from '../../img/m2.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img 
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt="" className='a-img'/>
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
            It is a long established fact that a reader will be distracted by the readable content.
        </p>
        <p className='a-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident officia facilis aut, reprehenderit laborum, earum commodi, quasi modi quis ullam! Minus excepturi exercitationem perferendis? Rerum iure in quia nobis!</p>
        <div className="a-award">
            <img src={m2} alt="" className='a-award-img' />
            <div className="a-award-texts">
                <h4 className='a-award-title'>International Design Awards 2022</h4>
                <p className='a-award-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, beatae.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About