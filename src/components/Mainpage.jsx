import React from "react";
import "./mainpage.css";

const Gorex = () => {
  return (
    <div className="imgContainer">
      <div className="main-side">
        <main></main>
        <aside>
          <section>
            <h1>Richard Terrence A. Go</h1>
            <h2 className="title">Front-End Developer</h2>
          </section>
          <section>
            <p>
              Motivated and eager to learn deeper passionate to adapt the trend
              technology stacks.
            </p>
          </section>
          <button>
            <a href="https://github.com/" target="_blank">
              Read More
            </a>
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Gorex;
