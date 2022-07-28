import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import CompetitiveProgramming from "./components/competitiveprogramming/CompetitiveProgramming"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (

    <div className="app">

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>     
        <Projects/>
        <CompetitiveProgramming/>
        <Contact/>
      </div>

    </div>

  );
}

export default App;
