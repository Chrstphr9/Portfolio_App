import React from 'react'
import Target from '../assets/img/target.svg'
import Brush from '../assets/img/brush.svg'
import Energy from '../assets/img/energy.svg'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            tenetur incidunt atque fugit impedit molestiae iure.
          </p>
        </div>

        <div class="sub-box">
          <div class="sub-img">
            <img src={Brush} alt="" />
          </div>
          <h3>High Quality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            tenetur incidunt atque fugit impedit molestiae iure.
          </p>
        </div>

        <div class="sub-box">
          <div class="sub-img">
            <img src={Energy} alt="" />
          </div>
          <h3>Awesome Idea</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            tenetur incidunt atque fugit impedit molestiae iure.
          </p>
        </div>
      </div>
    </seciton>
  )
}

export default Services