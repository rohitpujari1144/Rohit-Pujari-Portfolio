import React from 'react'
import iot from '../../Assets/iot.png'

function Experience() {
  return (
    <>
      <div id='experience' className='' style={{height:'550px', marginTop:'150px'}}>
        <div className='m-3'>
          <div className='mt-3' style={{marginLeft:'95px'}}>
            <h1 className='text-white' style={{letterSpacing:'3px'}}>INTERNSHIP</h1>
          </div>
          <div className='d-flex mt-5'>
            <div className='text-white' style={{marginLeft:'100px', fontFamily:'Trebuchet MS'}}>
              <h2 className='text-warning border-bottom border-3 border-warning pb-2' style={{maxWidth:'fit-content'}}>IoT Engineer Trainee</h2>
              <h4 className='mt-4'>Company - Dalnex LLP, Pune</h4>
              <h4 className='mt-4'>April 2023 - Present</h4>
              <h4 className='mt-4'>Skills - Node-RED, MongoDB, Database Management</h4>
            </div>
            <div className='' style={{width:'290px', height:'300px', marginLeft:'300px', marginTop:'-80px'}}>
              <img src={iot} alt="iot" className='border border-3 border-warning' style={{width:'100%', height:'100%', borderRadius:'50%'}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience