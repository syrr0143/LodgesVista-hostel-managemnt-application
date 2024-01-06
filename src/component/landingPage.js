import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/landingpage.css'
import landing from '../images/LANDING.svg'
import topdesign from '../images/topdesign.svg'

function LandingPage() {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/signup'); // Assuming your sign-up route is '/signup'
  };
  const handleSignInClick = () => {
    navigate('/signin'); // Assuming your sign-up route is '/signup'
  };

  return (
    <>
      <div >

        <nav className="navbar bg-red navbar-expand-lg">

          <div className="container-fluid">
            <a className="navbar-brand " href="#" >LodgesVista</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">AboutUs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <button id='signup' onClick={handleSignUpClick} >SignUp</button>
                </li>
                <li className="nav-item">
                  <button onClick={handleSignInClick}>SignIn</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='landing'>
          <img id="landing" src={landing} alt="" />
        </div>
      </div>
      <div className='slogan'>
        <h1>Unlocking Comfort,
          <br /> Fostering Community: <br />
          Your Home Away From Home with LodgesVista.</h1>
      </div>
      <div className='description'>
        LodgesVista is your premier hostel management solution,fostering a <br />
        seamless blend of comfort and community.With a user-centric  approach,<br />
        we empower administrators to efficiently manage hostels while ensuring<br />
        students experience a delightful home away from home.<br />
        <br />
        Unlock a new standard of hostel living with LodgesVista's innovative platform.
      </div>
      <button className='getstarted' onClick={handleSignUpClick}>GET STARTED FOR FREE</button>
      <div className='topdesign'>
        <img id='backg' src={topdesign} alt="" />

        <h2 id='ad'>ALL SERVICES IN ONE PLACE</h2>

      </div>
      <div className="components">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title">User Authentication</h5>
                <p class="card-text">Sign up and sign in functionality: Users can easily log in securely.
                  <br />
                  Logout:Users can log out for security.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Account will be created by the hostel admin</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title">Complaint System</h5>
                <p class="card-text">User-Generated Complaints:Users can submit complaints online for quick resolution.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Admin can provide instant solution</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title">Notice Board</h5>
                <p class="card-text">Dynamic Notice Page: Display a dynamic notice board where hostel admins can post important announcements for users.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Admin will post Important Notices here.</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title">User Authentication</h5>
                <p class="card-text">Sign up and sign in functionality: Users can easily log in securely.
                  Logout:Users can log out for security.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Account will be created by the hostel admin</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title">Online Payments</h5>
                <p class="card-text">Integrated Payment System:Seamless online payment system for booking and other transactions.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Easy and secure transactions system.</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title">User Management</h5>
                <p class="card-text">Add New User: Highlight the simplicity of adding new users to the system.
                  <br />
                  Delete User: Showcase the feature for hostel admins to remove users when necessary.
                  <br />
                  Find User: Describe the ability to quickly find user details for effective management.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Admin can easily perform all these functions.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <h5 style={{fontFamily:"cursive"}}>LodgesVista</h5>
            </div>
            <div class="footer-links">
              <ul class="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div class="footer-social">
              <ul class="social-icons">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 LodgesVista. All rights reserved.</p>
          </div>
        </div>
      </footer>

   <hr />

    </>
  )
}

export default LandingPage
