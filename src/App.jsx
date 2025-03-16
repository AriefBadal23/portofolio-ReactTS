import './App.css'
import  Navigation  from "./NavBar";
import  Header  from "./Header";
import About from "./About";

import { useEffect } from 'react';

import  ProjectContainer  from "./ProjectContainer";
function App() {

  let projects = [{title: "Image Service", url: "https://www.google.com", description:"Image service description", tools:["Python", "C#"]}]
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []); // Alleen bij het laden van de app

  return (
    <div className='dark'>
      <Navigation/>
      <Header name='Arief Badal' role='Aspiring back-end developer, .NET and Cloud enthusiast' />
      <About />
      <ProjectContainer projects={projects}/>
    </div>

  )
}

export default App

// Padding tussen navbar en Introduction
// Navbar hiden op mobile en links op desktop.