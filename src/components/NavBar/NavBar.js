import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="image-section">
        <a href="/"><img className="image" alt="" src="/images/st.jpg"></img></a>
      </div>
      <div className="nav-links">
      <a className="links" href="#projects">Projects</a>
      <Link className="links" to="/templates">Templates</Link>
      <Link className="links" to="/about">About</Link>
      <a className="links" href="#contact">Contact</a>
      </div>
    </nav>
  )
}
