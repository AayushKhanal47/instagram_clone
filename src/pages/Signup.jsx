
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();


    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }


    setError('');
    navigate('/login'); 
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Choose a username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Choose a password"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md mt-4">Sign Up</button>
      </form>
      <div className="text-center mt-4">
        <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
