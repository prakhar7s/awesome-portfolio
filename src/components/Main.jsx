import React, { useEffect, useState } from "react";

import "../styles/main.css";
import CustomButton from "./custom-button/custom-button";

import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

import { useToasts } from "react-toast-notifications";

import {
  GITHUB_URL,
  HACKERRANK_LINK,
  LEETCODE_LINK,
  LINKEDIN_URL,
  RESUME_LINK,
} from "../utils/information.js";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const { addToast } = useToasts();

  const taostMsg = (msg) => {
    addToast(msg, {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: 2000,
    });
  };
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className={`main${isDarkMode ? " dark-mode" : ""}`}>
      <div data-aos="zoom-in" className="information">
        <h1 className="tagline">
          A <span className="fc-yellow">21 years</span> old Software Engineer
        </h1>
        <div className="email-n-number">
          <h4>prakharshrivastava971@gmail.com</h4>
          <h4>(+91) 7440580412</h4>
        </div>
        <div className="options">
          <CustomButton
            label="Download my resume"
            redirectTo={RESUME_LINK}
            color="#e0a858"
          />
          <CustomButton
            label="Have an advise for me"
            redirectTo={LINKEDIN_URL}
            color="#419d78"
          />
          <CustomButton
            label="Get in touch"
            redirectTo={LINKEDIN_URL}
            color="#d9594c"
          />
        </div>
      </div>

      {!isDarkMode && <div className="my-image"></div>}
      <footer>
        <div className="profile-links">
          <a href={GITHUB_URL} target="_blank">
            Github <span className="line"></span>
          </a>
          <a href={LINKEDIN_URL} target="_blank">
            LinkedIn <span className="line"></span>
          </a>
          <a href={HACKERRANK_LINK} target="_blank">
            Hackerrank <span className="line"></span>
          </a>
          <a href={LEETCODE_LINK} target="_blank">
            Leetcode <span className="line"></span>
          </a>
        </div>
        <div>
          {isDarkMode ? (
            <span
              onClick={() => {
                setDarkMode(false);

                taostMsg("Light mode on!");
              }}
            >
              <WbSunnyIcon />
            </span>
          ) : (
            <span
              onClick={() => {
                setDarkMode(true);
                taostMsg("Dark mode on!");
              }}
            >
              <NightsStayIcon />
            </span>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Main;
