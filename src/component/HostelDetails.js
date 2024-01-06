import React, { useEffect, useState } from 'react';
import config from '../config';
import { Link } from 'react-router-dom';
const HostelDetails = () => {
  const [hostelDetails, setHostelDetails] = useState([]);

  useEffect(() => {
    // Fetch hostel details when the component mounts
    const fetchHostelDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${config.server}/hostelDetails`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setHostelDetails(data.hostelDetails);
        } else {
          console.error('Failed to fetch hostel details');
        }
      } catch (error) {
        console.error('Error fetching hostel details:', error);
      }
    };

    fetchHostelDetails();
  }, []); // The empty dependency array ensures that this effect runs once on mount

  // Now you can use the hostelDetails state in your component
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
      <h2 style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>Hostel Details:</h2>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Capacity</th>
          <th>Hostel Type</th>
          <th>Facilities</th>
          <th>Rules And Regulations</th>
          {/* <th>Room details</th> */}
          <th>Updated at</th>
          <th>Contact Information</th>
        </tr>
      </thead>
      <tbody>
        {hostelDetails.map((hostel, index) => (
          <tr key={index}>
            <td>{hostel.hostelName}</td>
            <td>{hostel.hostelAddress}</td>
            <td>{hostel.capacity}</td>
            <td>{hostel.typeOfHostel}</td>
            <td>{hostel.facilities.join(', ')}</td>
            <td>{hostel.rulesAndRegulations}</td>
            {/* <td>
              {hostel.roomDetails.map((room, roomIndex) => (
                <div key={roomIndex}>
                  Room Number: {room.roomNumber}, Capacity: {room.capacity}, Availability: {room.availability.toString()}
                </div>
              ))}
            </td> */}
            <td>{formatDate(hostel.updatedAt)}</td>
            <td>
              Phone: {hostel.contactInformation.phoneNumber}, Email: {hostel.contactInformation.emailAddress}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default HostelDetails;
