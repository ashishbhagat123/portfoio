 
import './App.css';
import React, { useEffect, useState } from "react"
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Skills  from './Components/Skills';
// import Projects from './Components/Projects'
import Contect from './Components/Contect' 
import Experience from './Components/Experience';
import Education from './Components/Education';
import About from './Components/About';
import Cursor from './Components/Cursor';

function App() { 
  
  const [changTheme, setChangTheme] = useState(false)

  useEffect(()=>{

  },[changTheme]) 
 
 
  return (
    <div className="App "  style={changTheme ?{background:'black',color:'gray'}: {background:'#eee',color:'black'}}  >
      <Cursor />
      <Navbar theme={setChangTheme}/>  
      <Home theme={changTheme} />
      <About theme={changTheme} />
      <Education theme={changTheme} />
      <Experience theme={changTheme}/> 
      {/* <Skills /> */}
      <Contect theme={changTheme} />
    </div>
  );
}

export default App;
