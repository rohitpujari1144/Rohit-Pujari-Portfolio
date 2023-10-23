import React from 'react'
import './experience.css'
// import iot from '../../Assets/iot.png'
import software from '../../Assets/software.png'


function Experience() {
  return (
    <>
      <div id='experience' className='experienceMainDiv'>
        <div className='experienceDivOne'>
          <div className="experienceIntroDiv">
            <h1 className='text-white internship'>EXPERIENCE</h1>
            <h2 className='text-warning pb-2 fontFamily mb-3'>Software Engineer Trainee</h2>
            <h3 className='text-white fontFamily mb-3'>Company - Mobillor Technologies Pvt. Ltd., Bengaluru</h3>
            <h3 className='text-white fontFamily mb-3'>Duration - Aug 2023 - Present</h3>
            {/* <h3 className='text-white fontFamily mb-3'>I have worked as an IoT Engineer Trainee as a backend developer to develop API using Node-RED and managing database using MongoDB</h3> */}
            <h3 className='text-white fontFamily'>Skills - Node-RED, MySQL, SQL Server Management Studio (SSMS), Azure Data Studio, NestJS</h3>
          </div>
          <div className='internshipImageDiv'>
            <img src={software} alt="IoT" className='intImage rounded' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience