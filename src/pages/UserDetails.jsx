import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <strong className="text-lg">Email:</strong>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div className="mb-4">
          <strong className="text-lg">Phone:</strong>
          <p className="text-gray-700">{user.phone}</p>
        </div>
        <div className="mb-4">
          <strong className="text-lg">Website:</strong>
          <p className="text-gray-700">{user.website}</p>
        </div>
        <div className="mb-4">
          <strong className="text-lg">Company:</strong>
          <p className="text-gray-700">{user.company.name}</p>
        </div>
        <div className="mb-4">
          <strong className="text-lg">Address:</strong>
          <p className="text-gray-700">
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
        </div>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Back to User List
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
