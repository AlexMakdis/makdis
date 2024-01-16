import React, { useRef, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import TimelineContent from "./TimelineContent";

function Timeline() {
  const fadeRef = useRef();
  const timelineData = [
    {
      date: "February 6, 2021",
      title: "First job as full stack developer at dScribe Data",
      text: "Working on the dScribe software, helping companies with their data. Summary: UX improvements, Browser extension, Recommendation engine...",
    },
    {
      date: "October 6, 2021",
      title: "Graduate Degree in Programming Proclamation",
      text: "After two years of blood, sweat, tears, and lots of chips, I have obtained my second diploma. Thanks to Philippe De Pauw - Waterschoot, Olivier, Tim...",
    },
    {
      date: "February 8, 2021, to May 14, 2021",
      title: "The Reference Internship",
      text: "React, CARGLASS CARGLASS, and ... CARGLASS",
    },
    {
      date: "October 6, 2019",
      title: "Proclamation",
      text: "Completed 3 years in glory! Bachelor's degree in Social Work diploma is in the bag!",
    },
    {
      date: "March 20, 2018",
      title: "Started as Kitchen Assistant at TRKZK",
      text: "Started as a kitchen assistant in the rib restaurant in Wortegem and evolved into a sous-chef.",
    },
    {
      date: "June 30, 2016",
      title: "Graduated from Onze Lieve Vrouw Hemelvaart",
      text: "Human Sciences with extended mathematics at Onze Lieve Vrouw Hemelvaart in Waregem.",
    },
  ];

  return (
    <div className="content">
      <div className="home_container container animate__animated" ref={fadeRef}>
        <h1
          style={{ textAlign: "center", marginBottom: "40px" }}
          className="home_title animate__animated animate__fadeInDown"
        >
          <span>timeline</span>(
          <Typewriter
            options={{
              wrapperClassName: "typeSelected",
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1500);
              typewriter
                .typeString(`new Date()`)
                .callFunction(() => {})
                .start();
            }}
          />
          )
        </h1>

        <div className="sacred animate__animated animate__fadeInRight">
          <div className="timeline">
            <ul>
              {timelineData.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index % 2 === 0 ? "secondDelay" : "firstDelay"
                  } animate__animated animate__fadeIn`}
                >
                  {
                    <TimelineContent
                      date={item.date}
                      text={item.text}
                      title={item.title}
                    />
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
