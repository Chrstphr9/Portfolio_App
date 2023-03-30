import React from "react";
import { useRef, useEffect } from "react";
import Logo from '../assets/img/logo.png'

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

  

  return (
    <header ref={headerRef} >
      <a href="#" class="logo">
        <img src={Logo} />
      </a>
      <div class="bx bx-menu" id="menu-icon"></div>

      <ul class="navlist">
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
      <a href="#" class="top-btn">
        Download CV
      </a>
    </header>
  );
};

export default Navbar;
