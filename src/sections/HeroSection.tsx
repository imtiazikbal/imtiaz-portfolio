import React from "react";

const HeroSection = () => {
    return (
        <section id="hero" className="py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Hi, I'm <span className="text-blue-600 cursor-pointer"><a href="/">MD IKBAL HOSSEN</a></span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Expert in building backend systems, scalable solutions, and delivering
              quality software using modern frameworks and databases like Express.js,
              NestJS, Laravel, Django, MongoDB, MySQL, and PostgreSQL.
            </p>
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1dRUwCfTAHxs60CZ2Bp1sM85biKSNv6Tx/view?usp=sharing"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
              Download Resume
              </a>
              <a
                href="#projects"
                className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 transition duration-300 ml-4"
              >
                See My Work
              </a>
            </div>
          </div>
      
          <div className="flex-1 flex justify-center">
            <img
              src="/imtiaz_passport.jpg"
              alt="Software Engineer"
              className="rounded-lg shadow-lg w-80 sm:w-96"
            />
          </div>
        </div>
      </section>
      
    );
};

export default HeroSection;