import Link from "../components/ui/Link";
import {
  Github,
  Instagram,
  Linkedin,
  LeetCode,
  GeeksforGeeks,
} from "../data/links";
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
                  <img
                    className="w-10 h-10 dark:invert"
                    src="/github.png"
                    alt="GitHub"
                  />
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
                  <img
                    className="w-10 h-10 dark:invert"
                    src="/linkedin.png"
                    alt="LinkedIn"
                  />
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
                  <img
                    className="w-10 h-10 dark:invert"
                    src="/leetcode.png"
                    alt="LeetCode"
                  />
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
                  <img
                    className="w-10 h-10 dark:invert"
                    src="/geek.jpg"
                    alt="GeeksforGeeks"
                  />
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
                  <img
                    className="w-10 h-10 dark:invert"
                    src="/instagram.png"
                    alt="Instagram"
                  />
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
