import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
// Rename the function to start with an uppercase letter
function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the backend when the component mounts
        const fetchUsers = async () => {
            try {
                // Retrieve the token from local storage
                const token = localStorage.getItem('token');

                // Make the request with the token in the Authorization header
                const response = await axios.get(`${config.server}/allUsers`, {
                    headers: {
                        Authorization: token,
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
        <div>
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
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>DOB</th>
                        <th>RollNumber</th>
                        <th>Branch</th>
                        <th>RoomAlloted</th>
                        <th>HstelFeePaymentStatus</th>
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
                            <td>{user.DOB}</td>
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

export default AllUsers;
