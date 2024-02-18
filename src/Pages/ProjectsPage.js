import React from "react";
import { FaSocks } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Project() {
  return (
    <div className="content">
      <div className="container home_container animate__animated" id="fade">
        <div className="row">
          <div className="home_intro">
            <div className="row">
              <div>
                <h1 className="home_title animate__animated animate__fadeInDown">
                  <span>projects</span>(
                  <Typewriter
                    options={{
                      wrapperClassName: "typeSelected",
                      autoStart: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter.pauseFor(1500);
                      typewriter
                        .typeString(`'Hello World!'`)
                        .callFunction(() => {})
                        .start();
                    }}
                  />
                  )
                </h1>
              </div>
            </div>
            <div className="home_intro_container animate__animated animate__fadeInLeft">
              <div className="home_intro_name project_purple">
                <p>
                  Explore some of the projects I've personally designed and
                  developed.
                </p>
              </div>
              <div className="about_me project_grey">
                <p>//Arteveldehogeschool</p>
              </div>
              <div className="row">
                <div className="about_title">
                  <hr />
                </div>
                <div>
                  <a
                    href="https://www.dscribedata.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="project">
                      <div className="project_background">
                        <div className="dscribe">
                          <br />
                        </div>
                      </div>
                      <div className="project_info">
                        <h1>dScribe Data</h1>
                        <p className="project_tools">
                          // React.js / TypeScript / LESS / GrapghQl / Neo4j /
                          elastic{" "}
                        </p>
                        <p className="project_description">
                          Worked as full stack software developer on the
                          application. UI/UX improvements, developed a browser
                          extension, data governace features...
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                  >
                    <div className="project">
                      <div className="project_background">
                        <div className="refuway">
                          <br />
                        </div>
                      </div>
                      <div className="project_info">
                        <h1>RefuWay</h1>
                        <p className="project_tools">// Next.js </p>
                        <p className="project_description">
                          Thesis Project: Developed a website catering to
                          newcomers, recognized refugees, subsidiary protected
                          persons, NBM...
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                  >
                    <div className="project">
                      <div className="project_background">
                        <div className="riness">
                          <br />
                        </div>
                      </div>
                      <div className="project_info">
                        <h1>Riness</h1>
                        <p className="project_tools">
                          // Wordpress / PHP / offline
                        </p>
                        <p className="project_description">
                          Webshop for purchasing rings
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                  >
                    <div className="project">
                      <div className="project_background">
                        <div className="pablo">
                          <br />
                        </div>
                      </div>
                      <div className="project_info">
                        <h1>Pablo's Hot Sauces</h1>
                        <p className="project_tools">// React </p>
                        <p className="project_description">
                          Online store to buy very spicy sauces.{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                  >
                    <div className="project">
                      <div className="project_background">
                        <div className="pgm">
                          <br />
                        </div>
                      </div>
                      <div className="project_info">
                        <h1>Pgm.Gent</h1>
                        <p className="project_tools">// Webpack </p>
                        <p className="project_description">
                          A website for the Programming Associate Degree.{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a>
                    <div className="project">
                      <div className="project_background">
                        <div className="sock">
                          <FaSocks />
                        </div>
                      </div>
                      <div className="project_info">
                        <h1>So Socksy</h1>
                        <p className="project_tools">
                          // MongoDB / GrapghQl / Apollo / React{" "}
                        </p>
                        <p className="project_description">
                          Online store to buy comfy socks!<br/>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
