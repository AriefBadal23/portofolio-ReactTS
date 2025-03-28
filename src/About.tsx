import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className=" mt-10 px-10 " id="about me">
        <h3 className="bg-[#0f172a] sticky top-0 text-2xl md:ml-150 ">
          About Me
        </h3>
        <p className="font-light md:text-left md:ml-150 text-l ">
          I’m a second-year Computer Science student experienced in both team
          and individual projects. I specialize in backend development using C#,
          building secure WebAPIs, and ensuring efficient data flow to the
          frontend. I also work with Python, ReactJS, Docker, and PostgreSQL,
          and have a keen interest in cloud development and scalable
          applications. I strive to create secure, scalable, and maintainable
          solutions while continuously expanding my skills.
        </p>
      </div>
    );
  }
}
