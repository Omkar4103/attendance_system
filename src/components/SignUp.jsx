import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './Registration.css';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail, MdOutlinePassword } from 'react-icons/md';
import './Registration.css'

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertData, setAlertData] = useState({ error: null, message: null });
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlertData({ error: 'Passwords do not match', message: null });
      handleClick();
      return;
    }

    // Backend API endpoint for sign-up
    const signUpEndpoint = 'http://localhost:5000/signUp';

    // Request body with form data
    const requestBody = {
      name: name,
      email: email,
      password: password
    };

    // Fetch API call to sign up
    fetch(signUpEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        // Handle sign-up error
        setAlertData({ error: data.error, message: null });
      } else {
        // Handle successful sign-up
        setAlertData({ error: null, message: 'Sign up successful!' });
        handleClick(); // Trigger Snackbar when sign-up is successful
        navigate('/signin'); // Redirect the user to sign-in page after successful sign-up
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error appropriately, perhaps set an error state
    });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleLoginLinkClick = () => {
    navigate('/signin');
  };

  return (
    <div className='container' style={{ backgroundImage: 'url("./Assets/back7.jpg")' }}>
      <div className='wrapper'>
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <MdEmail className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <RiLockPasswordFill className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <MdOutlinePassword className='icon' />
          </div>
          <button type='submit'>Sign Up</button>
          <div className='register-link'>
            <p>Already have an account? <a href='#' onClick={handleLoginLinkClick}>Login</a></p>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertData.error ? 'error' : 'success'}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {alertData.error || alertData.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUp;