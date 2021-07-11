// import classes from "./Sarcasm.module.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Sarcasm = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".my__strength h3", {
      scrollTrigger: {
        trigger: ".sarcasm",
        start: "top top",
        end: "bottom",
        toggleActions: "restart pause reverse pause",
      },
      scale: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      // duration: 0.8,
    });
    gsap.from(".my__strength p", {
      scrollTrigger: {
        trigger: ".sarcasm",
        start: "top top",
        toggleActions: "restart pause reverse pause",
      },
      scale: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      // duration: 0.8,
    });
    gsap.from(".item1", {
      scrollTrigger: {
        trigger: ".my__strength",
        start: "top 20px",
        toggleActions: "restart pause reverse pause",
      },
      scale: 3,
      y: 160,
      opacity: 0,
      ease: "back",
      stagger: 0.3,
      duration: 0.8,
    });
    gsap.from(".my__weaknesses h3", {
      scrollTrigger: {
        trigger: ".my__weaknesses h3",
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      scale: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      // duration: 0.8,
    });
    gsap.from(".my__weaknesses p", {
      scrollTrigger: {
        trigger: ".my__weaknesses p",
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      scale: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.8,
    });
    gsap.from(".item2", {
      scrollTrigger: {
        trigger: ".item2",
        start: "top 20px",
        toggleActions: "restart pause reverse pause",
      },
      scale: 3,
      y: 160,
      opacity: 0,
      ease: "back",
      stagger: 0.3,
      // duration: 0.8,
    });
  }, []);

  return (
    <div className="sarcasm">
      <div className="my__strength">
        <h3>What I enjoy most</h3>
        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </em>
        </p>
        <div className="strength">
          <img className="item1" src="./dream.png" alt="dream" />
          <img className="item1" src="./lottery.png" alt="lottery" />
          <img className="item1" src="./success.png" alt="success" />
        </div>
      </div>
      <div className="my__weaknesses">
        <h3>What I do actually</h3>
        <p>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </em>
        </p>
        <div className="strength">
          <img className="item2" src="./ticket.png" alt="lottery_ticket" />
          <img className="item2" src="./emoji_no.png" alt="emoji_no" />
          <img className="item2" src="./No.png" alt="no" />
        </div>
      </div>
    </div>
  );
};

export default Sarcasm;
