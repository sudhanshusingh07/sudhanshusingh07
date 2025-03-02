import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { Github } from "../data/links";
import Carousel from "./ui/Carousel";
import React from 'react';

const navs = [
  { id: 1, name: "Home", path: "/", icon: "/house.png", className: "w-5 h-5" },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: "/about.png",
    className: "w-5 h-5",
  },
  {
    id: 3,
    name: "Profile",
    path: "/profile",
    icon: "/code.png",
    className: "w-5 h-5",
  },

  {
    id: 4,
    name: "My Work",
    path: "/profile",
    icon: "/code.png",
    className: "w-5 h-5",
  },
  {
    id: 5,
    name: "Feedback",
    path: "/feedback",
    icon: "/feedback.png",
    className: "w-6 h-6",
  },
  {
    id: 6,
    name: "Github",
    path: Github,
    icon: "/github.png",
    className: "w-5 h-5 dark:invert",
  },
];

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function handleTheme() {
        const htmlElement = document.documentElement.classList;
        if (htmlElement.contains("dark")) {
            htmlElement.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        } else {
            htmlElement.add("dark");
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }

    useEffect(() => {
        const themeState = localStorage.getItem("theme");
        const htmlElement = document.documentElement.classList;
        if (themeState === "dark") {
            htmlElement.add("dark");
            setIsDarkMode(true);
        } else {
            htmlElement.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    return (
        <nav className={`fixed top-0 py-3 sm:py-5 px-5 md:px-0 inset-x-0 w-full mx-auto transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-gradient-to-r from-sky-100 to-pink-100'}`}>
            <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div className="w-full py-1 flex items-center justify-between sm:hidden">
                    <img className="w-10 h-10 rounded-full" src="/logo.jpg" alt="logo" />
                    <Button onClick={handleTheme} className="gap-0 rounded-[30rem] px-2 py-2">
                        <img
                            className="w-5 h-5"
                            src={isDarkMode ? "/sun.png" : "/moon.png"}
                            alt={isDarkMode ? "light-mode" : "dark-mode"}
                        />
                    </Button>
                </div>

                <Carousel>
                    {navs.map((nav) => (
                        <li key={nav.id} className="min-w-fit">
                            <NavLink
                                to={nav.path || '#'}
                                className={({ isActive }) =>
                                    `dark:hover:bg-gray-secondary hover:bg-gray-200 w-fit p-2 rounded-md border dark:border-gray-secondary border-gray-300 text-gray-700 dark:text-gray-300 transition-colors duration-300 flex items-center gap-2 snap-end ${isActive && 'dark:bg-gray-secondary bg-gray-200 dark:text-gray-100 text-gray-600'}`
                                }
                            >
                                <img className={nav.className} src={nav.icon} alt={nav.name} />
                                <p>{nav.name}</p>
                            </NavLink>
                        </li>
                    ))}
                </Carousel>

                <Button onClick={handleTheme} className="gap-0 hidden sm:block w-14 rounded-[30rem] px-2 py-2">
                    <img
                        className="w-5 h-5"
                        src={isDarkMode ? "/sun.png" : "/moon.png"}
                        alt={isDarkMode ? "light-mode" : "dark-mode"}
                    />
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;
