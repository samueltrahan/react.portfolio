import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner-img" alt="" src="/images/samuel.png"></img>
      <h1 className="banner-heading">Welcome, My name is Samuel Trahan</h1>
      <h3 className="banner-heading">I'm a Software Engineer</h3>
      <div className="banner-links-section">
      <a className="banner-links" href="#projects">My Projects</a>
      <a className="banner-links" href="#contact">Contact Me</a>
      </div>
    </div>
  )
}
