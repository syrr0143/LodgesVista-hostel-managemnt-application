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
