import React from 'react'
import './experience.css'
import iot from '../../Assets/iot.png'

function Experience() {
  return (
    <>
      <div id='experience' className='experienceMainDiv'>
        <div className='experienceDivOne'>
          <div className="experienceIntroDiv">
            <h1 className='text-white internship'>INTERNSHIP</h1>
            <h2 className='text-warning pb-2 fontFamily mb-3'>IoT Engineer Trainee</h2>
            <h3 className='text-white fontFamily mb-3'>Company - Dalnex, Pune</h3>
            <h3 className='text-white fontFamily mb-3'>Duration - April 2023 - Present</h3>
            <h3 className='text-white fontFamily mb-3'>I am working as an IoT Engineer Trainee to develop API's using Node-RED and managing database using MongoDB</h3>
            <h3 className='text-white fontFamily'>Skills - Node-RED, MongoDB, API Development, Database Management</h3>
          </div>
          <div className='internshipImageDiv'>
            <img src={iot} alt="" className='intImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience