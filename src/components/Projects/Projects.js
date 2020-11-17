import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Pic01 from "../../Assets/pic01.jpg";

export default function Projects() {
  return (
    <Link className="project-links" to="/">
      <div className="cards">
        <div className="card-img">
          <img
            alt=""
            className="project-img"
            src={Pic01}
            style={{
              width: "37vw",
              height: "180px",
              borderRadius: "10px 10px 0 0",
            }}
          ></img>
        </div>
        <div className="elements">
          <h4 className="head">Head</h4>
          <h3 className="title">Title</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            perspiciatis pariatur alias at, in officiis perferendis tempora ex
            iure, harum eligendi esse aliquam et hic laboriosam maiores eveniet
            laborum quam?
          </p>
        </div>
      </div>
    </Link>
  );
}
