import React, { useState } from 'react';
import '../css/signup.css'
import google from '../images/google.webp'
import config from '../config';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate= useNavigate();
    const [FormData, setFormData] = useState({
        name: '',
        contactInformation: '',
        address: '',
        gender: '',
        hostelId: '',
        emailAddress: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      const handleSignInClick = () => {
        navigate('/signin'); // Assuming your sign-up route is '/signup'
      };
    const handleSubmit = async () => {
        try {
            const response = await fetch(`${config.server}/AdminSignup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(FormData),
            });

            if (response.ok) {
                console.log("signup successful")
            } else {
                console.log("signup failed")
            }
        } catch (error) {
            console.error('error during signup: ', error)
        }
    }
    const googleAuth = () => {
        window.location.href = `${config.server}/google`
    }
    return (
        <div className='login-background' >
            <div className="wrap-login" >
                <div className="card-body" >
                    <p className="loginformtitle" ><h3><strong>Sign Up</strong></h3></p>
                    <div className="wrapinput" >
                        <input id='inputbox' type="text" className="form-control" placeholder="Enter your Full Name" aria-label="Username" aria-describedby="basic-addon1" name="name" onChange={handleChange} />
                    </div>
                    <div className="wrapinput" >
                        <input id='inputbox' type="text" className="form-control" placeholder="Enter your Phone Number" aria-label="Username" aria-describedby="basic-addon1" name='contactInformation' onChange={handleChange}  />
                    </div>
                    <div className="wrapinput" >
                        <input id='inputbox' type="text" className="form-control" placeholder="Enter your Address(format is city, state)" aria-label="Username" aria-describedby="basic-addon1" name="address" onChange={handleChange}  />
                    </div>
                    <div className="wrapinput" >
                        <input id='inputbox' type="text" className="form-control" placeholder="Gender" aria-label="Username" aria-describedby="basic-addon1" name="gender" onChange={handleChange}  />
                    </div>
                    <div className="wrapinput" >
                        <input id='inputbox' type="text" className="form-control" placeholder="Enter your HostelId" aria-label="Username" aria-describedby="basic-addon1" name="hostelId" onChange={handleChange}  />
                    </div>
                    <div className="wrapinput" >
                        <input id='inputbox' type="text" className="form-control" placeholder="Enter your Email id" aria-label="Username" aria-describedby="basic-addon1" name="emailAddress" onChange={handleChange}  />
                    </div>

                    <div className="wrapinput">
                        <input id='inputbox' type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" name="password" onChange={handleChange}  />
                    </div>
                    <div className='signinbutton'>
                        <button id='signinbutton' onClick={handleSubmit} >Sign Up</button>
                    </div>

                    <div className='textbelowbutton'>
                        <span className='txt1'> login using </span>
                    </div>
                    <div className='signinoption'>
                        <button style={{ border: "none", background: "#bb42d5", padding: "10px" }} onClick={googleAuth}>
                            <img id='googlegap' src={google} alt="" />
                        </button>
                        {/* <img src={fb} alt="" /> */}
                    </div>
                    <div className='textbelowbutton'>
                        <span className='txt1'>Already have an account ?</span>
                    </div>

                    <div className='signinbutton'>
                        <button id='signinbutton' onClick={handleSignInClick}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
