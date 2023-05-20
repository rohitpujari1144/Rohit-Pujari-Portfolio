import React from 'react'
import './education.css'

function Education() {
  return (
    <>
      <div id='education' className='' style={{marginTop:'50px'}}>
        <div style={{marginLeft:'90px'}}>
          <h1 className='text-white' style={{letterSpacing:'3px'}}>EDUCATION</h1>
        </div>
        <div className='m-3 '>
          <div className="row">
            {/* left side div start */}
            <div className="col border-end border-info" style={{fontFamily:'Trebuchet MS'}}>
              <div >
                <div className='text-primary' style={{textAlign:'end'}}>
                  <h3>2022</h3>
                </div>
                <div className='text-white' style={{textAlign:'end'}}>
                  <h3>Bachelor of Engineering - Electronics</h3>
                  <h3>Dr. J. J. Magdum College of Engineering, Jaysingpur</h3>
                  <h4>75%</h4>
                </div>
              </div>
              <div style={{marginTop:'250px'}}>
                <div style={{textAlign:'end'}}>
                  <h3 className='text-primary'>2015</h3>
                </div>
                <div className='text-white' style={{textAlign:'end'}}>
                  <h3>Senior Secondary</h3>
                  <h3>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
                  <h4>82%</h4>
                </div>
              </div>
            </div>
            {/* left side div end */}

            {/* right side div start */}
            <div className="col border-start border-info">
              <div style={{marginTop:'200px'}}>
                <div className="d-grid" style={{gridTemplateColumns:'auto auto' , justifyContent:'space-between'}}>
                  <div>
                  <h3 className='text-primary'>2017</h3>
                  </div>
                </div>
                <div className='text-white'>
                  <h3>Higher Secondary</h3>
                  <h3>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
                  <h4>59%</h4>
                </div>
                </div>
            </div>
            {/* right side div end */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Education