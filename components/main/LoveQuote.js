import React, { useEffect } from "react";
import classes from "./LoveQuote.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const LoveQuote = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".quoteFirst", {
      scrollTrigger: {
        trigger: ".lovequotes",
        start: "top center",
        end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "back",
      opacity: 0,
      y: -100,
      scale: 0.9,
      duration: 0.8,
    });
    gsap.from(".img__cloud", {
      scrollTrigger: {
        trigger: ".quoteFirst",
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "back",
      opacity: 0,
      stagger: 0.1,
      y: 160,
      duration: 0.6,
    });
    gsap.from(".quoteSecond", {
      scrollTrigger: {
        trigger: ".img__cloud",
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "back",
      opacity: 0,
      y: -100,
      duration: 0.8,
      scale: 0.9,
    });
  }, []);

  return (
    <div className="lovequotes">
      <div className="quoteFirst">
        <h4 className={classes.handwriting1}>
          "You can't connect the dots looking forward; you can only connect them
          looking backwards. Stay hungry stay foolish"
        </h4>
        <img src="/SteveJobs.png" alt="Steve Jobs" />
      </div>
      <div className="cloud">
        <img className="img__cloud" src="./cloud.png" />
        <img className="img__cloud" src="./cloud2.png" />
        <img className="img__cloud" src="./cloud.png" />
        <img className="img__cloud" src="./cloud2.png" />
        <img className="img__cloud" src="./cloud.png" />
        <img className="img__cloud" src="./cloud2.png" />
      </div>
      <div className="quoteSecond">
        <h4 className={classes.handwriting2}>
          "I don't believe in taking the right decisions. I take decisions and
          then make them right.”
        </h4>
        <img src="/RatanTata.png" alt="Ratan Tata" />
      </div>
    </div>
  );
};

export default LoveQuote;
