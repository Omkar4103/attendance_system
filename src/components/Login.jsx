import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signInAPI } from '../actions';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { GoogleLogin } from 'react-google-login';
import './Registration.css';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const responseGoogle = (response) => {
    // Handle Google login response
    console.log(response);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Dispatch signInAPI() action with username and password
    props.signIn(username, password);
  };

  return (
    <div className='wrapper' style={{ backgroundImage: 'url("./Assets/back7.jpg")' }}>
      {props.user && <Navigate to='/home' />}
      <form onSubmit={handleSignIn}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <RiLockPasswordFill className='icon' />
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          {/* Use Link component for navigation */}
          <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          <p className='para'>OR</p>
        </div >

        <GoogleLogin className='google'
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object, // Adjust the PropTypes as per your user object structure
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (username, password) => dispatch(signInAPI(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
