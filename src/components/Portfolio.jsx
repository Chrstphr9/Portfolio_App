import React from "react";
import Work1 from "../assets/img/work1.png";
import Work2 from "../assets/img/work2.png";
import Work3 from "../assets/img/work3.png";
import Work4 from "../assets/img/work4.png";
import Work5 from "../assets/img/work5.png";
import Work6 from "../assets/img/work6.png";
import Work7 from "../assets/img/work7.png";

const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
      <div class="heading">
        <p>Portfolio</p>
        <h2>
          <span>Latest</span> Project
        </h2>
      </div>
      <div class="portfolio-content">
        <div class="row">
          <img src={Work1} alt="" />
          <div class="layer">
            <h5>Password Generator</h5>
            <p>
              The Password Generator creates strong and unique passwords for
              enhanced online security. It uses random characters, numbers, and
              symbols, customizable to user preferences.
            </p>
            <a href="https://password-generator-chrstphr9.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work2} alt="" />
          <div class="layer">
            <h5>Note App</h5>
            <p>
              The Note App simplifies note-taking with a user-friendly
              interface, categorization options, and support for various
              formats. It offers seamless synchronization and search
              functionality for easy access to important information.
            </p>
            <a href="https://note-app-chrstphr9.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work3} alt="" />
          <div class="layer">
            <h5>Todo App</h5>
            <p>
              The Todo App simplifies task management with an intuitive
              interface, enabling users to create, prioritize, and track their
              to-do items efficiently. With features like reminders and progress
              tracking, it enhances productivity and helps users stay organized.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work4} alt="" />
          <div class="layer">
            <h5>Pseudo Portfolio</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="https://chrs-portfolio.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work5} alt="" />
          <div class="layer">
            <h5>Chat App</h5>
            <p>
              The chat app allows users to register and log in with their
              credentials. Once logged in, users can join chat rooms or create
              their own. The app provides a visually appealing interface where
              users can view and participate in conversations in real-time.
            </p>
            <a href="https://64b684f8e628ad178f1b2c83--chimerical-marshmallow-1e7e58.netlify.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <img src={Work6} alt="" />
          <div class="layer">
            <h5></h5>
            <p></p>
            <a href="https://meta-v-chrstphr9.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <img src={Work7} alt="" />
          <div class="layer">
            <h5>SummaBot</h5>
            <p>
              An AI summarizer that condenses text into concise summaries using
              advanced algorithms, saving time and effort in understanding large
              amounts of information.
            </p>
            <a href="https://64a28cd90e35136f9f3f935e--extraordinary-halva-f0fcde.netlify.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        {/* <div class="row">
          <img src={Work} alt="" />
          <div class="layer">
            <h5></h5>
            <p>
              
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
