import React from "react";
import banner from "../../assets/imgs/banner.jpg";
import "./bottomBanner.css";
import { FaDiscord } from "react-icons/fa";
import bar from "../../assets/imgs/bar.jfif";

function BotttomBanner() {
  return (
    <div className="bottombanner__container">
      <div className="bottom__Banner"></div>
      <div className="banner__content">
        <h1>Join our community</h1>
        <p className="banner__text">
          Join us to get the news as soon as possible and follow our latest
          announcements.
        </p>
        <a href="https://discord.gg/e5mcMBxN" target="_blank">
          <button className="discord__btn">
            <p>Join Discord</p> <FaDiscord className="banner__logo" />{" "}
          </button>
        </a>
      </div>
    </div>
  );
}

export default BotttomBanner;
