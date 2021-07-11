import React from "react";
import classes from "./Main.module.css";
import TopHome from "../main/TopHome";
import ProjectShowcase from "../main/ProjectShowcase";
import About from "../main/About";
import Courses from "../main/Courses";
import LoveQuote from "../main/LoveQuote";
import Sarcasm from "../main/Sarcasm";
import Contact from "../main/Contact";
import Thankyou from "../main/Thankyou";

const Main = () => {
  return (
    <div className={classes.main_home}>
      <TopHome />
      <LoveQuote />
      <About />
      <Sarcasm />
      <Courses />
      <ProjectShowcase />
      <Contact />
      <Thankyou />
    </div>
  );
};

export default Main;
