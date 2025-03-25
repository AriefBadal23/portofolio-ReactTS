import React, { Component } from "react";

export interface IProjectProps {
  title: string;
  url: string;
  description: string;
  tools: string[];
  image: string;
}
interface IProjectState {}

export default class Project extends Component<IProjectProps> {
  constructor(props: IProjectProps) {
    super(props);
  }
  
  render() {
    return (
      <>
        <p className="text-xl mt-3 mb-3 font-bold">{this.props.title}</p>
        <div className="w-full h-fit flex">
          <div className="flex-row mb-10 flex items-center space-x-4 ">
            <img
              className="flex-shrink-1 hidden md:block"
              src={this.props.image}
              alt="project-1"
              width={150}
              height={200.5}
            />
            <div>
              <p>{this.props.description}</p>
              <div className="rounded-xl text-center h-fit mt-1 flex flex-row m-2 space-x-2">
                {this.props.tools.map((tool) => (
                  <p className="bg-[#112B3A] text-[#59DFCB] rounded-2xl w-fit pl-2 pr-2 ">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
