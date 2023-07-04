import React from 'react'
import './about.css'
import profile from '../../Assets/profile.jpg'

function About() {
  return (
    <>
      <div id='about' className="aboutMainDiv">
        <div className='col-7 introDiv'>
          <h1 className='text-white'>Hi,</h1>
          <h1 className='text-white'>I'm <span className='name'>Rohit Pujari</span></h1>
          <h2 className='text-warning'>Full Stack Web Developer</h2>
          <p className='text-white mySelf'>An ambitious and self-motivated web developer with a considerable technical skills. Able to play a key
            role in website development to ensure maximum accessibility, user experience and usability. A quick
            learner who can absorb new ideas.</p>
        </div>
        <div className="imageDiv">
          <img src={profile} alt="" className='image' />
        </div>
      </div>
    </>
  )
}

export default About