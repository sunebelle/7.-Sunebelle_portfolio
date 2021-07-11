import classes from "./Courses.module.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Courses = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".title", {
      scrollTrigger: {
        trigger: ".main_courses",
        start: "top center",
        end: "bottom",
        toggleActions: "restart pause reverse pause",
      },
      scale: 2,
      x: -200,
      opacity: 0,
      ease: "back",
      duration: 0.8,
    });
    gsap.from(".text", {
      scrollTrigger: {
        trigger: ".main_courses",
        start: "top center",
        end: "bottom",
        toggleActions: "restart pause reverse pause",
      },
      scale: 2,
      x: -200,
      opacity: 0,
      ease: "back",
      duration: 0.8,
    });
    gsap.from(".courses", {
      scrollTrigger: {
        trigger: ".main_courses",
        start: "top center",
        end: "bottom",
        toggleActions: "restart pause reverse pause",
      },
      scale: 3,
      rotation: 360,
      x: 200,
      opacity: 0,
      stagger: 0.6,
      delay: 1,
      ease: "back",
      duration: 0.8,
    });
  }, []);

  return (
    <div className="main_courses">
      <h3 className="title"> Courses taken...</h3>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={classes.about_courses}>
        <div className="courses">
          <img src="./web_bootcamp.png" />
          <p>
            Become a full-stack web developer with just one course. HTML,CSS,
            Javascript, Node, React, MongoDB and more!
          </p>
        </div>
        <div className="courses">
          <img src="./react.png" />
          <p>
            Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
            Redux, React Routing, Animations, Next.js and way more!
          </p>
        </div>
        <div className="courses">
          <img src="./node.png" />
          <p>
            Master Node by building a real-world RESTful API and web app (with
            authentication, Node.js security, payments & more)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;