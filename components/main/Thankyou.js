import React from "react";
import { useState } from "react";
import classes from "./Thankyou.module.css";

const Thankyou = ({ message }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.thanks}>
        <h2> {!message ? "Thank you" : "Thank you for your email"}</h2>
        {message && <span>{message} </span>}
      </div>
      <div className={classes.footer__animation}>
        <div className={classes.heart}>
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
          <img src="./heart.png" alt="heart" />
        </div>
        <img className={classes.lovely_img} src="./lovely.png" alt="emoji_lovelyface" />
      </div>
      <h6 className={classes.sunebelle}>
        This project is created with Nextjs, by Sunebelle@2021.{" "}
      </h6>
    </div>
  );
};

export default Thankyou;
