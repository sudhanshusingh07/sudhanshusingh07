import React from "react";

function Loader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {/* Loader */}
      <img className="w-20 h-20" src="/main-loader.gif" alt="loader-jcb" />
      <h1 className="mt-4 text-gray-700 dark:text-gray-500 text-lg font-bold">
        Please Wait...
      </h1>

      {/* Card */}
      <div className="mt-8 w-96 p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="mt-4 text-xl font-semibold">William Rocheald</h2>
        <p className="text-gray-500">UI Developer</p>
        <p className="mt-2 text-gray-600">
          Whatever tattooed stumptown art party sriracha gentrify hashtag
          intelligentsia readymade schlitz brooklyn disrupt.
        </p>
        {/* Social Icons */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Loader;