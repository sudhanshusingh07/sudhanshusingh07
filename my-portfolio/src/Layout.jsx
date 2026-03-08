import React from 'react';
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import Footer from "./components/Footer";


function Layout() {
    return (
      <div
        className="w-full h-full min-h-screen p-5 text-gray-800 
    bg-gradient-to-br to-pink-100  from-sky-100 
    dark:from-[#1f2937] dark:via-[#111827] dark:to-[#020617]"
      >
        <Navbar />

        <div className="w-full max-w-2xl mx-auto py-10">
          <Outlet />
        </div>

        <Footer />
      </div>
    );
}

export default Layout;
