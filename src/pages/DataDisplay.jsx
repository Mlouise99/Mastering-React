import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DataDisplay = () => {
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
      <h1 className="text-3xl font-bold mb-4 text-center">Users Table</h1>
      <div className="flex space-x-4">
      <Link to='/card' className='px-6 py-3 rounded-full bg-slate-400 text-black hover:bg-gray-600 hover:text-whitet duration-300'>Cards</Link>
      <Link to='/accord' className='px-6 py-3 rounded-full bg-red-400 text-black hover:bg-red-600 hover:text-white  duration-300'>Accordion</Link>
    </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className=" font-medium text-gray-500 uppercase">ID</th>
              <th className=" font-medium text-gray-500 uppercase ">Name</th>
              <th className="  font-medium text-gray-500 uppercase ">Username</th>
              <th className="  font-medium text-gray-500 uppercase ">Email</th>
              <th className=" font-medium text-gray-500 uppercase ">Address</th>
              <th className=" font-medium text-gray-500 uppercase ">Phone</th>
              <th className=" font-medium text-gray-500 uppercase ">Website</th>
              <th className=" font-medium text-gray-500 uppercase ">Company</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.website}</td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-400">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataDisplay;


