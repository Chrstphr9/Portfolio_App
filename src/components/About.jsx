import React from 'react'
import about from '../assets/img/about.jpg'

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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
        blanditiis tenetur nisi quibusdam omnis, iusto modi voluptate quae
        laboriosam magnam accusamus repellendus autem? Nisi culpa corporis
        tempora asperiores? At molestiae tempora pariatur cumque, vel quisquam
        esse nulla ab distinctio sint omnis, expedita asperiores eos,
        perferendis iusto ut sequi eum minus?
      </p>
      <a href="#" class="btn"> Hire Me</a>
    </div>
  </section>
  )
}

export default About