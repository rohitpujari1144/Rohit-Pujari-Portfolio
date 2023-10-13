import React from 'react'
import './certification.css'
import web from '../../Assets/web.jpg'

function Certification() {
  return (
    <>
      <div id='certification' className='certificationMainDiv'>
        <div className='certificationDivOne'>
          <div className='certficateInfo'>
            <h1 className='text-white certification'>CERTIFICATION</h1>
            <h2 className='text-warning fullStackWebDevelopment'>Full Stack Web Development</h2>
            <p className='text-white fs-4 mt-3'>Successfully completed Full Stack Web Development program from GUVI Geek Network, IITM Research Park, Chennai.</p>
            <p className='text-white fs-4 mt-3'>Duration - Octomber 2022 - May 2023</p>
            <p className='fs-4 text-white mt-3'>Certificate link - <a className='certificateLink' href='https://drive.google.com/file/d/1vlf8FU9u_qF2Trl_dIwTupbOJy8xdHGI/view?usp=share_link' target='_blaank'>click here</a></p>
          </div>
          <div className='certificationImageDiv'>
            <img src={web} alt="" className='certificationImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Certification