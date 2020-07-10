import React, { useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';
import Profiles from './components/Profiles/Profiles';
import Contact from './components/Contacts/Contact';
import './App.css';

function App() {
  const skillsRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const profilesRef = useRef();
  const contactRef = useRef();
  // const resumeRef = useRef();
  return (
    <div className="App">
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        profilesRef={profilesRef}
        contactRef={contactRef}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Profiles profilesRef={profilesRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
