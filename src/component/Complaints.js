// ComplaintList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import bcg from '../images/bcg.png'
import { Link } from 'react-router-dom';
const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        // Assuming you have the JWT token stored somewhere (e.g., in localStorage)
        const jwtToken = localStorage.getItem('your_jwt_token_key');

        const response = await axios.get(`${config.server}/readComplaints`, {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjU5OGNiNWJiNzEyYjNjNDU4YTVjMWYwIiwiaWF0IjoxNzA0NTEyNTQyLCJleHAiOjE3MDUxMTczNDJ9.2GOakmWeEBuN2Wkr2J-Qk0uvgXsRqYKphDna6PIXbWo`,
          },
        });

        setComplaints(response.data.complaints);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComplaints();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
   

<div   >
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LodgesVista</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/AllUser">Users</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Complaints</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Notice</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Payments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Profile</a>
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
    <h2 style={{fontWeight:"bolder",textDecoration:"underline"}}>Complaints:</h2>
   
</div>
<table className="table table-striped table-hover" >
    <thead>
        <tr>
      
            <th>Complainant</th>
            <th>Date of Complaint</th>
            <th>Type</th>
            <th>Description</th>
            <th>Enquiry Status</th>
            <th>Admin Response Status</th>
            <th>Response</th>
            <th> Priority</th>
            <th>Feedback from Student</th>
            
        </tr>
    </thead>
    <tbody>
        {complaints.map((complaints, index) => (
            <tr key={index}>
               <td>{complaints.studentID ? complaints.studentID.FullName : complaints.studentName}</td>
                <td>{formatDate(complaints.dateSubmitted)}</td>
                <td>{complaints.complaintType}</td>
                <td>{complaints.description}</td>
                <td>{complaints.studentStatus}</td>
                <td>{complaints.adminStatus}</td>
                <td>{complaints.response}</td>
                <td>{complaints.priority}</td>
                <td>{complaints.feedback}</td>
              
            </tr>
        ))}
    </tbody>
</table>
</div>
  );
};

export default ComplaintList;
