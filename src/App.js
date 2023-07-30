
import './App.css';
import { ThemeContext } from "./Context/theme";
import React from 'react';
import { Header } from './Pages/Header';
import { About } from './Pages/About';
import { Github } from './Pages/Github'
import { Projects } from './Pages/Projects'
import { Contact } from './Pages/Contact'

function App() {
  const [{ themename }] = React.useContext(ThemeContext);


  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <About />
      <Github />
      <section id="#projects">
        <Projects />
      </section>
      <section id="#contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;


