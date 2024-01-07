import React, { useEffect, useState } from 'react';
import config from '../config';
import { Link } from 'react-router-dom';

function Notices() {
    const [Notices, setNotices] = useState([]);
useEffect(() => {
    // Fetch hostel details when the component mounts
    const fetchNotices = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${config.server}/readNotices`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setNotices(data.notices);
        } else {
          console.error('Failed to fetch hostel details');
        }
      } catch (error) {
        console.error('Error fetching hostel details:', error);
      }
    };

    fetchNotices();
  }, []); // The empty dependency array ensures that this effect runs once on mount

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };


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
    <div className='text-center my-2'>
      <h2 style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>Notices:</h2>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Date Issued</th>
          <th>Issuer</th>
          <th>Notice For</th>
        </tr>
      </thead>
      <tbody>
        {Notices.map((notice, index) => (
          <tr key={index}>
            <td>{notice.title}</td>
            <td>{notice.content}</td>
            <td>{formatDate(notice.dateIssued)}</td>
            <td>{notice.author}</td>
            <td>{notice.targetAudience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Notices
