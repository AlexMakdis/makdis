import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Home() {
  const fadeRef = useRef();
  function fadeFunction() {
    fadeRef.current.classList.add("animate__fadeOutLeft");
  }

  return (
    <div className="content">
      <div className="container home_container animate__animated" ref={fadeRef}>
        <div className="row">
          <div className="home_intro animate__animated animate__fadeInDown">
            <h1 className="home_title ">
              <span>home</span>(
              <Typewriter
                options={{
                  wrapperClassName: "typeSelected",
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(1500);
                  typewriter
                    .typeString(`'selected'`)
                    .callFunction(() => {})
                    .start();
                }}
              />
              )
            </h1>
            <div className="home_intro_container animate__animated animate__fadeInLeft">
              <p className="home_intro_name">Alex Makdis Afrim</p>
              <p className="home_intro_job">
                Full stack developer{" "}
                <a
                  className="home_intro_link"
                  href="https://www.dscribedata.com/"
                  target="_blank"
                >
                  @dScribe Data
                </a>{" "}
                <br></br>
                <br></br> Currently open for work.
              </p>
              <p className="home_intro_description">
                Welcome to my personal website.
              </p>
              <br></br>
              <div className="home_button">
                <NavLink to="/about" onClick={fadeFunction}>
                  <button type="submit">
                    <p>go to about</p>
                    <FaArrowRight />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
