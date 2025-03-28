import React, { Component } from "react";
import Project from "./Project";
import { IProjectProps } from "./Project";
interface ProjectProps {
  projects: IProjectProps[];
}
interface ProjectState {}

export default class ProjectContainer extends Component<
  ProjectProps,
  ProjectState
> {
  constructor(props: ProjectProps) {
    super(props);
  }
  render() {
    return (
      <div className="mt-10 px-10 md:ml-150" id="projects">
        <h3 className="bg-[#0f172a] sticky top-0 text-2xl">Projects</h3>
        <div className="flex flex-wrap">
          {this.props.projects.map((project) => (
            <Project
              title={project.title}
              description={project.description}
              url={project.url}
              tools={project.tools}
              image={project.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
