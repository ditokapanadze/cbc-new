import React from "react";
import "./footer.css";
import logo from "../../assets/imgs/logo.png";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="">
        <div className="logo__container">
          <img className="logo" src={logo} />
          <p>
            Cold Beer Club <br />
          </p>
        </div>
        <p style={{ marginTop: "10px" }}>
          {" "}
          8,888 unique nfts asd lorem ipsum lorem
        </p>
      </div>
      <div>
        <ul className="footer__ul">
          <li className="footer__li">Home</li>
          <li className="footer__li">Team</li>
          <li className="footer__li">Contact Us</li>
          <li className="footer__li">
            <button className="footer__btn">
              {" "}
              <FaDiscord className="footer__icon" />
            </button>
            <button className="footer__btn">
              {" "}
              <FaTwitter className="footer__icon" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
