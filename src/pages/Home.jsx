import React from "react";
import { Link } from "react-router-dom";
import Postfeed from "../components/Postfeed";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-10">
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            alt="Instagram-logo"
            className="h-20 w-auto"
          />
        </Link>

        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full py-1 px-4 text-sm focus:outline-none w-1/3"
        />
        <div className="pt-24 px-6">
          <div className="flex justify-between mb-6">
            <img
              src="https://www.androidauthority.com/wp-content/uploads/2020/08/instagram-suggested-posts.jpg"
              alt="Image 1"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://embedsocial.com/wp-content/uploads/2022/11/schedule-post-with-instagram-app.jpg"
              alt="Image 2"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex justify-center mt-6">
            <Postfeed />
          </div>
        </div>
        <div className="flex space-x-6 items-center">
          <Link to="/profile" className="text-blue-500">
            Profile
          </Link>
          <span className="text-gray-600">Notifications</span>
          <span className="text-gray-600">Messages</span>
        </div>
      </nav>
    </div>
  );
};

export default Home;
