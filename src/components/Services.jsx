import React from "react";
import Target from "../assets/img/target.svg";
import Brush from "../assets/img/brush.svg";
import Energy from "../assets/img/energy.svg";

const Services = () => {
  return (
    <seciton class="sub-service">
      <div class="items">
        <div class="sub-box">
          <div class="sub-img">
            <img src={Target} alt="" />
          </div>
          <h3>Pixel Perfect</h3>
          <p>
            I ensures that every element, spacing, typography, and visual aspect
            aligns precisely with the provided design mockup or wireframe.
          </p>
        </div>

        <div class="sub-box">
          <div class="sub-img">
            <img src={Brush} alt="" />
          </div>
          <h3>High Quality</h3>
          <p>
            I demonstrate exceptional attention to detail, clean code practices,
            and adherence to industry standards. I creates well-structured,
            modular, and maintainable code that promotes scalability and ease of
            future development.
          </p>
        </div>

        <div class="sub-box">
          <div class="sub-img">
            <img src={Energy} alt="" />
          </div>
          <h3>Awesome Idea</h3>
          <p>
            They possess a knack for conceptualizing unique and impactful
            solutions that enhance user experiences and push the boundaries of
            frontend technologies.
          </p>
        </div>
      </div>
    </seciton>
  );
};

export default Services;
