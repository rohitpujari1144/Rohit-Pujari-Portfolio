import React from 'react'
import './projects.css'
import './userManagementStyle.css'
import './gmailCloneStyle.css'
import './recipeBookStyle.css'
import './pujariJcbSparesStyle.css'

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
import userManagement6 from '../../Assets/user management/6.png'

import pujariJcb1 from '../../Assets/Pujari JCB Sapres/1.jpg'
import pujariJcb2 from '../../Assets/Pujari JCB Sapres/2.jpg'
import pujariJcb3 from '../../Assets/Pujari JCB Sapres/3.jpg'
import pujariJcb4 from '../../Assets/Pujari JCB Sapres/4.jpg'
import pujariJcb5 from '../../Assets/Pujari JCB Sapres/5.jpg'
import pujariJcb6 from '../../Assets/Pujari JCB Sapres/6.jpg'
import pujariJcb7 from '../../Assets/Pujari JCB Sapres/7.jpg'
import pujariJcb8 from '../../Assets/Pujari JCB Sapres/8.jpg'
import pujariJcb9 from '../../Assets/Pujari JCB Sapres/9.jpg'


function Projects() {
  return (
    <>
      <div id='projects' className='projectsMainDiv'>
        <h1 className='text-white projects'>PROJECTS</h1>
        {/* Gmail Clone start */}
        <div className="gmailClone">
          <div className='col text-white' >
            <h1 className='gmailCloneText'>1. Gmail Clone</h1>
            <p className='fs-5 mt-3 gmailCloneDesc'>Gmail Clone web application which allows users to send and receive emails</p>
            <h4 className='gmailCloneSpecifications'>Specifications:</h4>
            <ul>
              <li className='fs-5'>User Signup</li>
              <li className='fs-5'>User Login</li>
              <li className='fs-5'>Gmail Services</li>
            </ul>
            <h4 className='gmailCloneSpecifications'>Technologies used:</h4>
            <ul>
              <li className='fs-5'>Frontend: React.js</li>
              <li className='fs-5'>Backend: Node.js</li>
              <li className='fs-5'>Database: MongoDB</li>
            </ul>
            <div className='rounded gmailClonebuttonDiv'>
              <div className='m-2'>
                <a href='https://github.com/rohitpujari1144/Gmail-Clone.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
              </div>
              <div className='m-2'>
                <a href='https://gmail-clone-using-electron-frontend.netlify.app/' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe me-1 netlify fs-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col gmailCloneCarousel">
            <Carousel>
              <Carousel.Item className='bg-dark'>
                <img className="d-block w-100 h-100 rounded" src={gmail1} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={gmail2} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={gmail3} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={gmail4} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={gmail5} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={gmail6} alt="Gmail clone" />
              </Carousel.Item>
            </Carousel>
            <div className='text-center text-white mt-3'>
              <p>click on the side of image to change</p>
            </div>
          </div>
        </div>
        {/* Gmail Clone end */}

        {/* user management start */}
        <div className="userManagementDiv">
          <div className="col me-2">
            <Carousel>
              <Carousel.Item className='bg-dark'>
                <img className="d-block w-100 h-100 rounded" src={userManagement1} alt="User Management" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={userManagement2} alt="User Management" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={userManagement3} alt="User Management" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={userManagement4} alt="User Management" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={userManagement5} alt="User Management" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={userManagement6} alt="User Management" />
              </Carousel.Item>
            </Carousel>
            <div className='text-center text-white mt-3'>
              <p>click on the side of image to change</p>
            </div>
          </div>
          <div className='col text-white ms-3'>
            <h1 className='userManagementViaGoogleAuth'>2. User Management via Google Auth</h1>
            <p className='fs-5 mt-3 userManagementDesc'>Created a web-based scheduling user registration and login system using Google Sign-in API. A user is able to sign-in using Google and then this is captured at the backend.</p>
            <h4 className='userManagementSpecification' style={{ fontFamily: 'Trebuchet MS' }}>Specifications - </h4>
            <ul>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>React.js framework for building the user interface.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>Project set up done in the Google API Console and enabled the Google Sign-In API to authenticate users via their Google account.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>Used Node.js server with Express.js for Back-end to handle the user registration and management functionality.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>MongoDB database to store the user data.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>The Authentication and authorization of application using JWT as the token-based authentication method.</li>
            </ul>
            <div className='gmailClonebuttonDiv rounded'>
              <div className='m-2'>
                <a href='https://github.com/rohitpujari1144/user-management-google-auth.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
              </div>
              <div className='m-2'>
                <a href='https://new-user-management.netlify.app/' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe me-1 netlify fs-1"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* user management end */}

        {/* recipe book start */}
        <div className="recipeBookMainDiv ">
          <div className='col text-white'>
            <h1 className='recipeBook'>3. Recipe Book</h1>
            <p className='fs-5 mt-3 gmailCloneDesc'>I have developed a recipe book web application using React.js & Node.js.<br />The recipe book allow users to view and save recipes.</p>
            <h4 className='gmailCloneSpecifications'>Specifications - </h4>
            <ul>
              <li className='fs-5'>User authentication - Users are able to sign up, login and logout</li>
              <li className='fs-5'>Recipe catalog - A list of recipes with their details (name, ingredients, instructions, and image)</li>
              <li className='fs-5'>Recipe saving - Users are able to save recipes to their personal recipe book and view their saved recipes</li>
              <li className='fs-5'>Recipe details - Users are able to view the details of a recipe, including its ingredients,instructions, and image</li>
              <li className='fs-5'>User profile - Users are able to view their profile, which should include their saved recipes</li>
            </ul>
            <div className='rounded gmailClonebuttonDiv'>
              <div className='m-2'>
                <a href='https://github.com/rohitpujari1144/recipe-book.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
              </div>
              <div className='m-2'>
                <a href='https://new-recipe-book.netlify.app/' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe me-1 netlify fs-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col recipeBookCrouselDiv">
            <Carousel>
              <Carousel.Item className='bg-dark'>
                <img className="d-block w-100 h-100 rounded" src={recipe1} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={recipe2} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={recipe3} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={recipe4} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={recipe5} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={recipe6} alt="Gmail clone" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={recipe7} alt="Gmail clone" />
              </Carousel.Item>
            </Carousel>
            <div className='text-center text-white mt-3'>
              <p>click on the side of image to change</p>
            </div>
          </div>
        </div>
        {/* recipe book end */}

        {/* pujari jcb spares start */}
        <div className="pujariJcbDiv">
          <div className="col me-2">
            <Carousel>
              <Carousel.Item className='bg-dark'>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb1} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb2} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb3} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb4} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb5} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb6} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb7} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb8} alt="Pujari JCB Spares" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 h-100 rounded" src={pujariJcb9} alt="Pujari JCB Spares" />
              </Carousel.Item>
            </Carousel>
            <div className='text-center text-white mt-3'>
              <p>click on the side of image to change</p>
            </div>
          </div>
          <div className='col text-white ms-3'>
            <h1 className='pujariJcbSpares'>4. Pujari JCB Sapres</h1>
            <p className='fs-5 mt-3 pujariJcbDesc'>An e-commerce website to order JCB spare parts</p>
            <h4 className='pujariJcbSpecification' style={{ fontFamily: 'Trebuchet MS' }}>Specifications - </h4>
            <ul>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>React.js framework for building the user interface.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>Node.js server with Express.js for backend to handle the user registration and management functionality.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>MongoDB database to store the user data.</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>User profile page to see users basic information and ordered products</li>
              <li className='fs-5' style={{ fontFamily: 'Trebuchet MS' }}>Admin profile page to see all registered users and all ordered products</li>
            </ul>
            <div className='pujariJcbButtonDiv rounded'>
              <div className='m-2'>
                <a href='https://github.com/rohitpujari1144/Pujari_JCB_Spares.git' target='_blank' rel="noreferrer"><i className="fa-brands fa-github text-white fs-1"></i></a>
              </div>
              <div className='m-2'>
                <a href='https://pujari-jcb-spares.netlify.app/' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe me-1 netlify fs-1"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* pujari jcb spares end */}
      </div>
    </>
  )
}

export default Projects