import React, { useState, useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import gmail from '../../Assets/gmail.jpg'
import linkedIn from '../../Assets/linkedIn.png'
import github from '../../Assets/github.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const name = document.getElementById('name')
        const mobile = document.getElementById('mobile')
        const email = document.getElementById('email')
        const message = document.getElementById('message')

        // console.log(result.text);
        name.value = '';
        mobile.value = '';
        email.value = '';
        message.value = '';

        // setOpen(true);
        toast.success('Message sent !', {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  function nameValidate() {
    const name = document.getElementById('name')
    const nameError = document.getElementById('nameError')
    if (name.value === '') {
      nameError.innerText = "*Required"
    }
    else {
      if (!isNaN(name.value)) {
        nameError.innerText = "*Invalid"
      }
      else {
        nameError.innerText = ''
      }
    }
  }

  function emailValidate() {
    const email = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    if (email.value === '') {
      emailError.innerText = "*Required"
    }
    else {
      emailError.innerText = ""
    }
  }

  function mobileValidate() {
    const mobile = document.getElementById('mobile')
    const mobileError = document.getElementById('mobileError')
    if (mobile.value === '') {
      mobileError.innerText = "*Required"
    }
    else {
      mobileError.innerText = ''
    }
  }

  function messageValidate() {
    const message = document.getElementById('message')
    const messageError = document.getElementById('messageError')
    if (message.value === '') {
      messageError.innerText = "*Required"
    }
    else {
      messageError.innerText = ''
    }
  }

  function sendEmailClick() {
    const name = document.getElementById('name')
    const nameError = document.getElementById('nameError')
    const mobile = document.getElementById('mobile')
    const mobileError = document.getElementById('mobileError')
    const email = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    const message = document.getElementById('message')
    const messageError = document.getElementById('messageError')
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    if (name.value === '') {
      nameError.innerText = "*Required"
    }
    else {
      if (!isNaN(name.value)) {
        nameError.innerText = "*Invalid"
      }
      else {
        nameError.innerText = ''
      }
    }
    if (mobile.value === '') {
      mobileError.innerText = "*Required"
    }
    else {
      if (isNaN(mobile.value)) {
        mobileError.innerText = "*Invalid"
      }
      else if (mobile.value.length < 10 || mobile.value.length > 10) {
        mobileError.innerText = "*Invalid"
      }
      else {
        mobileError.innerText = ''
      }
    }
    if (email.value === '') {
      emailError.innerText = "*Required"
    }
    else {
      if (email.value.match(emailPattern)) {
        emailError.innerText = ''
      }
      else {
        emailError.innerText = "*Invalid"
      }
    }
    if (message.value === '') {
      messageError.innerText = "*Required"
    }
    else {
      messageError.innerText = ''
    }
    if (nameError.innerText === '' && mobileError.innerText === '' && emailError.innerText === '' && messageError.innerText === '') {
      sendEmail()
    }
  }

  return (
    <>
      <div id='contact' className='contactMainDiv'>
        <div className='contactLeftDiv'>
          <h1 className='text-white contact'>CONTACT</h1>
          <p className='fs-5 message'>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</p>
          <div className='d-grid'>
            <div className="d-flex mb-3">
              <img src={gmail} className='mt-1' alt="" style={{ width: '29px', height: '23px' }} />
              <span className='text-white fs-5 ms-2 email' style={{ fontFamily: 'Trebuchet MS' }}>rohit10231@gmail.com</span>
            </div>
            <div className="d-flex mb-3">
              <i className="fa-solid fa-phone fs-3 text-success"></i>
              <span className='text-white fs-5 ms-2 mobileNumber' style={{ fontFamily: 'Trebuchet MS' }}>+91 8623867087</span>
            </div>
            <div className="d-flex justify-content-between linkdinGithub">
              <a href="https://www.linkedin.com/in/rohit-pujari-4176a9232" target='_blank' rel="noreferrer" style={{ width: '30px', height: '30px' }} ><img src={linkedIn} className='rounded-1' alt="" style={{ width: '100%', height: '100%' }} /> </a>
              <a href="https://github.com/rohitpujari1144" target='_blank' rel="noreferrer" style={{ width: '30px', height: '30px' }} ><img src={github} className='rounded-1' alt="" style={{ width: '100%', height: '100%' }} /> </a>
            </div>
          </div>
        </div>
        <div className='contactFormDiv'>
          <form ref={form} className='p-4 border border-2 rounded mb-5'>
            <div className=''>
              <label htmlFor="name" className="form-label formInpulabel">Name</label>
              <input name='user_name' type="email" className="form-control" id="name" aria-describedby="emailHelp" placeholder='name' onKeyUp={() => { nameValidate() }} autoComplete='off' />
              <span id='nameError' className='text-danger'></span>
            </div>
            <div className='mt-3'>
              <label htmlFor="email" className="form-label formInpulabel">Email address</label>
              <input name='user_email' type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='email address' onKeyUp={() => { emailValidate() }} />
              <span id='emailError' className='text-danger'></span>
            </div>
            <div className='mt-3'>
              <label htmlFor="mobile" className="form-label formInpulabel">Mobile Number</label>
              <input name='user_mobile_number' type="number" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder='mobile number' onKeyUp={() => { mobileValidate() }} />
              <span id='mobileError' className='text-danger'></span>
            </div>
            <div className='mt-3'>
              <label htmlFor="message" className="form-label formInpulabel">Message</label>
              <textarea name='message' className="form-control" placeholder="write your messsage here" id="message" style={{ height: '100px' }} onKeyUp={() => { messageValidate() }} />
              <span id='messageError' className='text-danger'></span>
            </div>
            <div className='mt-3 text-center'>
              <Button variant="contained" endIcon={<SendIcon />} onClick={() => { sendEmailClick() }}>Send</Button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="Message Sent" action={action} />
      <ToastContainer />
    </>
  )
}

export default Contact