import './App.css'
import  Navigation  from "./NavBar";
import  Header  from "./Header";
import About from "./About";
import { useEffect } from 'react';

import  ProjectContainer  from "./ProjectContainer";
import Skills from './Skills';
import { portoflio} from './portofolio'

function App() {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []); // Alleen bij het laden van de app

  return (
    <div className='dark'>
      <Header name='Arief Badal' role='Aspiring Backend .NET Developer | Skilled in C#, WebAPIs & Cloud' />
      <About about={portoflio.about} />
      <Navigation/>
      <ProjectContainer projects={portoflio.projects} />
      <Skills skills={portoflio.skills}/>
    </div>

  )
}

export default App
