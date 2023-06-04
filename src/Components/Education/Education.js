import React from 'react'
import './education.css'

function Education() {
  return (
    <>
      {/* <div id='education' className='educationMainDiv'> */}
        {/* <div className='education'>
          <h1 className='text-white'>EDUCATION</h1>
        </div> */}
        {/* <div className='m-3 '>
          <div className="row"> */}
            {/* left side div start */}
            {/* <div className="col border-end border-info leftDiv"> */}
              {/* <div>
                <div className='text-primary textAlignEnd'>
                  <h3>2022</h3>
                </div>
                <div className='text-white textAlignEnd'>
                  <h3>Bachelor of Engineering - Electronics</h3>
                  <h3>Dr. J. J. Magdum College of Engineering, Jaysingpur</h3>
                  <h4>75%</h4>
                </div>
              </div> */}
              {/* <div className='sscDiv'>
                <div className='textAlignEnd'>
                  <h3 className='text-primary'>2015</h3>
                </div>
                <div className='text-white textAlignEnd'>
                  <h3>Senior Secondary</h3>
                  <h3>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
                  <h4>82%</h4>
                </div>
              </div> */}
            {/* </div> */}
            {/* left side div end */}

            {/* right side div start */}
            {/* <div className="col border-start border-info leftDiv">
              <div className='hscDiv'>
                <div>
                  <h3 className='text-primary'>2017</h3>
                </div>
                <div className='text-white'>
                  <h3>Higher Secondary</h3>
                  <h3>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
                  <h4>59%</h4>
                </div>
              </div>
            </div> */}
            {/* right side div end */}
          {/* </div>
        </div>
      </div> */}

      <div id='education' className='educationMainDiv'>
        <h1 className='text-white education'>EDUCATION</h1>
        <div className='' >
          <div className="row">
            {/* left side div start */}
            <div className="col border-end border-info leftDiv"  style={{height:'600px'}}>
              <div className='textAlignEnd'>
                <h3 className='text-primary'>2022</h3>
                <h3 className='text-white'>Bachelor of Engineering - Electronics</h3>
                <h3 className='text-white'>Dr. J. J. Magdum College of Engineering, Jaysingpur</h3>
                <h4 className='text-white'>75%</h4>
              </div>
              <div className='d-grid align-items-baseline position-relative top-50 start-50 translate-middle' style={{marginTop:'75px'}}>
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
            <div className="col border-start border-info d-grid align-items-center" style={{fontFamily:'Trebuchet MS'}}>
              <div className=''>
                <h3 className='text-primary'>2017</h3>
                <h3 className='text-white'>Higher Secondary</h3>
                <h3 className='text-white'>Shri. Padmaraje Vidyalay & Junior College, Shirol</h3>
              <h4 className='text-white'>59%</h4>
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