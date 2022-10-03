import React from 'react'
import './Intro.css'

import m from '../../img/m.png'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello,My name is</h2>
            <h1 className='i-name'>Amit Yadav</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Photograher</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develop services for custom of all sizes, specializing in creating stylish,modern website,web servicer and online stores.
            </p>
          </div>
          
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
           <img src={m} alt="" className='i-img' />
        </div>
    </div>
  )
}

export default Intro