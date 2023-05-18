import React from 'react'
import web from '../../Assets/web.jpg'


function Certification() {
  return (
    <>
      <div id='certification' className='' style={{height:'650px'}}>
        <div style={{marginTop:'50px'}}>
          <h1 className='text-white' style={{fontSize:'300%',  marginLeft:'70px', marginTop:'20px', letterSpacing:'3px'}}>CERTIFICATION</h1>
        </div>
        <div className='m-3 mt-4 row'>
          <div className='col-6 ms-5'>
            <h2 className='text-warning border-bottom border-warning border-3 pb-2' style={{fontFamily:"Trebuchet MS", maxWidth:'fit-content'}}>Full Stack Web Development</h2>
            <p className='text-white fs-5 mt-5'>Successful completed Full Stack Web Development program from GUVI Geek Network, IITM Research Park, Chennai</p>
            <p className='text-white fs-5 mt-5'>Octomber 2022 - May 2023</p>
            <p className='fs-5 text-white mt-5'>Certificate link - <a href='https://drive.google.com/file/d/1vlf8FU9u_qF2Trl_dIwTupbOJy8xdHGI/view?usp=share_link' target='_blaank' style={{textDecoration:'none'}}>click here</a></p>
          </div>
          <div className='col me-3'  style={{maxWidth:'450px', height:'300px', marginLeft:'100px', marginTop:'10px'}}> 
            <img src={web} alt="" className='rounded border border-2 border-warning' style={{width:'100%', height:'100%'}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Certification