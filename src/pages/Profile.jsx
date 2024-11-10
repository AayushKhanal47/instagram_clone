
import React from 'react';
import Postfeed from '../components/Postfeed';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6">
      <div className="flex items-center space-x-6">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="w-24 h-24 rounded-full border p-1"
        />
        <div>
          <h2 className="text-2xl font-bold">User Name</h2>
          <p className="text-gray-600">This is my bio!</p>
        </div>
      </div>


      <h3 className="text-xl font-semibold mt-6">Posts</h3>
      <Postfeed />
    </div>
  );
};

export default Profile;

