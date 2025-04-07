import React, { Component } from "react";

interface IAboutProps {
  about: string;
}

export default class About extends Component<IAboutProps> {
  constructor(props: IAboutProps) {
    super(props);
    console.log(props.about);
  }
  render() {
    return (
      <div className=" mt-10 px-10" id="about">
        <h3 className="bg-[#0f172a] sticky top-0 text-2xl md:ml-150 ">
          About me
        </h3>
        <div className="font-medium md:text-left md:ml-150 text-l md:text-wrap whitespace-normal leading-relaxed">
          <p>
            I'm a second-year Computer Science student experienced in both team
            and individual projects.
          </p>
          <p>
            I specialize in backend development using C#, building secure
            WebAPIs, and ensuring efficient data flow to the frontend.
          </p>
          <br></br>
          <p>
            I also work with <b>Python, ReactJS, Docker and PostgreSQL</b>, and
            have a keen interest in <b>Cloud development</b> and scalable
            applications. I strive to create secure, scalable, and maintainable
            solutions while continuously expanding my skills.
          </p>

          <br></br>
          <p>
            I'm a teamplayer, someone with perseverance and someone eager to
            learn new skills. Currently I'm looking for an internship. Feel free
            to send me an message on LinkedIn and have a look at my GitHub.
          </p>
        </div>
      </div>
    );
  }
}
