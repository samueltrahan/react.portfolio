import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Pic01 from "../../Assets/pic01.jpg";

export default function Projects({path, image, head, title, paragraph}) {
  return (
    <>
    <a id="projects" target="_blank" rel="noreferrer" className="project-links" href={path}>
      <div className="cards">
        <div className="card-img">
          <img
            alt=""
            className="project-img"
            src={image}
            style={{
              width: "25vw",
              height: "180px",
            }}
          ></img>
        </div>
        <div className="elements">
          <h3 className="title">{title}</h3>
          <h4 className="head">{head}</h4>
          <p className="paragraph">
           {paragraph}
          </p>
        </div>
      </div>
    </a>
    </>
  );
}
