import React from 'react'
import './education.css'

function Education() {
  return (
    <>
      <div id='education' className='educationMainDiv'>
        <h1 className='text-white education'>EDUCATION</h1>
        <div className="educationDiv" >
          {/* left side div start */}
          <div className="col leftDiv">
            <div className='textAlignEnd me-3'>
              <h3 className='text-primary'>2022</h3>
              <h3 className='text-white'>Bachelor of Engineering - Electronics</h3>
              <h3 className='text-white'>Dr. J. J. Magdum College of Engineering, Jaysingpur</h3>
              <h4 className='text-white'>75%</h4>
            </div>
            <div className='sscDiv'>
              <div className='textAlignEnd'>
                <h3 className='text-primary'>2015</h3>
                <h3 className='text-white'>Senior Secondary</h3>
                <h3 className='text-white'>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
                <h4 className='text-white'>82%</h4>
              </div>
            </div>
          </div>
          {/* left side div end */}

          {/* right side div start */}
          <div className="hscDiv col">
            <div>
              <h3 className='text-primary'>2017</h3>
              <h3 className='text-white'>Higher Secondary</h3>
              <h3 className='text-white'>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
              <h4 className='text-white'>59%</h4>
            </div>
          </div>
          {/* right side div end */}
        </div>
      </div>
    </>
  )
}

export default Education