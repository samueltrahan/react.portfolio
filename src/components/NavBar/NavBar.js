import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="image-section">
        <a href="/"><img className="image" alt="" src="/images/st-logo.jpg"></img></a>
      </div>
      <div className="nav-links">
      <a className="links" href="/projects">Projects</a>
      <a className="links" href="/templates">Templates</a>
      <a className="links" href="/about">About</a>
      <a className="links" href="/contact">Contact</a>
      </div>
    </nav>
  )
}
