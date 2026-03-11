import { Github, Instagram, Linkedin } from "../data/links";
import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="p-5 flex flex-col items-center mt-5">
      <p className="dark:text-gray-300 text-gray-800 text-center">
        Made with ❤️ by <i className="text-orange-500">Sudhanshu Singh</i>
      </p>

      <ul className="dark:text-gray-300 text-gray-800 mt-4 flex items-center gap-6">
        <li className="flex items-center gap-2">
          <FaGithub className="w-5 h-5 text-black dark:text-white" />
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={Github}
          >
            Github
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaInstagram className="w-5 h-5 text-pink-500" />
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={Instagram}
          >
            Instagram
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FaLinkedin className="w-5 h-5 text-blue-600" />
          <a
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={Linkedin}
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
