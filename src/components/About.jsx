import React from "react";
import about from "../assets/img/about.jpg";

const About = () => {
  return (
    <section class="about" id="about">
      <div class="about-img">
        <img src={about} alt="" />
      </div>

      <div class="about-text">
        <h3>I'm A Developer</h3>
        <h2>I Can Develop Anything You Want</h2>
        <p>
          I'm a frontend developer well-versed in HTML, CSS, and JavaScript—the
          core technologies of web development. They have a deep understanding
          of semantic markup, responsive design principles, and modern
          JavaScript frameworks, allowing them to craft engaging and interactive
          user interfaces.
        </p>
        <a href="#" class="btn">
          {" "}
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default About;
