import React from 'react'
import './experience.css'
import iot from '../../Assets/iot.png'

function Experience() {
  return (
    <>
      <div id='experience' className='experienceMainDiv'>
        <div className='position-relative top-50 start-50 translate-middle'>
          <div className="d-flex justify-content-evenly">
            <div className="mt-5">
              <h1 className='text-white internship mb-5'>INTERNSHIP</h1>
              <h2 className='text-warning border-bottom border-3 border-warning pb-2 fontFamily fs-2'>IoT Engineer Trainee</h2>
              <h4 className='text-white fontFamily fs-3'>Company - Dalnex LLP, Pune</h4>
              <h4 className='text-white fontFamily fs-3'>April 2023 - Present</h4>
              <h4 className='text-white fontFamily fs-3'>Skills - Node-RED, MongoDB, API Development, Database Management</h4>
            </div>
            <div className="internshipImageDiv mt-5">
              <img src={iot} alt="iot" className='border border-3 border-warning internshipImage' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience