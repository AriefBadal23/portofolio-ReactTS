import React from "react";
import "./main.css";







class NavBar extends React.Component {
  render() {
    return (
      <header className="bg-white fixed top-0 w-full shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="md:hidden flex items-center">
              <button className="text-gray-800 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <a href="#" className="text-2xl font-bold text-gray-800">
              Arief Badal
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:tex-blue-600">
                About
              </a>
              <a href="#" className="text-gray-800 hover:tex-blue-600">
                Projects
              </a>
              <a href="#" className="text-gray-800 hover:tex-blue-600">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
