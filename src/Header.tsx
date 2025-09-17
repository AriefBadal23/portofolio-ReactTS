import gsap from "gsap";
import React, { Component } from "react";
import SplitType from "split-type";

interface IHeaderProps {
  role: string;
  name: string;
  social: {
    linkedin: string;
    github: string;
  };
}
interface IHeaderState {}

export default class Header extends Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  componentDidMount() {
    // do this for each time the page is loaded for the first time.
    let text = new SplitType("#name", { types: "chars" });

    // Select all characters
    let characters = document.querySelectorAll(".char");

    // Start the typing effect animation
    gsap.set(".char", { opacity: 0, y: 0 });

    characters.forEach((char, i) => {
      gsap.to(char, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        delay: i * 0.1, // Add a delay between each character's animation for the typing effect
        ease: "none", // No easing
      });
    });
  }
  render() {
    const { name, social, role } = this.props;
    return (
      <div className="mt-10 px-10 py-6 md:fixed left-0">
        <h1 id="name" className="py-2 text-2xl md:text-4xl ">
          Hi, I'm Arief Badal
        </h1>
        <h2 className="my-0 text-[#0F9C85] text-2xl md:text-4xl">
          a Software Developer
        </h2>
        <p className="py-2 font-light md:text-wrap">{role}</p>

        <div className=" flex px-3 py-2 space-x-4 p-8">
          <a href="https://github.com/AriefBadal23" target="_blank">
            <div className="bg-black w-fit h-fit p-1 rounded-lg shadow-md inline-block">
              <img src="github-mark-white.png" width={30} height={30} />
            </div>
          </a>

          <a href="https://nl.linkedin.com/in/arief-badal" target="_blank">
            <div className="bg-white w-fit h-fit p-1 rounded-lg shadow-md inline-block">
              <img src="linkedin2.png" width={33} height={30} alt="LinkedIn" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
