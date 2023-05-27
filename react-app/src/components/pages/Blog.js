import React from "react";
import quizwars from "./quizwars.png";
import phudi from "./phudi.png";
import pwg from "./pwg.png";
import hot10 from "./hot10.png";
import techblog from "./techblog.png";
import pwa from "./pwa.png";
import weather from "./weather.png";
import "../../styles/style.css";

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        <div className="projectbg">
          <a
            href="https://bcebel.github.io/met/"
            rel="noopener"
            target="_blank"
          >
            <img src={weather} alt="weather" />
          </a>
        </div>

        <div className="projectbg">
          <a
            href="https://bcebel.github.io/WebAPICodeQuiz/"
            rel="noopener"
            target="_blank"
          >
            <img src={quizwars} alt="quizwars" />
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://phudireservations.herokuapp.com/"
            rel="noopener"
            target="_blank"
          >
            <img src={phudi} alt="phudi" />
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://bcebel.github.io/PasswordGenerator/"
            rel="noopener"
            target="_blank"
          >
            <img src={pwg} alt="password generator" />
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://bcebel.github.io/Hot10/"
            rel="noopener"
            target="_blank"
          >
            <img src={hot10} alt="hot10" />
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://sleepy-caverns-33323.herokuapp.com"
            rel="noopener"
            target="_blank"
          >
            <img src={techblog} alt="techblog" />
          </a>
        </div>
        <div className="projectbg">
          <a
            href="https://stormy-springs-91791.herokuapp.com"
            rel="noopener"
            target="_blank"
          >
            <img src={pwa} alt="pwa" />
          </a>
        </div>
      </p>
    </div>
  );
}
