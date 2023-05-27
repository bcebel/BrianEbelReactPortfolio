import React from "react";
import "../../styles/style.css";
import headshot from "./brian.jpg";
export default function About() {
  return (
    <div>
      <img src={headshot} alt="Brian Ebel" />
      <p className="aboutText">
        I'm a web developer specializing in front-end and back-end web
        development. My skills include JavaScript, React, APIs, CSS, HTML,
        JQuery, NodeJS, Express, Bootstrap, SQL, Sequelize, MongoDB, Mongoose,
        and GraphQL. I create engaging user interfaces using HTML, CSS, and
        JavaScript frameworks like React and Bootstrap. With expertise in
        Node.js and Express, I build powerful server-side applications. I work
        with databases like SQL, Sequelize, MongoDB, and Mongoose. Additionally,
        I integrate APIs for dynamic content. I stay updated with industry
        trends to deliver efficient and scalable solutions. I'm a team player
        and a problem solver. I'm passionate about learning new technologies and
        applying them to real-world projects. I'm currently seeking a full-time
        position as a web developer.
      </p>
    </div>
  );
}
