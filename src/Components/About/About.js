import React from 'react'
import './about.css'
import profile1 from '../../Assets/profile2.jpg'

function About() {
  return (
    <>
      <div id='about' className="aboutMainDiv">
        <div className='col-7 introDiv'>
          <h1 className='text-white'>Hi,</h1>
          <h1 className='text-white'>I'm <span className='name'>Rohit Pujari</span></h1>
          <h2 className='text-warning'>Software Engineer Trainee</h2>
          <p className='text-white mySelf'>An ambitious and self-motivated software engineer with a considerable technical skills. Able to play a key
            role in software development to ensure maximum accessibility, user experience and usability. A quick
            learner who can absorb new ideas.</p>
        </div>
        <div className="imageDiv">
          <img src={profile1} alt="" className='image' />
        </div>
      </div>
    </>
  )
}

export default About