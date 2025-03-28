import React, { Component } from "react";
import Project from "./Project";
import ProjectContainer from "./ProjectContainer";
import About from "./About";

export default class Skills extends Component {
  render() {
    return (
      <div className="mt-10 px-10 md:ml-150 mb-20">
        <h3 className="bg-[#0f172a] sticky top-0 text-2xl" id="skills">
          Technical skills
        </h3>

        <div className="flex flex-wrap md:flex-row w-fit h-fit">
          <span className="text-2xl text-amber-50  bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl transition-all duration-300 hover:scale-110">
            Python
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl   transition-all duration-300 hover:scale-110">
            C#
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl  transition-all duration-300 hover:scale-110">
            Postman
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl   transition-all duration-300 hover:scale-110">
            ASP.NET Core
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl   transition-all duration-300 hover:scale-110">
            ReactJS
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2  mr-2 mt-2 mb-2 rounded-2xl  transition-all duration-300 hover:scale-110">
            JavaScript
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl  transition-all duration-300 hover:scale-110">
            PostgresSQL
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl  transition-all duration-300 hover:scale-110">
            Entity Framework Core
          </span>
          <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl   transition-all duration-300 hover:scale-110">
            Docker
          </span>
        </div>
      </div>
    );
  }
}
