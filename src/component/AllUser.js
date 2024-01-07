import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../config';
import '../css/AllUser.css'
// Rename the function to start with an uppercase letter
function AllUser() {
    const [users, setUsers] = useState([]);
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-GB', options);
        return formattedDate;
      };
    useEffect(() => {
        // Fetch users from the backend when the component mounts
        const fetchUsers = async () => {
            try {
              const token = localStorage.getItem("token");
                const response = await axios.get(`${config.server}/allUsers`, {
                    method:'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token
                      },
                });
                setUsers(response.data.users);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div >
            
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
            <div className='text-center my-2'>
                <h2 style={{fontWeight:"bolder",textDecoration:"underline"}}>List Of All Students:</h2>
            </div>
            <table className="table table-striped table-hover" >
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>DOB</th>
                        <th>Roll Number</th>
                        <th>Branch</th>
                        <th>Room Alloted</th>
                        <th>Hstel Fee Payment Status</th>
                        <th>Contact Number</th>
                        <th>Email Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.FullName}</td>
                            <td>{formatDate(user.DOB)}</td>
                            <td>{user.RollNumber}</td>
                            <td>{user.Branch}</td>
                            <td>{user.RoomAlloted}</td>
                            <td>{user.HstelFeePaymentStatus}</td>
                            <td>{user.contactNumber}</td>
                            <td>{user.EmailAddress}</td>
                            <td>{user.City}</td>
                            <td>{user.State}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
}

export default AllUser;
