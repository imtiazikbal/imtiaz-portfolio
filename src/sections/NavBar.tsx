import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-600 text-black shadow-md py-4 sticky top-0">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold">MD IKBAL HOSSEN</div>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-300 transition duration-300"
            >
              Projects
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
