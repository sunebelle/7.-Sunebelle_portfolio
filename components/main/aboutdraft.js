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
      scale: 3,
      opacity: 0,
      duration: 1,
    });
    gsap.from(first, {
      scrollTrigger: {
        trigger: divRef,
        start: "top top",
        // end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      x: 100,
      duration: 1,
    });
    gsap.from(second, {
      scrollTrigger: {
        trigger: first,
        start: "top center",
        // end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      x: 100,
      duration: 1,
    });
    gsap.from(third, {
      scrollTrigger: {
        trigger: second,
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      xPercent: 100,
      duration: 1,
    });
    gsap.from(four, {
      scrollTrigger: {
        trigger: third,
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "power4.out",
      opacity: 0,
      xPercent: -100,
      duration: 1,
    });
  }, []);
  return (
    <div className={classes.about_intro} id="about" ref={(el) => (divRef = el)}>
      <h2 ref={(el) => (textRef = el)}>Sunebelle</h2>
      <div className={classes.animate_intro}>
        <div className={classes.main_intro} ref={(el) => (first = el)}>
          <h3>
            I am a self-taught developer. I started learning programming since
            last Dec. I love Writing
          </h3>
          <img src="/writing.jpg" />
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
          <div>
            <h3> I love Coding.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
          <img src="/404.png" />
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
