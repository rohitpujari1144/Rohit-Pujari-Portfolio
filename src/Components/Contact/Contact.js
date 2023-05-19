import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Contact() {
  const [open, setOpen] = useState(false);
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

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('service_kxz8elj', 'template_ttqr20e', form.current, 'D1EttmJByjbaXElio')
      .then((result) => {
        const name=document.getElementById('name')
        const mobile=document.getElementById('mobile')
        const email=document.getElementById('email')
        const message=document.getElementById('message')

          console.log(result.text);
          name.value='';
          mobile.value='';
          email.value='';
          message.value='';

          setOpen(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  function sendEmailClick(){
    const name=document.getElementById('name')
    const nameError=document.getElementById('nameError')
    const mobile=document.getElementById('mobile')
    const mobileError=document.getElementById('mobileError')
    const email=document.getElementById('email')
    const emailError=document.getElementById('emailError')
    const message=document.getElementById('message')
    const messageError=document.getElementById('messageError')
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    if(name.value===''){
      nameError.innerText="Required"
    }
    else{
      if(!isNaN(name.value)){
        nameError.innerText="Invalid"
      }
      else{
        nameError.innerText=''
      }
    }
    if(mobile.value===''){
      mobileError.innerText="Required"
    }
    else{
      if(isNaN(mobile.value)){
        mobileError.innerText="Invalid"
      }
      else if(mobile.value.length<10 || mobile.value.length>10){
        mobileError.innerText="Invalid"
      }
      else{
        mobileError.innerText=''
      }
    }
    if(email.value===''){
      emailError.innerText="Required"
    }
    else{
      if(email.value.match(emailPattern)){
        emailError.innerText=''
      }
      else{
        emailError.innerText="Invalid"
      }
    }
    if(message.value===''){
      messageError.innerText="Required"
    }
    else{
      messageError.innerText=''
    }
    if(nameError.innerText==='' && mobileError.innerText==='' && emailError.innerText==='' && messageError.innerText===''){
      sendEmail()
    }
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
            <form ref={form}>
              <div className='m-3'>
                <label htmlFor="name" className="form-label" style={{color:"aqua"}}>Name</label>
                <input name='user_name' type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder='name'></input>
                <span id='nameError' className='text-danger'></span>
              </div>
              <div className='m-3'>
                <label htmlFor="email" className="form-label" style={{color:"aqua"}}>Email address</label>
                <input name='user_email' type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='email id'></input>
                <span id='emailError' className='text-danger'></span>
              </div>
              <div className='m-3'>
                <label htmlFor="mobile" className="form-label" style={{color:"aqua"}}>Mobile Number</label>
                <input name='user_mobile_number' type="number" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder='mobile number'></input>
                <span id='mobileError' className='text-danger'></span>
              </div>
              <div className='m-3'>
                <label htmlFor="message" className="form-label" style={{color:"aqua"}}>Message</label>
                <textarea name='message'  className="form-control" placeholder="write your messsage here" id="message" style={{height: '100px'}}></textarea>
                <span id='messageError' className='text-danger'></span>
              </div>
              <div className='m-3 text-center'>
                <Button variant="contained" endIcon={<SendIcon />} onClick={()=>{sendEmailClick()}}>Send</Button>
              </div>
            </form>
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