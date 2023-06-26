import React from 'react'
import './about.css'
import profile from '../../Assets/profile.jpg'

function About() {
  return (
    <>
      <div className="d-flex justify-content-evenly aboutMainDiv d-grid align-items-center">
        <div id='about' className='col-7 introDiv' style={{maxHeight:'400px'}}>
          <h1 className='text-white'>Hi,</h1>
          <h1 className='text-white'>I'm <span className='name'>Rohit Pujari</span></h1>
          <h2 className='text-warning border-bottom border-warning border-3 pb-2'>Full Stack Web Developer</h2>
          <p className='text-white mt-4 fs-5 mySelf'>An ambitious and self-motivated web developer with a considerable technical skills. Able to play a key
            role in website development to ensure maximum accessibility, user experience and usability. A quick
            learner who can absorb new ideas.</p>
        </div>
        <div className="imageDiv">
          {/* <div className="imageDiv "> */}
            <img src={profile} alt="" className='image' />
          {/* </div> */}
        </div>
      </div>

    </>
  )
}

export default About