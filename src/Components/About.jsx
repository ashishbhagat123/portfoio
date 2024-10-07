import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div class="about" style={{ overflow: "hidden" }}>
      <p class="display-3 fw-semibold mt-5" data-aos="fade-up">
        About Me
      </p>

      <div
        class="col-12 row align-items-center m-0"
        style={{ margin: "auto", padding: "50px 80px" }}
      >
        <p class='fs-5'>
          A passionate frontend web developer with 3+ years of hands-on
          experience in crafting intuitive and engaging user interfaces.  I
          specialize in building responsive web applications that combine the
          power of React and Redux for state management.
          As a dedicated advocate of modern web development, I thrive on
          leveraging the capabilities of JavaScript and TypeScript  to create
          elegant and efficient code that meets the highest industry standards.
           With three years of industry experience, I've
          had the privilege of collaborating with dynamic teams, contributing
          innovative ideas, and consistently delivering exceptional results. My
          ability to adapt to new challenges and communicate effectively and
          remotely has been instrumental in achieving project success.
        </p>
      </div>
    </div>
    
  );
};

export default About;
