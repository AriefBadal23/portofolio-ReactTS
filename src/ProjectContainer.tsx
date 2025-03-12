import React, { Component } from "react";
import Card from "./Card";
export default class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <h1 className="text-4xl text-center" id="projects">
          Projects
        </h1>
        <div className="flex flex-wrap">
          <Card
            title="Project 1"
            url="https://www.google.com"
            description=""
            tools={[]}
          />
          <Card
            title="Project 1"
            url="https://www.google.com"
            description=""
            tools={[]}
          />
          <Card
            title="Project 1"
            url="https://www.google.com"
            description=""
            tools={[]}
          />
        </div>
      </div>
    );
  }
}
