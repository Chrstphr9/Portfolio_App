import React from "react";
import Work1 from "../assets/img/work1.jpg";
import Work2 from "../assets/img/work2.jpg";
import Work3 from "../assets/img/work3.jpg";
import Work4 from "../assets/img/work4.jpg";
import Work5 from "../assets/img/work5.jpg";
import Work6 from "../assets/img/work6.jpg";

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
            <h5>Visual Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work2} alt="" />
          <div class="layer">
            <h5>Visual Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work3} alt="" />
          <div class="layer">
            <h5>Visual Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work4} alt="" />
          <div class="layer">
            <h5>Visual Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work5} alt="" />
          <div class="layer">
            <h5>Visual Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work6} alt="" />
            <div class="layer">
            <h5>Visual Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              nostrum rem, doloribus neque atque hic.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
