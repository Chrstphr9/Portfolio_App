import React from 'react'
import Main from '../src/assets/img/main.png'

const Home = () => {

    
  return (
    <section class="home" id="home">
      <div class="home-text">
        <h3>Hello I'm</h3>
        <h1>Chrstphr</h1>
        <h5>A Creative Developer <span>From Enugu</span></h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          nostrum quam <br />
          facilis corporis ab exercitationem?
        </p>
        <div class="social">
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-twitter"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
          <a href="#"><i class="bx bxl-behance"></i></a>
        </div>
        <a href="#" class="btn">About Me</a>
      </div>

      <div class="home-img">
        <img src={Main} alt="" />
      </div>
    </section>
  )
}

export default Home