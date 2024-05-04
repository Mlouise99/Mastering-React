import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accord = () => {
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
      <h1 className="text-3xl font-bold mb-4 text-center">Users Accordion</h1>
      <div className="accordion" id="accordionExample">
        {users.map(user => (
          <div className="accordion-item" key={user.id}>
            <h2 className="accordion-header" id={`heading${user.id}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${user.id}`} aria-expanded="false" aria-controls={`collapse${user.id}`}>
                {user.name}
              </button>
            </h2>
            <div id={`collapse${user.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${user.id}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <dl>
                  <dt>ID</dt>
                  <dd>{user.id}</dd>
                  <dt>Name</dt>
                  <dd>{user.name}</dd>
                  <dt>Username</dt>
                  <dd>{user.username}</dd>
                  <dt>Email</dt>
                  <dd>{user.email}</dd>
                  <dt>Address</dt>
                  <dd>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</dd>
                  <dt>Phone</dt>
                  <dd>{user.phone}</dd>
                  <dt>Website</dt>
                  <dd>{user.website}</dd>
                  <dt>Company</dt>
                  <dd>{user.company.name}</dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accord;
