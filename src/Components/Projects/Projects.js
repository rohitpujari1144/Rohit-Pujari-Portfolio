import React from 'react'
import './projects.css'
import netlify from '../../Assets/Skills icons/netlify.png'
import Carousel from 'react-bootstrap/Carousel'
import gmail1 from '../../Assets/Gmail Clone/1.png'
import gmail2 from '../../Assets/Gmail Clone/2.png'
import gmail3 from '../../Assets/Gmail Clone/3.png'
import gmail4 from '../../Assets/Gmail Clone/4.png'
import gmail5 from '../../Assets/Gmail Clone/5.png'
import gmail6 from '../../Assets/Gmail Clone/6.png'

import recipe1 from '../../Assets/recipe book/1.png'
import recipe2 from '../../Assets/recipe book/2.png'
import recipe3 from '../../Assets/recipe book/3.png'
import recipe4 from '../../Assets/recipe book/4.png'
import recipe5 from '../../Assets/recipe book/5.png'
import recipe6 from '../../Assets/recipe book/6.png'
import recipe7 from '../../Assets/recipe book/7.png'

import userManagement1 from '../../Assets/user management/1.png'
import userManagement2 from '../../Assets/user management/2.png'
import userManagement3 from '../../Assets/user management/3.png'
import userManagement4 from '../../Assets/user management/4.png'
import userManagement5 from '../../Assets/user management/5.png'

