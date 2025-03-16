import React, { Component } from "react";

interface IProjectProps {
  title: string;
  url: string;
  description: string;
  tools: [];
}
interface IProjectState {}

export default class Project extends Component<IProjectProps> {
  constructor(props: IProjectProps) {
    super(props);
  }
  render() {
    return (
      <>
        <p className="text-2xl">{this.props.title}</p>
        <div className="w-full h-fit flex">
          <div className="mx-2 flex-1 ">
            <p>{this.props.description}</p>
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
              alt="project-1"
              width={200}
              height={112.5}
            ></img>
          </div>
        </div>
      </>
    );
  }
}
