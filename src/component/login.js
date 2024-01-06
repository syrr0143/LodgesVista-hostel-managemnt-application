import React, { useState } from 'react';
import '../css/login.css'
import google from '../images/google.webp'
import { Link, useNavigate } from 'react-router-dom';
import config from '../config.js'
export default function Login() {
  const navigate = useNavigate();
  const googleAuth = () => {
    window.location.href = `${config.server}/google`
  }

  const [emailAddress, setemailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Example: Sending a POST request to the backend
    fetch(`${config.server}/AdminLogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddress, password }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend
        console.log('Login response:', data);
        // You can add logic here to handle successful login or display error messages
        if (data.message === 'Login successful') {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
          // fetch(`${config.server}/allUsers`, {
          //   headers: {
          //     Authorization: data.token,
          //   },
          // });
          // Navigate to the homepage
          navigate('/HostelDetails'); // Replace '/homepage' with the actual path of your homepage
        } else {
          // Handle unsuccessful login, show error messages, etc.
          console.log('Login failed:', data.message);
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        // Handle errors here
      });
  };
  return (


    <div className='login-background' >
      <div className="wrap-login" >
        <div className="card-body" >
          <p className="loginformtitle" ><h3><strong>Sign In</strong></h3></p>
          <div className="wrapinput" >
            <input id='inputbox' type="text" className="form-control" placeholder="Enter your Email id" aria-label="Username" aria-describedby="basic-addon1" value={emailAddress}
              onChange={e => setemailAddress(e.target.value)} />
          </div>

          <div className="wrapinput">
            <input autoSave='true' id='inputbox' type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='signinbutton'>
            <button onClick={handleSignIn} id='signinbutton' >Sign in</button>
          </div>

          <div className='textbelowbutton'>
            <span className='txt1'> login using </span>
          </div>
          <div className='signinoption'>
            <button onClick={googleAuth}> <img id='googlegap' src={google} alt="" /></button>
            {/* <img src={fb} alt="" /> */}
          </div>
          <div className='textbelowbutton'>
            <span className='txt1'>Don't have an account ?</span>
          </div>

          <div className='signinbutton'>
            <button id='signinbutton' ><Link to="/signup">Sign Up</Link></button>
          </div>
        </div>
      </div>
    </div>

  )
}

