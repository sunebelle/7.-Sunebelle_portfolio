import React from "react";
import classes from "./TopHome.module.css";

const TopHome = () => {
  return (
    <div className={classes.grid_container}>
      <div className={classes.item1}>
        <h2>
          If you have a dream, work for it.
          <span className={classes.highlighted}> believe in miracles.</span>
          Because everything is possible.
        </h2>
      </div>
      <div className={classes.item2}>
        <img src="/top_home.jpg" />
      </div>
    </div>
  );
};

export default TopHome;
