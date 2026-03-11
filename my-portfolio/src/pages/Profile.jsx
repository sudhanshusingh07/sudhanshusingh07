import Link from "../components/ui/Link";
import {
  Github,
  Instagram,
  Linkedin,
  LeetCode,
  GeeksforGeeks,
} from "../data/links";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import React from "react";

function Profile() {
  return (
    <main className="mt-20 flex justify-center">
      <section className="mt-8">
        <table className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          <tbody>
            <tr>
              <td className="py-4 px-6">
                <div className="flex items-center gap-4">
                  <FaGithub className="w-8 h-8 text-black dark:text-white hover:scale-110 transition" />
                  <span>Github</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <Link href={Github}>Visit</Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6">
                <div className="flex items-center gap-4">
                  <FaLinkedin className="w-8 h-8 text-blue-600 hover:scale-110 transition" />
                  <span>LinkedIn</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <Link href={Linkedin}>Visit</Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6">
                <div className="flex items-center gap-4">
                  <SiLeetcode className="w-8 h-8 text-orange-500 hover:scale-110 transition" />
                  <span>LeetCode</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <Link href={LeetCode}>Visit</Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6">
                <div className="flex items-center gap-4">
                  <SiGeeksforgeeks className="w-8 h-8 text-green-600 hover:scale-110 transition" />
                  <span>GeeksforGeeks</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <Link href={GeeksforGeeks}>Visit</Link>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6">
                <div className="flex items-center gap-4">
                  <FaInstagram className="w-8 h-8 text-pink-500 hover:scale-110 transition" />
                  <span>Instagram</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <Link href={Instagram}>Visit</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Profile;
