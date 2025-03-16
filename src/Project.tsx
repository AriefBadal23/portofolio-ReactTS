import React, { Component } from "react";

export interface IProjectProps {
  title: string;
  url: string;
  description: string;
  tools: string[];
}
interface IProjectState {}

export default class Project extends Component<IProjectProps> {
  constructor(props: IProjectProps) {
    super(props);
  }
  render() {
    return (
      <>
        <p className="text-xl  font-bold">{this.props.title}</p>
        <div className="w-full h-fit flex]">
          <div className="flex-1 mb-10 ">
            <p>{this.props.description}</p>
            <img
              className="mt-5"
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
              alt="project-1"
              width={200}
              height={112.5}
            ></img>
            <div className="rounded-xl  text-center h-fit mt-1 flex flex-row  m-2 space-x-5">
              {this.props.tools.map((tool) => (
                <p className="bg-[#112B3A] text-[#59DFCB] rounded-2xl w-[60px] mt-2">
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
