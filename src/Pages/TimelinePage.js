import React, { useRef } from "react";

function Timeline() {
  const fadeRef = useRef();
  function fadeFunction() {
    fadeRef.current.classList.add("animate__fadeOutLeft");
  }

  return (
    <div className="content">
      <div className="home_container animate__animated" ref={fadeRef}>
        <div className="sacred animate__animated animate__fadeInRight">
          <div className="timeline">
            <ul>
              <li className="firstDelay animate__animated animate__fadeIn">
                <div className="timeline_beforeContent"></div>
                <div className="timeline_content">
                  <h3 className="date">October 6, 2021</h3>
                  <div className="timeline_border">
                    <h1>Graduate Degree in Programming Proclamation</h1>
                    <p>
                      After two years of blood, sweat, tears, and lots of chips,
                      I have obtained my second diploma. Thanks to Philippe De
                      Pauw - Waterschoot, Olivier, Tim...
                    </p>
                  </div>
                </div>
              </li>

              <li className="secondDelay animate__animated animate__fadeIn">
                <div className="timeline_beforeContent"></div>
                <div className="timeline_content">
                  <h3 className="date">February 8, 2021, to May 14, 2021</h3>
                  <div className="timeline_border">
                    <h1>The Reference Internship</h1>
                    <p>React, CARGLASS CARGLASS, and ... CARGLASS</p>
                  </div>
                </div>
              </li>

              <li className="thirdDelay animate__animated animate__fadeIn">
                <div className="timeline_beforeContent"></div>
                <div className="timeline_content">
                  <h3 className="date">October 6, 2019</h3>
                  <div className="timeline_border">
                    <h1>Proclamation</h1>
                    <p>
                      Completed 3 years in glory! Bachelor's degree in Social
                      Work diploma is in the bag!
                    </p>
                  </div>
                </div>
              </li>

              <li className="delay animate__animated animate__fadeIn">
                <div className="delay timeline_beforeContent"></div>
                <div className="timeline_content">
                  <h3 className="date">March 20, 2018</h3>
                  <div className="timeline_border">
                    <h1>Started as Kitchen Assistant at TRKZK</h1>
                    <p>
                      Started as a kitchen assistant in the rib restaurant in
                      Wortegem and evolved into a sous-chef.
                    </p>
                  </div>
                </div>
              </li>

              <li className="delay animate__animated animate__fadeIn">
                <div className="delay timeline_beforeContent"></div>
                <div className="timeline_content">
                  <h3 className="date">June 30, 2016</h3>
                  <div className="timeline_border">
                    <h1>Graduated from Onze Lieve Vrouw Hemelvaart</h1>
                    <p>
                      Human Sciences with extended mathematics at Onze Lieve
                      Vrouw Hemelvaart in Waregem.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
