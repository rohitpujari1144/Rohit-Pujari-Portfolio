import React from 'react'
import './certification.css'
import web from '../../Assets/web.jpg'

function Certification() {
  return (
    <>      
      <div id='certification' className='certificationMainDiv'>
        <div className='d-flex justify-content-evenly position-relative top-50 start-50 translate-middle'>
          <div className='col-6'>
            <h1 className='text-white certification'>CERTIFICATION</h1>
            <h2 className='text-warning border-bottom border-warning border-3 fullStackWebDevelopment mt-3 pb-1'>Full Stack Web Development</h2>
            <p className='text-white fs-5 mt-3'>Successful completed Full Stack Web Development program from GUVI Geek Network, IITM Research Park, Chennai.</p>
            <p className='text-white fs-5 mt-3'>Octomber 2022 - May 2023</p>
            <p className='fs-5 text-white mt-3'>Certificate link - <a className='certificateLink' href='https://drive.google.com/file/d/1vlf8FU9u_qF2Trl_dIwTupbOJy8xdHGI/view?usp=share_link' target='_blaank'>click here</a></p>
          </div>
          <div className='certificationImageDiv'>
            <img src={web} alt="" className='border border-warning border-2 rounded  certificationImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Certification