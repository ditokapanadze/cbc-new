import React, { useEffect, useRef, useState, useCallback } from "react";
import "./roadmap.css";
import useOnScreen from "../../hooks/useIntersection ";
import bottle from "../../assets/videos/glow.mp4";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Controller, Scene } from "react-scrollmagic";

function Roadmap() {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const refLine = useRef();

  const isVisible = useOnScreen(ref);
  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);
  const isVisible3 = useOnScreen(ref3);
  const isVisible4 = useOnScreen(ref4);
  const isVisible5 = useOnScreen(ref5);
  const isVisible6 = useOnScreen(ref6);
  const lineVisble = useOnScreen(refLine);
  const [play, setPlay] = useState(true);
  const [frame, setFrame] = useState(-62);
  const [y, setY] = useState(window.scrollY);
  const { height, width } = useWindowDimensions();
  const [margin, setMargin] = useState('"250px"');
  console.log(margin);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        let video = document.querySelector(".video");

        // video.currentTime += 0.05;
      } else if (y < window.scrollY) {
        let video = document.querySelector(".video");
        // video.currentTime -= 0.05;
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  // useEffect(() => {
  //   width < 700 && setMargin(width - 400 + "px");
  // }, [width]);
  console.log(margin);

  // test video animation

  //

  return (
    <section className="roadmap__container" id="roadmap">
      {/* <span>ROADMAP ACTIVATIONS</span>
      <br />
      <p style={{ fontSize: "24px", marginTop: "20px" }}>
        We’ve set up some goalposts for ourselves. Once we hit a target sell
        through percentage, we will begin to work on realizing the stated goal.
      </p> */}

      <div className="roadmap__left">
        <p id="1" ref={ref} className={isVisible && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          111 Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref1} className={isVisible1 && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref2} className={isVisible2 && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref3} className={isVisible3 && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC
        </p>
      </div>
      <div
        ref={refLine}
        className={`line ${
          (isVisible4 || isVisible1 || isVisible3 || isVisible6) &&
          "line__animation"
        }`}
      >
        <p className="roadmap__percent">
          {" "}
          <span>10%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "310px" }}>
          <span> 20%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "620px" }}>
          <span>40%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "930px" }}>
          <span>60%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "1240px" }}>
          <span>80%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "1550px" }}>
          <span> 90%</span>
        </p>
        <p className="roadmap__percent" style={{ top: "1860px" }}>
          <span style={{ fontSize: "17px" }}>100%</span>
        </p>
      </div>
      <div className="roadmap__right">
        <p ref={ref4} className={isVisible4 && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref5} className={isVisible5 && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC
        </p>
        <p ref={ref6} className={isVisible6 && "visible"}>
          <span>Lorem Ipsum </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC
        </p>
      </div>

      {/* <ReactPlayer url={video} playing={true} loop={true} /> */}
    </section>
  );
}

export default Roadmap;
