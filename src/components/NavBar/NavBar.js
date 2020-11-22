import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar({path}) {
  return (
    <nav className="nav-bar">
      <div className="image-section">
        <a href="/"><img className="image" alt="" src="/images/st.jpg"></img></a>
      </div>
      <div className="nav-links">      
      <Link className="links" to="/templates">Templates</Link>
      <Link className="links" to="/about">About Me</Link>
      </div>
    </nav>
  )
}
