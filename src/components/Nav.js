import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Nav() {
  const activeClassName = "nav_links_active";
  return (
    <div className="nav_container ">
      <nav className="nav ">
        <ul className="nav_links">
          <div className="makdis_logo">
            <li className="nav_links_logo ">
              <NavLink exact="true" to="/">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("<h1>makdis</h1>")
                      .callFunction(() => {})

                      .start();
                  }}
                />
                <div className="dot"></div>
              </NavLink>
            </li>
          </div>
          <div className="nav_links_container">
            <li className="nav_links_logo">
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <h1>home( )</h1>
              </NavLink>
            </li>
            <li className="nav_links_logo">
              <NavLink
                exact="true"
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <h1>about( )</h1>
              </NavLink>
            </li>
            <li className="nav_links_logo">
              <NavLink
                exact="true"
                to="/timeline"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <h1>timeline( )</h1>
              </NavLink>
            </li>
            <li className="nav_links_logo">
              <NavLink
                exact="true"
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <h1>projects( )</h1>
              </NavLink>
            </li>
            <li className="nav_links_logo">
              <a href="mailto:alexmakdis@outlook.com">
                <h1>contact( )</h1>
              </a>
            </li>
            <li className="nav_links_logo">
              <a
                href="https://www.linkedin.com/in/alex-makdis-afrim-351914170/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="nav_links_logo">
              <a
                href="https://github.com/AlexMakdis"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
