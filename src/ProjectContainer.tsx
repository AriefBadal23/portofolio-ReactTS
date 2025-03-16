import React, { Component } from "react";
import Project from "./Project";
export default class ProjectContainer extends Component {
  render() {
    return (
      <div className="mt-10 px-10">
        <h3 className="bg-[#0f172a] sticky top-0">Projects</h3>
        <div className="flex flex-wrap">
          <Project
            title="Image Service webservice"
            url="https://www.google.com"
            description="Dit project is een innovatieve oplossing gericht op het verbeteren van de gebruikerservaring door gebruik te maken van de nieuwste technologieën."
            tools={[]}
          />
          <Project
            title="Project 1"
            url="https://www.google.com"
            description="Dit project is een innovatieve oplossing gericht op het verbeteren van de gebruikerservaring door gebruik te maken van de nieuwste technologieën."
            tools={[]}
          />
          <Project
            title="Project 1"
            url="https://www.google.com"
            description="Dit project is een innovatieve oplossing gericht op het verbeteren van de gebruikerservaring door gebruik te maken van de nieuwste technologieën."
            tools={[]}
          />
          <Project
            title="Project 1"
            url="https://www.google.com"
            description="Dit project is een innovatieve oplossing gericht op het verbeteren van de gebruikerservaring door gebruik te maken van de nieuwste technologieën."
            tools={[]}
          />
          <Project
            title="Project 1"
            url="https://www.google.com"
            description="Dit project is een innovatieve oplossing gericht op het verbeteren van de gebruikerservaring door gebruik te maken van de nieuwste technologieën."
            tools={[]}
          />
        </div>
      </div>
    );
  }
}
