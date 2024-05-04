import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Cards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Users Cards</h1>
     
      <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4  gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-gray-300 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 ">ID</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.id}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Name</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.name}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Username</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.username}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Email</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.email}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Address</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Phone</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.phone}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Website</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.website}</dd>
                <dt className="text-sm font-medium text-gray-500 ">Company</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.company.name}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
