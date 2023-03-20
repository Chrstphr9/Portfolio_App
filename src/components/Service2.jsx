import React from 'react'
import Anchor from "../assets/img/anchor.svg"
import Physics from "../assets/img/physics.svg"
import Contact from "../assets/img/contact.svg"
import Web from "../assets/img/web.svg"

const Service2 = () => {
  return (
    <section class="service" id="service">
      <div class="heading">
        <h3>Service</h3>
        <h2>What I Do For Clients</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio
          nobis incidunt, laudantium officiis vel.
        </p>
      </div>

      <div class="service-content">
        <div class="rows">
          <div class="s s-one">
            <img src={Anchor} alt="" />
          </div>
          <h3>WEb DeVelOpmEnT</h3>
          <h5>Start From <span>$99</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            maiores ipsum, neque quae quo velit similique perferendis, ullam
            magni dolore dignissimos.
          </p>
        </div>

        <div class="rows">
          <div class="s s-two">
            <img src={Physics} alt="" />
          </div>
          <h3>WEb DeVelOpmEnT</h3>
          <h5>Start From <span>$99</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            maiores ipsum, neque quae quo velit similique perferendis, ullam
            magni dolore dignissimos.
          </p>
        </div>

        <div class="rows">
          <div class="s s-three">
            <img src={Contact} alt="" />
          </div>
          <h3>WEb DeVelOpmEnT</h3>
          <h5>Start From <span>$99</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            maiores ipsum, neque quae quo velit similique perferendis, ullam
            magni dolore dignissimos.
          </p>
        </div>

        <div class="rows">
          <div class="s s-four">
            <img src={Web} alt="" />
          </div>
          <h3>WEb DeVelOpmEnT</h3>
          <h5>Start From <span>$99</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            maiores ipsum, neque quae quo velit similique perferendis, ullam
            magni dolore dignissimos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Service2