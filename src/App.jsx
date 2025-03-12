import './App.css'
import  NavBar  from "./NavBar";
import  Header  from "./Header";
import  About  from "./About";
import  ProjectContainer  from "./ProjectContainer";
function App() {

  return (
    <>
      <NavBar />
      <Header name='Arief Badal' role='Software Developer' />
      <About />
      <ProjectContainer/>

    </>
  )
}

export default App
