import React, { Component } from "react";

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
  constructor(props) {
    super(props);
  }
  render() {
    const { name, social, role } = this.props;
    return (
      <div>
        <div className="pt-20 text-center">
          <h1>
            <span className="text-gray-700 font-extrabold text-5xl">
              Hi, I am{" "}
            </span>
            <span className="text-[#2978b5] font-extrabold text-5xl">
              {name}.
            </span>
          </h1>
          <h2 className="text-4xl p-6">A {role}.</h2>
        </div>
      </div>
    );
  }
}
