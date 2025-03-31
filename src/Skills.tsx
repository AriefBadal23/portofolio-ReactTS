import React, { Component } from "react";

interface ISkillsProps {
  skills: string[];
}

export default class Skills extends Component<ISkillsProps> {
  constructor(props: ISkillsProps) {
    super(props);
  }
  render() {
    return (
      <div className="mt-10 px-10 md:ml-150 mb-20">
        <h3 className="bg-[#0f172a] sticky top-0 text-2xl" id="skills">
          Technical skills
        </h3>

        <div className="flex flex-wrap md:flex-row w-fit h-fit">
          {this.props.skills.map((skill) => (
            <span className="text-2xl text-amber-50 bg-[#0F9C85]  p-2 mr-2 mt-2 mb-2 rounded-2xl   transition-all duration-300 hover:scale-110">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
