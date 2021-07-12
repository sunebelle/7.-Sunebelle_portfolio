// import classes from "./ProjectShowcase.module.css";
import Card from "../UI/Card";
import projects from "./data";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProjectShowcase = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".project_main", {
      scrollTrigger: {
        trigger: ".project_main",
        start: "top  center",
        end: "bottom 100%",
        toggleActions: "restart pause reverse pause",
      },
      scale: 3,
      y: 200,
      opacity: 0,
      stagger: 0.4,
      ease: "back",
      duration: 2,
    });
  }, []);
  return (
    <div className="project_main">
      {projects.map((project) => (
        <Card key={project.id} item={project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
