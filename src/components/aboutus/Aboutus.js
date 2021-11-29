import React from "react";
import cat from "../../assets/imgs/cat.jpg";
import "./aboutus.css";

function Aboutus() {
  return (
    <section className="about" id="about">
      <h1 className="heading">about Us</h1>

      <div className="row">
        <div className="image">
          <img src={cat} alt="" />
          <img src={cat} alt="" />
          <img src={cat} alt="" />
          <img src={cat} alt="" />
        </div>

        <div className="content">
          <h3>what makes us special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
            ratione a officiis id temporibus autem? Quod nemo facilis
            cupiditate. Ex, vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet
            enim quod veritatis, nihil voluptas culpa! Neque consectetur
            obcaecati sapiente?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
