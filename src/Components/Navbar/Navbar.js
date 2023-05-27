import React from 'react'
import './navbar.css'

function TabsExample() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top border-bottom border-white border-2" style={{backgroundColor:'black', }}>
        <div className="container-fluid">
          <button className="navbar-toggler" style={{backgroundColor:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <h3 className='text-white' style={{fontFamily:'Trebuchet MS'}}>Rohit.dev</h3>
             */}
            <ul className="navbar-nav" >
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#about" style={{fontFamily:'Trebuchet MS', fontSize:'150%', color:'aqua'}}>Rohit.dev</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto" >
              <li className="nav-item about">
                <a className="nav-link active text-white" aria-current="page" href="#about" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#education" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#experience" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#certification" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Certification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#projects" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#skills" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#contact" style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="https://drive.google.com/file/d/1NaI4LRYQB4OtfppBQsh4EhUYF7egH2Mo/view?usp=sharing" target='_blank' rel="noreferrer"  style={{fontFamily:'Trebuchet MS', fontSize:'125%'}}>Resume <i className="fa-solid fa-download fs-5"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  );
}

export default TabsExample;
