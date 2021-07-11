import React from "react";
import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faKissWinkHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";


const Card = ({ item }) => {
  const { title, img, description, tags } = item;
  return (
    <div className={classes.card}>
      <h3> {title}</h3>
      <div className={classes.card_img}>
        <img src={img} />
      </div>
      <small className={classes.tags}> {tags.map((tag) => ` #${tag}`)}</small>
      <small className={classes.description}> {description} </small>
      <div className={classes.icon}>
        <small className={classes.smallIcon}>
          <FontAwesomeIcon icon={faKissWinkHeart} />
        </small>
        <small className={classes.smallIcon}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </small>
        <small className={classes.smallIcon}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </small>
      </div>
    </div>
  );
};

export default Card;
