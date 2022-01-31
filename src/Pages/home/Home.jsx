import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { interaction } from "../../components/button";
import HomeButtons from "../../components/bottomNav";
import "../../components/button.scss";

export default function Home() {
  useEffect(() => {
    interaction();
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease-in-sine", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text" data-aos="flip-left">
          <div className="home-text-div">
            <span id="span">T</span>
            <span id="span">E</span>
            <span id="span">C</span>
            <span id="span">H</span>
            <span id="span">S</span>
            <span id="span">P</span>
            <span id="span">A</span>
            <span id="span">R</span>
            <span id="span">D</span>
            <span id="span">H</span>
            <span id="span">A</span>
          </div>
        </div>

        <div className="component">
          <HomeButtons></HomeButtons>
        </div>
      </div>
      <div className="login">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        LOGIN
      </div>
      {/* <div className="footer">
        <p></p>
      </div> */}
    </div>
  );
}