function Projects() {
  return (
    <>
      <div id='projects' className='projectsMainDiv ms-3 me-3'>
        <h1 className='text-white ms-3 mt-1 projects'>PROJECTS</h1>
          {/* Gmail Clone start */}
          <div className='mt-3 ms-3 me-3'>
            <div className="d-flex justify-content-evenly">
              <div className='col text-white'>
                <h1 className='border-bottom border-warning border-3 gmailClone'>1. Gmail Clone</h1>
                <p className='fs-5 mt-3 gmailCloneDesc'>I have built Gmail Clone web app using React.js for frontend and Node.js for backend.</p>
                <h4 className='gmailCloneSpecifications'>Specifications - </h4>
                <ul>
                  <li className='fs-5'>User Signup</li>
                  <li className='fs-5'>User Login</li>
                  <li className='fs-5'>Gmail Services</li>
                </ul>
                <div className='d-flex border border-warning border-2 rounded position-relative top-0 start-50 translate-middle-x projectButton'>
                  <div className='m-3'>
                    <a href='https://github.com/rohitpujari1144/Gmail-Clone.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
                  </div>
                  <div className='m-3'>
                    <a href='https://gmail-clone-using-electron-frontend.netlify.app/' target='_blank' rel="noreferrer"><img src={netlify} alt="" className='me-1 netlify'/></a>
                  </div>
                </div>
              </div>
              <div className="col" >
                  <Carousel>
                    <Carousel.Item className='bg-dark'>
                      <img className="d-block w-100 h-100 rounded" src={gmail1} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={gmail2} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={gmail3} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={gmail4} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={gmail5} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={gmail6} alt="Gmail clone"/>
                    </Carousel.Item>
                  </Carousel>
                  <div className='text-center text-white mt-3'>
                    <p>click on the side of image to change</p>
                  </div>
              </div>
            </div>
          </div>
          {/* Gmail Clone end */}

          {/* user management start */}
          <div className='userManagementDiv ms-3 me-3 mt-5'>
            <div className="d-flex justify-content-evenly">
              <div className="col d-flex align-items-center">
                <div className=''>
                  <Carousel>
                    <Carousel.Item className='bg-dark'>
                      <img className="d-block w-100 h-100 rounded" src={userManagement1} alt="User Management"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={userManagement2} alt="User Management"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={userManagement3} alt="User Management"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={userManagement4} alt="User Management"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={userManagement5} alt="User Management"/>
                    </Carousel.Item>
                  </Carousel>
                  <div className='text-center text-white mt-3'>
                    <p>click on the side of image to change</p>
                  </div>
                </div>
              </div>
              <div className='col text-white ms-3'>
                <h1 className='border-bottom border-warning border-3 userManagementViaGoogleAuth'>2. User Management via Google Auth</h1>
                <p className='fs-5 mt-3 userManagementDesc'>Created a web-based scheduling user registration and login system using Google Sign-in API. A user is able to sign-in using Google and then this is captured at the backend.</p>
                <h4 className='userManagementSpecification' style={{fontFamily:'Trebuchet MS'}}>Specifications - </h4>
                <ul>
                  <li className='fs-5' style={{fontFamily:'Trebuchet MS'}}>React.js framework for building the user interface.</li>
                  <li className='fs-5' style={{fontFamily:'Trebuchet MS'}}>Project set up done in the Google API Console and enabled the Google Sign-In API to authenticate users via their Google account.</li>
                  <li className='fs-5' style={{fontFamily:'Trebuchet MS'}}>Used Node.js server with Express.js for Back-end to handle the user registration and management functionality.</li>
                  <li className='fs-5' style={{fontFamily:'Trebuchet MS'}}>MongoDB database to store the user data.</li>
                  <li className='fs-5' style={{fontFamily:'Trebuchet MS'}}>The Authentication and authorization of application using JWT as the token-based authentication method.</li>
                </ul>
                <div className='d-flex border border-warning border-2 rounded position-relative top-0 start-50 translate-middle-x projectButton'>
                  <div className='m-3'>
                    <a href='https://github.com/rohitpujari1144/user-management-google-auth.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
                  </div>
                  <div className='m-3'>
                    <a href='https://new-user-management.netlify.app/' target='_blank' rel="noreferrer"><img src={netlify} alt="" className='me-1 netlify'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* user management end */}

          {/* recipe book start */}
          <div className='mt-5 ms-3 me-3'>
            <div className="d-flex justify-content-evenly">
              <div className='col text-white'>
                <h1 className='border-bottom border-warning border-3 gmailClone'>3. Recipe Book</h1>
                <p className='fs-5 mt-3 gmailCloneDesc'>I have developed a recipe book web application using React.js & Node.js.<br/>The recipe book allow users to view and save recipes.</p>
                <h4 className='gmailCloneSpecifications'>Specifications - </h4>
                <ul>
                  <li className='fs-5'>User authentication - Users are able to sign up, login and logout</li>
                  <li className='fs-5'>Recipe catalog - A list of recipes with their details (name, ingredients, instructions, and image)</li>
                  <li className='fs-5'>Recipe saving - Users are able to save recipes to their personal recipe book and view their saved recipes</li>
                  <li className='fs-5'>Recipe details - Users are able to view the details of a recipe, including its ingredients,instructions, and image</li>
                  <li className='fs-5'>User profile - Users are able to view their profile, which should include their saved recipes</li>
                </ul>
                <div className='d-flex border border-warning border-2 rounded position-relative top-0 start-50 translate-middle-x projectButton'>
                  <div className='m-3'>
                    <a href='https://github.com/rohitpujari1144/recipe-book.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
                  </div>
                  <div className='m-3'>
                    <a href='https://new-recipe-book.netlify.app/' target='_blank' rel="noreferrer"><img src={netlify} alt="" className='me-1 netlify'/></a>
                  </div>
                </div>
              </div>
              <div className="col recipeBookCrouselDiv">
                  <Carousel>
                    <Carousel.Item className='bg-dark'>
                      <img className="d-block w-100 h-100 rounded" src={recipe1} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={recipe2} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={recipe3} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={recipe4} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={recipe5} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={recipe6} alt="Gmail clone"/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block w-100 h-100 rounded" src={recipe7} alt="Gmail clone"/>
                    </Carousel.Item>
                  </Carousel>
                  <div className='text-center text-white mt-3'>
                    <p>click on the side of image to change</p>
                  </div>
              </div>
            </div>
          </div>
          {/* recipe book end */}
      </div>
    </>
  )
}

export default Projects