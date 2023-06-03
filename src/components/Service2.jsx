import React from "react";
import Anchor from "../assets/img/anchor.svg";
import Physics from "../assets/img/physics.svg";
import Contact from "../assets/img/contact.svg";
import Web from "../assets/img/web.svg";

const Service2 = () => {
  return (
    <section class="service" id="service">
      <div class="heading">
        <h3>Service</h3>
        <h2>What I Do For Clients</h2>
        <p>
          Services offered: website development, e-commerce solutions,
          maintenance, SEO, hosting, performance optimization, custom
          applications.
        </p>
      </div>

      <div class="service-content">
        <div class="rows">
          <div class="s s-one">
            <img src={Anchor} alt="" />
          </div>
          <h3>WEb DeVelOpmEnT</h3>
          <h5>
            Start From <span>####</span>
          </h5>
          <p>
            I can create custom websites tailored to the client's specific
            requirements. This involves designing and implementing the user
            interface, integrating functionality, and ensuring a smooth user
            experience. You can work with various technologies, such as HTML,
            CSS, JavaScript, and frameworks like React or Angular.
          </p>
        </div>

        <div class="rows">
          <div class="s s-two">
            <img src={Physics} alt="" />
          </div>
          <h3>ResPonsIve DesIgN</h3>
          <h5>
            Start From <span>####</span>
          </h5>
          <p>
            Develop websites that are responsive and adapt to different screen
            sizes and devices. Ensuring a seamless experience across desktop,
            mobile, and tablet devices is crucial in today's mobile-first world.
          </p>
        </div>

        <div class="rows">
          <div class="s s-three">
            <img src={Contact} alt="" />
          </div>
          <h3>E-Commerce SoLutIon</h3>
          <h5>
            Start From <span>####</span>
          </h5>
          <p>
            Build online stores and integrate e-commerce platforms to enable
            clients to sell their products or services online. This involves
            implementing secure payment gateways, managing inventory, and
            ensuring a smooth checkout process.
          </p>
        </div>

        <div class="rows">
          <div class="s s-four">
            <img src={Web} alt="" />
          </div>
          <h3>WEb MaiNteNanCe And SuppOrt</h3>
          <h5>
            Start From <span>####</span>
          </h5>
          <p>
            Offer ongoing support and maintenance services to ensure the
            client's website remains secure, up-to-date, and optimized for
            performance. This may include regular backups, security updates, bug
            fixes, and technical troubleshooting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service2;
