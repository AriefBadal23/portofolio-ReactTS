import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className=" mt-10 px-10 " id="about me">
        <h3 className="bg-[#0f172a] sticky top-0 md:ml-150 md: text-2xl">
          About Me
        </h3>
        <p className="font-light md:text-left md:ml-150 text-l ">
          I am a second-year Computer Science student with experience working on
          various projects, both in teams and individually. I have worked with
          C# for the backend, Python and ReactJS for the frontend, and use tools
          like Docker and PostgreSQL.
        </p>
        <br></br>
        <p className="font-light md:text-left md:ml-150 text-l ">
          My passion lies primarily in backend development, where I build
          WebAPIs and ensure that data flows correctly and securely to the
          frontend. I am also interested in cloud development and building
          scalable applications with Cloud Providers. As an aspiring backend
          developer, I aim to use my creativity and knowledge to develop secure,
          scalable, and maintainable solutions. I continuously strive to improve
          and learn, with the goal of helping companies build robust software
          that is future-proof.
        </p>
      </div>
    );
  }
}
