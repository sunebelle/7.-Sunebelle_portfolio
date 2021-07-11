import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <h3> Sunebelle</h3>
      </div>
      <nav className={classes.navbar_right}>
        <ul className={classes.navbar_list}>
          <li className={classes.navbar_el}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.navbar_el}>
            <Link href="#about">About</Link>
          </li>
          <li className={classes.navbar_el}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
