import React, { useState } from "react";
import "./faq.css";
function Faq() {
  return (
    <section className="faq">
      <p
        style={{
          fontSize: "34px",
          marginBottom: "20px",
          color: "rgb(245, 237, 237)",
        }}
      >
        Frequently asked questions
      </p>
      <div className="faq__container">
        <div style={{ flex: "1", marginRight: "30px" }}>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur.
            </p>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur.
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
          </div>
          <div className="faq__item">
            <p className="faq__title">Where does it come from?</p>
            <p className="faq__content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
