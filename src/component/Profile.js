import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/profile.css'
import { Link } from 'react-router-dom';
import user from '../images/user.gif'
import config from '../config';
const UserProfile = ({ userType }) => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        
        try {
          const token = localStorage.getItem('token');
            const headers = {
                // Add your headers here, such as authentication tokens or content type
                Authorization: token,
                // Other headers...
              };
              const response = await axios.get(`${config.server}/user/profile`, {
                headers: headers,
              });
          setUserData(response.data.admin); // Assuming the response contains the user/admin data
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, [userType]);
  
    if (!userData) {
      return <p>Loading...</p>;
    }
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
      };
  
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">LodgesVista</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/AllUser">Users</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/HostelDetails">Hostels</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Complaints">Complaints</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Notices">Notice</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Payments</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Profile">Profile</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <main>
     
      <div className="card">
        <div className="card-left">
          {/* <h2>Profile</h2> */}
          <div className="score">
          <img style={{height:"150px",borderRadius:"150px"}} src={user} alt="" />
          </div>
          <div >
            <h2 style={{fontWeight:"bolder",textDecoration:"underline"}}>{userData.name}</h2>
            {/* <p>You scored higher than 65% of the people who have taken these tests.</p> */}
          </div>
        </div>
        <div className="card-right">
          <h2>Profile</h2>
          <ul className="summary-lists">
            <li>
              <div className="li-left">
                
                <p>Gender:{userData.gender}</p>
              </div>

            </li>
            <li>
              <div className="li-left">
                <p>DOB:{formatDate(userData.DOB)}</p>
              </div>
             
            </li>
            <li>
              <div className="li-left">
                
                <p>Hostel:{userData.hostelId}</p>
              </div>
              
            </li>
            <li>
              <div className="li-left">
               
                <p>Roll Number:{userData.RollNumber}</p>
              </div>
             
            </li>
            <li>
              <div className="li-left">
                <p>Branch:{userData.branch}</p>
              </div>
             
            </li>
            <li>
              <div className="li-left">
              <p>Room Alloted: {userData.RoomAlloted ? 'Yes' : 'No'}</p>
              </div>
             
            </li>
            <li>
              <div className="li-left">
                <p>Email Address:{userData.emailAddress}</p>
              </div>
             
            </li>
            <li>
              <div className="li-left">
                <p>Mobile Number:{userData.contactInformation}</p>
              </div>
             
            </li>
            <li>
              <div className="li-left">
                <p>Address:{userData.city},{userData.state}</p>
              </div>
             
            </li>
            
          </ul>
         
        </div>
      </div>
    </main>
    </>
  );
};

export default UserProfile;
