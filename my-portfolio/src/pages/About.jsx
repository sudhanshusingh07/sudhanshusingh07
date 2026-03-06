import Link from "../components/ui/Link";
import {
  College,
  CSS,
  Express,
  Git,
  HTML,
  JS,
  Nodejs,
  TailwindCSS,
  Ract,
  Mongodb,
  Rubixe,
  Github,
} from "../data/links";
import React from "react";

function About() {
  return (
    <main className="mt-20">
      <div className="hidden sm:block">
        <img className="w-20 h-20 rounded-full" src="/logo.jpg" alt="logo" />
      </div>

      <section className="mt-8 flex flex-col gap-4 items-start">
        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          I&apos;m Sudhanshu Singh, a Computer Science Engineering graduate from
          <Link href={College}>
            {" "}
            Shivalik College of Engineering, Dehradun{" "}
          </Link>
          (2025). I started my journey as a web developer in 2021, and since
          then I have continuously worked on improving my skills and building
          real-world projects.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          My journey began with the fundamentals of
          <Link href={HTML}> HTML </Link>,<Link href={CSS}> CSS </Link>, and
          <Link href={JS}> JavaScript </Link>, which helped me build a strong
          foundation in frontend development. Over time, I expanded my expertise
          to modern frameworks and libraries such as
          <Link href={Ract}> React </Link> and
          <Link href={TailwindCSS}> Tailwind CSS </Link>. I am passionate about
          building responsive and user-friendly web applications that provide a
          seamless experience across different devices and platforms.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          Alongside frontend development, I have developed strong backend
          development skills using <Link href={Nodejs}> Node.js </Link>,
          <Link href={Express}> Express.js </Link>, and
          <Link href={Mongodb}> MongoDB </Link>. This enables me to design and
          build complete full-stack applications, including REST APIs,
          authentication systems, database management, and server-side logic.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          In January 2026, I started my Web Development Internship at
          <Link href={Rubixe}> Rubixe </Link>, where I am gaining hands-on
          industry experience and working on real-world projects. This
          experience is helping me understand professional development
          workflows, improve problem-solving abilities, and collaborate
          effectively within development teams.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          Throughout my projects, I focus on writing clean, scalable, and
          maintainable code while following modern development best practices. I
          also use <Link href={Git}> Git </Link> and
          <Link href={Github}> GitHub </Link> for version control to manage
          projects efficiently and collaborate with other developers.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          Apart from technical development, I strongly believe in continuous
          learning. I actively explore new technologies, improve my skills
          through practical projects, and stay updated with the latest trends in
          web development.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium leading-relaxed">
          I enjoy building full-stack web applications that solve real-world
          problems and deliver a smooth user experience.
        </p>
      </section>
    </main>
  );
}

export default About;
