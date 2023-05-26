import React from "react";

import "../../styles/style.css";

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        <div className="projectbg">
          <a
            href="https://bcebel.github.io/WebAPICodeQuiz/"
            rel="noopener"
            target="_blank"
          >
            Web API Code Quiz
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://phudireservations.herokuapp.com/"
            rel="noopener"
            target="_blank"
          >
            Reservation System
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://bcebel.github.io/PasswordGenerator/"
            rel="noopener"
            target="_blank"
          >
            Password Generator
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://bcebel.github.io/Hot10/"
            rel="noopener"
            target="_blank"
          >
            Music Top 10
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://sleepy-caverns-33323.herokuapp.com"
            rel="noopener"
            target="_blank"
          >
            Tech Blog
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://stormy-springs-91791.herokuapp.com"
            rel="noopener"
            target="_blank"
          >
            Progressive Web App
          </a>
        </div>
      </p>
    </div>
  );
}
