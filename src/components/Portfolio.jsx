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
        {/* <div class="row">
          <img src={Work1} alt="" />
          <div class="layer">
            <h5>Password Generator</h5>
            
            <a href="https://password-generator-chrstphr9.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work2} alt="" />
          <div class="layer">
            <h5>Note App</h5>
           
            <a href="https://note-app-chrstphr9.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work3} alt="" />
          <div class="layer">
            <h5>Todo App</h5>
            
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work4} alt="" />
          <div class="layer">
            <h5>Pseudo Portfolio</h5>
           
            <a href="https://chrs-portfolio.vercel.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div class="row">
          <img src={Work5} alt="" />
          <div class="layer">
            <h5>Chat App</h5>
            
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
           
            <a href="https://64a28cd90e35136f9f3f935e--extraordinary-halva-f0fcde.netlify.app/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div> */}
        <div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src={Work1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
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
