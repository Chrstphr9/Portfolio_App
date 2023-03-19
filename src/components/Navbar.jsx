import React from 'react'

const Navbar = () => {
  return (
    <header>
      <a href="#" class="logo"><img src="img/logo.png" /></a>
      <div class="bx bx-menu" id="menu-icon"></div>

      <ul class="navlist">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#" class="top-btn">Download CV</a>
    </header>
  )
}

export default Navbar