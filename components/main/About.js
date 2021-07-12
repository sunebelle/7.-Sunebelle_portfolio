import React, { useEffect, useRef } from "react";
import classes from "./About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  let divRef = useRef(null);
  let textRef = useRef(null);
  let first = useRef(null);
  let second = useRef(null);
  let third = useRef(null);
  let four = useRef(null);

  useEffect(() => {
    gsap.from(textRef, {
      scrollTrigger: {
        trigger: divRef,
        start: "top top",
        end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      x: 400,
      y: 200,
      scale: 2,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(first, {
      scrollTrigger: {
        trigger: textRef,
        start: "top bottom",
        // end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      xPercent: 100,
      duration: 0.8,
    });
    gsap.from(second, {
      scrollTrigger: {
        trigger: second,
        start: "top center",
        // end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      xPercent: -100,
      duration: 0.8,
      // delay: 0.2,
    });
    gsap.from(third, {
      scrollTrigger: {
        trigger: third,
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      xPercent: 100,
      duration: 1,
      // delay: 0.2,
    });
    gsap.from(four, {
      scrollTrigger: {
        trigger: four,
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      xPercent: -100,
      duration: 1,
      // delay: 0.2,
    });
  }, []);
  return (
    <div className={classes.about_intro} id="about" ref={(el) => (divRef = el)}>
      <h2 ref={(el) => (textRef = el)}>Sunebelle</h2>
      <div className={classes.animate_intro}>
        <div className={classes.main_intro} ref={(el) => (first = el)}>
          <img src="/writing.jpg" />
          <div>
            <h3>
              I am a self-taught developer. I started learning programming since
              last Dec. I love Writing
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={classes.main_intro} ref={(el) => (second = el)}>
          <img src="/reading.jpg" />
          <div>
            <h3> I love Reading.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
        </div>
        <div className={classes.main_intro} ref={(el) => (third = el)}>
          <img src="/404.png" />
          <div>
            <h3> I love Coding.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
        </div>
        <div className={classes.main_intro} ref={(el) => (four = el)}>
          <img src="/creating.jpg" />
          <div>
            <h3> And, I love create things...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
