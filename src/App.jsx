import './App.css'
import  Navigation  from "./NavBar";
import  Header  from "./Header";
import About from "./About";

import { useEffect } from 'react';

import  ProjectContainer  from "./ProjectContainer";
import Skills from './Skills';
function App() {

  let projects = [
    {  title: "Image Service", url: "https://www.google.com", description: "Created an webservice (API) to resize images in different ratios for the hello-energy platform, which also increased the loading performance. For this I have used Flask for the API, made use of Docker, Postman and wrote unittest with Pytest.", tools: ["Python", "C#"] , image: "imageservice.png"},
    { title: "Album API", url: "https://www.google.com", description: "Album API backend created with ASP.NET Core, Entity Framework Core and ReactJS for the frontend. Made use of Docker to containarize the application and deployed it on AWS.", tools: ["ASP.NET Core", "C#"] , image: "albumapi.png"},
    { title: "TODO API with Blazor UI", url: "https://www.google.com", description: "ASP.NET Core API with session based authentication and frontend created with Blazor", tools: ["ASP.NET Core", "C#", "Blazor"], image:"image.png" }]
    // { title: "Image Service", url: "https://www.google.com", description: "Image service description", tools: ["Python", "C#"] }]
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []); // Alleen bij het laden van de app

  return (
    <div className='dark'>
      <Header name='Arief Badal' role='Aspiring Backend .NET Developer | Skilled in C#, WebAPIs & Cloud' />
      <About />
      <Navigation/>
      <ProjectContainer projects={projects} />
      <Skills/>
    </div>

  )
}

export default App

// Padding tussen navbar en Introduction
// Navbar hiden op mobile en links op desktop.