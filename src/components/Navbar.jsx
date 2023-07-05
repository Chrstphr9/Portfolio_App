import React from "react";
import { useRef, useEffect, useState } from "react";
import Logo from '../assets/img/logo.png'
import resume from '../assets/img/Resume.pdf'

const Navbar = () => {
  const headerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const header = headerRef.current;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const header = headerRef.current;
    header.classList.toggle("sticky", window.scrollY > 100);}
    // setIsActive(false);

    const handleMenuClick = () => {
      setIsActive(!isActive)
    }
  

  return (
    <header ref={headerRef} >
      <a href="#" class="logo">Chr<span>s</span>tp<span>h</span>r.</a>
      <div id="menu-icon" className={isActive ? 'bx bx-menu': ''} onClick={handleMenuClick} ></div>

      <ul className={`navlist ${isActive ? 'active' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href={resume} download={resume} class="top-btn">
        Download CV
      </a>
    </header>
  );
};

export default Navbar;
