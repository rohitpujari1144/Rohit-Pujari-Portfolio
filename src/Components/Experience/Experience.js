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
            <h3 className='text-white fontFamily mb-3'>Company - Dalnex LLP, Pune</h3>
            <h3 className='text-white fontFamily mb-3'>Duration - April 2023 - July 2023</h3>
            <h3 className='text-white fontFamily mb-3'>I have worked as an IoT Engineer Trainee as a backend developer to develop API using Node-RED and managing database using MongoDB</h3>
            <h3 className='text-white fontFamily'>Skills - Node-RED, MongoDB, API Development, Database Management</h3>
          </div>
          <div className='internshipImageDiv'>
            <img src={iot} alt="IoT" className='intImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience