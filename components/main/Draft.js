//https://ezgif.com/video-to-gif

//https://www.kindacode.com/article/how-to-use-font-awesome-5-icons-in-next-js/#:~:text=%20How%20to%20use%20Font%20Awesome%205%20with,in%20pages%20or%20components%20like%20this%3A%20More%20

//https://frontend-digest.com/environment-variables-in-next-js-9a272f0bf655
//https://nextjs.org/docs/basic-features/environment-variables
//https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/
//GSAP uses Document.querySelectorAll(), so it can be one or more CSS selectors separated by commas. This includes attributes and tag names... even custom ones.
//https://www.w3schools.com/CSSref/css3_pr_animation-fill-mode.asp
//https://www.w3schools.com/cssref/css3_pr_transition.asp

<div className={classes.cloud} ref={(el) => (cloudRef = el)}>
  <img className={classes.img__cloud} src="./cloud.png" />
  <img className={classes.img__cloud} src="./cloud2.png" />
  <img className={classes.img__cloud} src="./cloud.png" />
  <img className={classes.img__cloud} src="./cloud2.png" />
  <img className={classes.img__cloud} src="./cloud.png" />
  <img className={classes.img__cloud} src="./cloud2.png" />
</div>;

gsap.to(".b", {
  scrollTrigger: {
    trigger: ".a",
    start: "top 50px",
    endTrigger: ".c",
    end: "bottom 80%",
    markers: true,
    toggleActions: "restart pause reverse pause",
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

let four = useRef(null);
useEffect(() => {
  gsap.from(first, {
    scrollTrigger: {
      trigger: first,
      start: "top center",
      toggleActions: "restart pause reverse pause",
    },
    ease: "power4.out",
    opacity: 0,
    x: 100,
    duration: 1,
  });
}, []);

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
      start: "top center",
      toggleActions: "restart pause reverse pause",
    },
    // ease: "power4.out",
    x: 400,
    y: 200,
    scale: 3,
    duration: 1,
  });
  gsap.from(first, {
    scrollTrigger: {
      trigger: first,
      start: "top center",
      toggleActions: "restart pause reverse pause",
    },
    ease: "power4.out",
    opacity: 0,
    x: 100,
    duration: 1,
  });
  gsap.from(second, {
    scrollTrigger: {
      trigger: second,
      start: "top center",
      toggleActions: "restart pause reverse pause",
    },
    ease: "power4.out",
    opacity: 0,
    x: 100,
    duration: 1,
  });
  gsap.from(third, {
    scrollTrigger: {
      trigger: third,
      start: "top center",
      toggleActions: "restart pause reverse pause",
    },
    ease: "power4.out",
    opacity: 0,
    x: 100,
    duration: 1,
  });
  gsap.from(four, {
    scrollTrigger: {
      trigger: four,
      start: "top center",
      toggleActions: "restart pause reverse pause",
    },
    ease: "power4.out",
    opacity: 0,
    x: 100,
    duration: 1,
  });
}, []);

//https://greensock.com/docs/v3/GSAP/Timeline
//https://greensock.com/docs/v3/Plugins/ScrollTrigger
//https://css-tricks.com/greensock-scrolltrigger/
// https://greensock.com/react
//https://stackblitz.com/edit/gsap-react-timeline-sequence?file=timeline-sequence.js
// https://codesandbox.io/s/greensock-and-scrollmagic-with-react-forked-q2gzg?file=/src/index.js
// https://greensock.com/3-migration/

// ref={(el) => (h2Ref = el)} ref={(el) => (divRef = el)}
// const divRef = useRef(null);
// const h2Ref = useRef(null);

import classes from "./Sarcasm.module.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Sarcasm = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className={classes.sarcasm}>
      <div className={classes.my__strength}>
        <h3>What I enjoy most</h3>
        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </em>
        </p>
        <div className={classes.strength}>
          <img className={classes.item1} src="./dream.png" alt="dream" />
          <img className={classes.item2} src="./lottery.png" alt="lottery" />
          <img className={classes.item3} src="./success.png" alt="success" />
        </div>
      </div>
      <div className={classes.my__weaknesses}>
        <h3>What I do actually</h3>
        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </em>
        </p>
        <div className={classes.strength}>
          <img src="./ticket.png" alt="lottery_ticket" />
          <img src="./emoji_no.png" alt="emoji_no" />
          <img src="./No.png" alt="no" />
        </div>
      </div>
    </div>
  );
};

export default Sarcasm;
