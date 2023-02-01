import React from 'react';
import { useState } from 'react';
import './App.css';
import './mobile.css'

import {Zoom} from "react-reveal"
import NavBar from './components/NavBar'
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SobreMim from './components/SobreMim';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <NavBar />
      <Zoom>
          <Home />
          <SobreMim />
          <Skills />
          <Projects />
          <Footer />
      </Zoom>
    </div>
  );
}

export default App;
