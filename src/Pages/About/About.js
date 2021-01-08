import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about">
      <h1 className="about-heading">About Me</h1>
      <h3>Hi, My name is Samuel.  I was born and raised in Louisiana, and 6 months ago I decided to transition careers and become a Web Developer.  Over the past 6 months I've picked up some very valuable skills.
      </h3>
      <ul className="skills"><h3>Proficient Skills:</h3>
        <li className="skill">React</li>
        <li className="skill">JavaScript</li>
        <li className="skill">HTML</li>
        <li className="skill">CSS</li>
        <li className="skill">Gatsby</li>
        <li className="skill">GIT</li>
        <li className="skill">Node.js</li>
        <li className="skill">MongoDB</li>
      </ul>
      <ul className="experience"><h3>Experienced Skills:</h3>
        <li className="skill">Redux</li>
        <li className="skill">Python</li>
        <li className="skill">Django</li>
        <li className="skill">Sass</li>
        <li className="skill">AWS</li>
        <li className="skill">React Native</li>
      </ul>
      <h3> I recently started a company called Cinque Web Development.  We design great functional and user friendly apps.  Driven by an eye for design, we truly focus on getting the best looking application, and are constantly pushing the envelop when it comes to project ideas. 
        <br />
        Check out our work here and any support would be greatly appreciated.
        <br/>
        <a className="cinque-links" target="_blank" rel="noreferrer" href="https://github.com/Cinque-Web-Development"><i className="fab fa-github fa-2x"></i></a>
        <a className="cinque-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/cinque-web-dev"><i className="fab fa-linkedin fa-2x"></i></a>
        <a className="cinque-links" target="_blank" rel="noreferrer" href="https://twitter.com/cinquewebdev"><i className="fab fa-twitter fa-2x"></i></a>
      </h3>
    </div>
  )
}
