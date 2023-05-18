import React from 'react'
import gmailFour from '../../Assets/Gmail Clone/4.png'
import userManagementTwo from '../../Assets/user management/2.png'
import recipeFour from '../../Assets/recipe book/4.png'
import netlify from '../../Assets/Skills icons/netlify.png'

function Projects() {
  return (
    <>
      <div id='projects' className='' style={{height:'1670px'}}>
        <h1 className='text-white  mt-1' style={{letterSpacing:'3px', fontSize:'300%', marginLeft:'40px'}}>PROJECTS</h1>
          {/* Gmail Clone start */}
          <div className='mt-3 ms-3'>
            <div className="row">
              <div className='col text-white ms-4'>
                <h1 className='border-bottom border-warning border-3' style={{fontFamily:'Trebuchet MS', color: 'aqua', maxWidth:'fit-content'}}>1. Gmail Clone</h1>
                <p className='fs-5 mt-3' style={{fontFamily:'Trebuchet MS'}}>I am building Gmail Clone web app using React.js for frontend and Node.js for backend.</p>
                <h4 style={{fontFamily:'Arial'}}>Specifications - </h4>
                <ul>
                  <li className='fs-5'>User Signup</li>
                  <li className='fs-5'>User Login</li>
                  <li className='fs-5'>Gmail Services</li>
                </ul>
                <div className='d-flex border border-warning border-2 rounded position-relative top-0 start-50 translate-middle-x' style={{maxWidth:'fit-content'}}>
                  <div className='m-3'>
                    <a href='https://github.com/rohitpujari1144/Gmail-Clone.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
                  </div>
                  <div className='m-3'>
                    <a href='https://gmail-clone-using-electron-frontend.netlify.app/' target='_blank' rel="noreferrer"><img src={netlify} alt="" style={{maxWidth:'45px', maxHeight:'45px'}} className='me-1'/></a>
                  </div>
                </div>
              </div>
              <div className="col text-white me-5 rounded" style={{maxWidth:'730x', }}>
                  <img className='rounded' src={gmailFour} alt="" style={{width:'100%', height:'100%'}}/>
              </div>
            </div>
          </div>
          {/* Gmail Clone end */}

          {/* user management start */}
          <div className='' style={{marginTop:'80px'}}>
            <div className="row">
              <div className="col ms-4" style={{maxHeight:'380px', maxWidth:'730x', marginTop:'80px'}}>
                  <img className='rounded' src={userManagementTwo} alt="" style={{width:'100%', height:'100%'}}/>
              </div>
              <div className='col text-white me-3'>
                <h1 className='border-bottom border-warning border-3' style={{fontFamily:'Trebuchet MS', color: 'aqua', maxWidth:'fit-content'}}>2. User Management via Google Auth</h1>
                <p className='fs-5 mt-3' style={{fontFamily:'Trebuchet MS'}}>Created a web-based scheduling user registration and login system using Google Sign-in API. A user is able to sign-in using Google and then this is captured at the back-end.</p>
                <h4 style={{fontFamily:'Arial'}}>Specifications - </h4>
                <ul>
                  <li className='fs-5'>React.js framework for building the user interface.</li>
                  <li className='fs-5'>Project set up done in the Google API Console and enabled the Google Sign-In API to authenticate users via their Google account.</li>
                  <li className='fs-5'>Used Node.js server with Express.js for Back-end to handle the user registration and management functionality.</li>
                  <li className='fs-5'>MongoDB database to store the user data.</li>
                  <li className='fs-5'>The Authentication and authorization of application using JWT as the token-based authentication method.</li>
                </ul>
                <div className='d-flex border border-warning border-2 rounded position-relative top-0 start-50 translate-middle-x' style={{maxWidth:'fit-content'}}>
                  <div className='m-3'>
                    <a href='https://github.com/rohitpujari1144/user-management-google-auth.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
                  </div>
                  <div className='m-3'>
                    <a href='https://new-user-management.netlify.app/' target='_blank' rel="noreferrer"><img src={netlify} alt="" style={{maxWidth:'45px', maxHeight:'45px'}} className='me-1'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* user management end */}

          {/* recipe book start */}
          <div className='' style={{marginTop:'80px'}}>
            <div className="row">
              <div className='col text-white ms-4'>
                <h1 className='border-bottom border-3 border-warning' style={{fontFamily:'Trebuchet MS', maxWidth:'fit-content', color:'aqua'}}>3. Recipe Book</h1>
                <p className='fs-5 mt-3' style={{fontFamily:'Trebuchet MS'}}>I have developed a recipe book web application using React.js & Node.js.<br/>The recipe book allow users to view and save recipes.</p>
                <h4 style={{fontFamily:'Arial'}}>Specifications - </h4>
                <ul>
                  <li className='fs-5'>User authentication - Users are able to sign up, login and logout</li>
                  <li className='fs-5'>Recipe catalog - A list of recipes with their details (name, ingredients, instructions, and image)</li>
                  <li className='fs-5'>Recipe saving - Users are able to save recipes to their personal recipe book and view their saved recipes</li>
                  <li className='fs-5'>Recipe details - Users are able to view the details of a recipe, including its ingredients,instructions, and image</li>
                  <li className='fs-5'>User profile - Users are able to view their profile, which should include their saved recipes</li>
                </ul>
                <div className='d-flex border border-warning border-2 rounded position-relative top-0 start-50 translate-middle-x' style={{maxWidth:'fit-content'}}>
                  <div className='m-3'>
                    <a href='https://github.com/rohitpujari1144/recipe-book.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
                  </div>
                  <div className='m-3'>
                    <a href='https://new-recipe-book.netlify.app/' target='_blank' rel="noreferrer"><img src={netlify} alt="" style={{maxWidth:'45px', maxHeight:'45px'}} className='me-1'/></a>
                  </div>
                </div>
              </div>
            <div className="col me-5" style={{maxHeight:'400px', marginTop:'80px'}}>
                <img className='rounded' src={recipeFour} alt="" style={{width:'100%', height:'100%'}}/>
              </div>
            </div>
          </div>
          {/* recipe book end */}
      </div>
    </>
  )
}

export default Projects