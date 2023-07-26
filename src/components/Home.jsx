import React from "react";
import Main from "../assets/img/main.jpg";
import Modal from "./Modal";

const Home = () => {
  return (
    <section class="home" id="home">
      <Modal />
      <div class="home-text">
        <h3>Hello I'm</h3>
        <h1>Chrstphr</h1>
        <h5>
          A Creative Developer <span>From Enugu</span>
        </h5>
        <p>
          I possess an unwavering enthusiasm for crafting stunning user
          interfaces and enhancing the user experience. With an insatiable
          curiosity, they constantly explore <br/>new design trends, innovative
          techniques, and emerging technologies to push the boundaries of
          frontend development.
        </p>
        <div class="social">
          {/* <a href="#"><i class="bx bxl-facebook"></i></a> */}
          <a href="https://twitter.com/Chrstphr_Wlkngs">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/somto-anigbo-0aa229239/">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Chrstphr9">
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <a href="#" class="btn">
          About Me
        </a>
      </div>

      <div class="home-img">
        <img src={Main} alt="" />
      </div>
    </section>
  );
};

export default Home;
