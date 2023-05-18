import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Contact() {
  const [open, setOpen] = useState(false);

  const name=document.getElementById('name')
  const email=document.getElementById('email')
  const mobile=document.getElementById('mobile')
  const message=document.getElementById('message')


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setOpen(false);
};

const action = (
  <React.Fragment>
  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
  </IconButton>
  </React.Fragment>
);

  function sendMessageClick(){
    console.log('sendMessageClick()');
    console.log(name);
    console.log(email);
    console.log(mobile);
    console.log(message);

    setOpen(true);
  }
  return (
    <>
    <div id='contact' className='' style={{height:'670px'}}>
      <div className="row">
        <div className='col-5' style={{marginTop:'110px', marginLeft:'90px'}}>
          <div className=''>
            <h1 className='text-white' style={{maxWidth:'fit-content', fontSize:'300%', letterSpacing:'3px'}}>CONTACT</h1>
            <p className='fs-5' style={{fontFamily:'Trebuchet MS', color:'aqua'}}>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</p>
            <div className='d-grid'>
              <div className="d-flex mb-3">
                <i className="fa-solid fa-envelope fs-3 text-danger"></i>
                <span className='text-white fs-5 ms-2' style={{fontFamily:'Trebuchet MS'}}>rohit10231@gmail.com</span>
              </div>
              <div className="d-flex mb-3">
                <i className="fa-solid fa-phone fs-3 text-success"></i>
                <span className='text-white fs-5 ms-2' style={{fontFamily:'Trebuchet MS'}}>+91 8623867087</span>
              </div>
              <div className="d-flex justify-content-start">
                <a href="https://www.linkedin.com/in/rohit-pujari-4176a9232" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin fs-3 text-primary me-3"></i></a>
                <a href="https://github.com/rohitpujari1144" target='_blank' rel="noreferrer"><i className="fa-brands fa-github fs-3 text-white me-3"></i></a>
                <a href="https://www.instagram.com/pujari__rohit/?igshid=ZGUzMzM3NWJiOQ%3D%3D" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram fs-3 text-danger" ></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className='border col-8 rounded border-2' style={{marginLeft:'150px', marginTop:'110px'}}>
            <div className='m-3'>
              <Form.Label htmlFor="name" style={{color:"aqua"}}>Name</Form.Label>
              <Form.Control type="text" id="name" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className='m-3'>
              <Form.Label htmlFor="email" style={{color:"aqua"}}>Email Id</Form.Label>
              <Form.Control type="email" id="email" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className='m-3'>
              <Form.Label htmlFor="mobile" style={{color:"aqua"}}>Mobile number</Form.Label>
              <Form.Control type="number" id="mobile" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className='m-3'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{color:"aqua"}}>Message</Form.Label>
                <Form.Control as="textarea" id='message' rows={4}/>
              </Form.Group>
            </div>
            <div className='m-3 text-center'>
              <Button variant="contained" endIcon={<SendIcon />} onClick={()=>{sendMessageClick()}}>Send</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='text-white' style={{marginLeft:'80px'}}>
        <h2>	&#169; Rohit 2023</h2>
      </div> */}
    </div>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="Message Sent" action={action}/>
</>
  )
}

export default Contact