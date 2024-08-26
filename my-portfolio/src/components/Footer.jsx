
import { Github, Instagram, Linkedin} from "../data/links"
import React from 'react';

function Footer() {
    return (
        <div className="p-5 flex flex-col items-center mt-5">
            <p className="dark:text-gray-300 text-gray-800 text-center">
                Made with ❤️ by  <i className="text-org">Sudhanshu Singh</i>
            </p>
            <ul className="dark:text-gray-300 text-gray-800 mt-4 flex items-center gap-4">
                <li className="flex items-center gap-2">
                    <img className="w-5 dark:invert" src="/github.png" alt="github" />
                    <a className="hover:underline" target="_blank" href={Github}>
                        Github
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <img className="w-6" src="/instagram.png" alt="instagram" />
                    <a className="hover:underline" target="_blank" href={Instagram}>
                        Instagram
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <img className="w-7" src="/linkedin.png" alt="linkedin" />
                    <a className="hover:underline" target="_blank" href={Linkedin}>
                        Linkedin
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer