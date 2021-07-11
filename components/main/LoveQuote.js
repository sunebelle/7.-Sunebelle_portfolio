import React, { useEffect, useRef } from "react";
import classes from "./LoveQuote.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const LoveQuote = () => {
  gsap.registerPlugin(ScrollTrigger);
  let quoteRef = useRef(null);
  let quote1 = useRef(null);
  let quote2 = useRef(null);
  useEffect(() => {
    gsap.from(quote1, {
      scrollTrigger: {
        trigger: quoteRef,
        start: "top center",
        end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "back",
      opacity: 0,
      y: -100,
      scale: 0.9,
      // duration: 1,
    });
    gsap.from(".img__cloud", {
      scrollTrigger: {
        trigger: quote1,
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      ease: "back",
      opacity: 0,
      stagger: 0.1,
      y: 160,
      duration: 0.8,
    });
    gsap.from(quote2, {
      scrollTrigger: {
        trigger: quote2,
        start: "top center",
        end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      ease: "back",
      opacity: 0,
      y: -100,
      // duration: 1,
    });
  }, []);

  return (
    <div className={classes.lovequotes} ref={(el) => (quoteRef = el)}>
      <div className={classes.quoteFirst} ref={(el) => (quote1 = el)}>
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
      <div className={classes.quoteSecond} ref={(el) => (quote2 = el)}>
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
