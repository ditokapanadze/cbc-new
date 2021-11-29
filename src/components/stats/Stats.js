import React from "react";
import "./stats.css";
import cat from "../../assets/imgs/cat.jpg";
function Stats() {
  return (
    <section className="intro__stats">
      <div className="introduction">
        <p className="intro__title">Art Introduction</p>
        <p className="intro__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged
        </p>
      </div>

      <div className="row">
        <div className="image">
          <img src={cat} />{" "}
        </div>

        <div className="content">
          <p className="content__text">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div className="stats">
            <div>
              {" "}
              <div className="stats__item">
                <p>Total</p> <p>99</p>{" "}
              </div>
              <div className="stats__item">
                <p>Mint Cost</p> <p>99</p>{" "}
              </div>{" "}
            </div>
            <div>
              {" "}
              <div className="stats__item">
                <p>Minters</p> <p>99</p>{" "}
              </div>
              <div className="stats__item">
                <p>Tokens</p> <p>99</p>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
