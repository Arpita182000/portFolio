import React from "react";
import "./Sidebar.scss";
import A from "../Assets/img/A.jpg";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <>
      <div className="nav-bar">
        <Link>
          <img alt="logo" src={A} className="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
          </NavLink>
         
        </nav>
        <ul>
        <li>
          <a href="https://www.linkedin.com/in/arpita-sarkar-9132351b3/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Arpita182000" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
       
      </div>
    </>
  );
}

export default Sidebar;
