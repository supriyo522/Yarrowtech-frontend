import React from "react";
import "../styles/about.css";
import aboutImage from "../assets/Rectangle 4411.png"; // Add your image in the assets folder

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={aboutImage} alt="About Yarrowtech" className="about-image" />
        <div className="about-text">
          <h2>About Yarrowtech</h2>
          <p>
            Its sole purpose is to give the best solutions to industries around
            the globe. We have a wide range of smart systems that assist with a
            clear flow of data, better workflow, and time management with
            real-time updates.
          </p>
          <p>
            Companies can visit the Yarrowtech portal to explore our products
            and request a demo. We are happy to accommodate client needs with no
            extra charges. Once integrated, clients can navigate the Yarrowtech
            dashboard to add, remove, transfer assignments, manage payments, or
            even upgrade their system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

