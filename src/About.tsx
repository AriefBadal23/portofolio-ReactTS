import React, { Component } from "react";

interface IAboutProps {
  about: string;
}

export default class About extends Component<IAboutProps> {
  constructor(props: IAboutProps) {
    super(props);
  }
  render() {
    return (
      <div className=" mt-10 px-10" id="about me">
        <h3 className="bg-[#0f172a] sticky top-0 text-2xl md:ml-150 ">
          About Me
        </h3>
        <p className="font-light md:text-left md:ml-150 text-l ">
          {this.props.about}
        </p>
      </div>
    );
  }
}
