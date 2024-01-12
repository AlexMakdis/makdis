import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import Typewriter from "typewriter-effect";
import Pdf from "../components/curriculum_vitae_Alex-Makdis-Afrim.pdf";

function About() {
  const techSkills = [
    ["HTML", "CSS (LESS, Sass)", "JavaScript", "TypeScript"],
    ["Cypress", "React", "React-native", "GraphQl"],
    ["MongoDB", "PHP", "Wordpress", "SQL"],
    ["Node.js", "Express.js", "Apollo", "Firebase"],
    ["Blender", "Three.js"],
  ];
  return (
    <div className="content">
      <div className="home_container container animate__animated" id="fade">
        <div className="row">
          <div className="home_intro">
            <div className="row">
              <div>
                <h1 className="home_title animate__animated animate__fadeInDown">
                  <span>about</span>(
                  <Typewriter
                    options={{
                      wrapperClassName: "typeSelected",
                      autoStart: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter.pauseFor(1500);
                      typewriter
                        .typeString(`'me'`)
                        .callFunction(() => {})
                        .start();
                    }}
                  />
                  )
                </h1>
              </div>
            </div>
            <div className="home_intro_container animate__animated animate__fadeInLeft">
              <div className="home_intro_name about_intro">
                <h1>
                  <a href="https://www.linkedin.com/in/alex-makdis-afrim-351914170/">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/AlexMakdis">
                    <FaGithub />
                  </a>
                </h1>
                <p className="download_cv">Download my CV</p>
                <div className="home_button about_button">
                  <a href={Pdf} download={Pdf}>
                    <button>
                      <p>curriculum vitae </p>
                      <BiDownload style={{ transform: "scale(1.5)" }} />
                    </button>
                  </a>
                </div>
              </div>
              <div className="about_me">
                <p>
                  Graduated with a Bachelor's Degree in Programming from
                  Artevelde University College in Ghent. Eager to learn and
                  enthusiastic about coding.
                </p>
              </div>
              <div className="row" style={{ marginBottom: "100px" }}>
                <div className="about_title">
                  <h1>Tech skills</h1>
                  <hr />
                  <div className="about_skills_container">
                    {techSkills.map((skills, i) => (
                      <div key={i} className="about_skills">
                        {skills.map((skill) => (
                          <p key={skill}>{skill}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="about_title">
                  <h1>Languages</h1>
                  <hr />
                </div>
                <div className="about_skills">
                  <p className="comment">//Fluent</p>
                  <p>Dutch</p>
                  <p>English</p>
                </div>
                <div className="about_skills">
                  <p className="comment">//Intermediate</p>
                  <p>French</p>
                </div>
                <div className="about_skills">
                  <p className="comment">//Basic</p>
                  <p>Arab</p>
                </div>
                <div className="about_title">
                  <h1>Hobbies</h1>
                  <hr />
                </div>
                <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                  <div className="about_skills">
                    <p>Gym</p>
                  </div>
                  <div className="about_skills">
                    <p>Gaming</p>
                  </div>
                  <div className="about_skills">
                    <p>Cooking</p>
                  </div>
                  <div className="about_skills">
                    <p>Reading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
