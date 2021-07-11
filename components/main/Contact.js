import classes from "./Contact.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    gsap.from(".contact", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
        toggleActions: "restart pause reverse pause",
      },
      yPercent: -160,
      scale: 0.5,
      opacity: 0,
      ease: "power4.out",
      delay: 0.2,
      duration: 1,
    });
  }, []);
  const sendEmail = async (enteredValue) => {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(enteredValue),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(data);
    router.push("/thankyou");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleContact = (e) => {
    e.preventDefault();
    // console.log(contact);
    sendEmail(contact);
    setContact({
      name: "",
      email: "",
      date: "",
      message: "",
    });
  };
  return (
    <div id="contact" className="contact">
      <div className={classes.contact_form}>
        <form onSubmit={handleContact}>
          <input
            type="text"
            name="name"
            placeholder="your name"
            required
            value={contact.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            required
            value={contact.email}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            // defaultValue="2021-06-30"
            required
            value={contact.date}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="message"
            rows="3"
            placeholder="message"
            required
            value={contact.message}
            onChange={handleChange}
          />
          <div className={classes.btn_send}>
            <button className={classes.btn} type="submit">
              Send
            </button>
            <span>
              <a href="mailto:sunebellee@gmail.com">
                Or email me at: sunebellee@gmail.com
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
//onfocus="(this.type='date')"
