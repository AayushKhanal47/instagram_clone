import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "test@example.com" && password === "password") {
      setError("");
      navigate("/");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side for the login form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-6">
        <div className="max-w-sm w-full p-6 border rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-4">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
              alt="Instagram-logo"
              className="h-20 mx-auto"
            />
          </h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
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
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <button className="flex items-center justify-center w-full text-blue-700 p-2 rounded-md mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook logo"
                className="w-5 h-5 mr-2"
              />
              Log in with Facebook
            </button>
          </div>

          <div className="text-center mt-4">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

     
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="flex flex-col space-y-4">
          <img
            src="https://embedsocial.com/wp-content/uploads/2022/11/schedule-post-with-instagram-app.jpg"
            alt="Image 1"
            className="w-3/4 h-auto rounded-lg shadow-lg" 
          />
          <img
            src="https://www.androidauthority.com/wp-content/uploads/2020/08/instagram-suggested-posts.jpg"
            alt="Image 2"
            className="w-3/4 h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;



