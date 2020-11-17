import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <div  className="project-section">
      <Projects />
      </div>
    </Router>
  )
}
