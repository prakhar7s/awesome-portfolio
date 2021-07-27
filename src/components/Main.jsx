import React, { useState } from "react";

import "../styles/main.css";
import CustomButton from "./custom-button/custom-button";
import myPic from "../assets/my-pic.png";

import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`main${isDarkMode ? " dark-mode" : ""}`}>
      <div data-aos="zoom-in" className="information">
        <h1 className="tagline">
          A <span className="fc-yellow">21 years</span> old Software Engineer
        </h1>
        <div className="email-n-number">
          <span>prakharshrivastava971@gmail.com</span>
          <span>(+91) 7440580412</span>
        </div>
        <div className="options">
          <CustomButton label="Download my resume" color="#e0a858" />
          <CustomButton label="Have an advise for me" color="#419d78" />
          <CustomButton label="Get in touch" color="#d9594c" />
        </div>
      </div>

      <div className="my-image"></div>
      <footer>
        <a href="#Github">
          Github <span className="line"></span>
        </a>
        <a href="#linkedin">
          LinkedIn <span className="line"></span>
        </a>
        <div>
          {isDarkMode ? (
            <span onClick={() => setDarkMode(false)}>
              <WbSunnyIcon />
            </span>
          ) : (
            <span onClick={() => setDarkMode(true)}>
              <NightsStayIcon />
            </span>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Main;
