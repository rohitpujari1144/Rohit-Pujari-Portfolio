import React from 'react'
import profile from '../../Assets/profile.jpg'

function About() {
  return (
    <>
      <div className="row" style={{height:'680px'}}>
        <div id='about' className='col-7' style={{marginLeft:'50px'}}>
            <div className='text-white ms-5' style={{marginTop:'150px'}}>
              <h1 >Hi,</h1>
              <h1 >I'm <span style={{color:'aqua'}}>Rohit Pujari</span></h1>
              <h2 className='text-warning border-bottom border-warning border-3 pb-2' style={{maxWidth:'fit-content'}}>Full Stack Web Developer</h2>
            </div>
            <div className='ms-5 mt-4 fs-5' style={{maxWidth:'80%', fontFamily:'Trebuchet MS'}}>
              <p className='text-white'>An ambitious and self-motivated web developer with a considerable technical skills. Able to play a key
                  role in website development to ensure maximum accessibility, user experience and usability. A quick
                  learner who can absorb new ideas.</p>
            </div>
            <div className='d-grid text-white position-absolute bottom-0 start-50 translate-middle-x '>
              <i className="fa-solid fa-computer-mouse fs-1"></i>
              <i className="fa-solid fa-angles-down mt-2" style={{fontSize:'170%', marginLeft:'3px'}}></i>
            </div>
          </div>
          <div className="col text-white"> 
            <div className="ms-5" style={{ maxWidth:'300px', height:'300px', marginTop:'150px'}}>
                <img src={profile} alt="" className='' style={{height:'100%', width:'100%', borderRadius:"50%", border:'4px solid aqua'}}/>
            </div>
          </div>
      </div>
        
    </>
  )
}

export default About