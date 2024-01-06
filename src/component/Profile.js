import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/profile.css'
import user from '../images/user.gif'
import config from '../config';
const UserProfile = ({ userType }) => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        
        try {
            const headers = {
                // Add your headers here, such as authentication tokens or content type
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjU3MWMyNjA5NmY0NTcxNGY4YWM3Y2JkIiwiaWF0IjoxNzA0NTEzODA1LCJleHAiOjE3MDUxMTg2MDV9.l7Y9gthB42HIiXjlQAyfRfIYlgsdHrfPcBdQ_FRxoHY',
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
  );
};

export default UserProfile;
