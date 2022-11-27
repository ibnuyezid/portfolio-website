import React, { useContext, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";
import { ThemeContext } from "../../context";
export default function Navbar() {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  useEffect(() => {
    const eventlistner = () => {
      const projectstitle = document.querySelector(".projectsTitle");

      const right = document.querySelector(".i-right");
      const left = document.querySelector(".i-left");

      const phones = document.querySelectorAll(".phone");
      right.style.transform = `translate(${0.4 * window.scrollY}px,${
        0.5 * -window.scrollY
      }px)`;

      left.style.transform = `translate(${0.4 * -window.scrollY}px,${
        0.5 * -window.scrollY
      }px)`;

      projectstitle.style.transform = `translateY(calc(130vh - ${window.scrollY}px))`;

      phones[0].style.transform = `translateX(calc(-178vh + ${window.scrollY}px))`;
    };
    window.addEventListener("scroll", eventlistner);
  }, []);
  return (
    <div className="navbar">
      <button className="connect">
        <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>
          <span>Let's Connect </span>
        </Link>
      </button>

      <div className="socialicon">
        <span className="socilcont">
          <a
            href="https://www.linkedin.com/in/mohammed-yezid/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
        <span className="socilcont">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            {" "}
            <i className="fa-brands fa-instagram"></i>
          </a>{" "}
        </span>
        <span className="socilcont">
          <a
            href="https://github.com/ibnuyezid"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-github"
              style={{ color: !theme.state.darkMode && "black" }}
            ></i>
          </a>
        </span>
      </div>
      <div className="t">
        <img src={sun} alt="" className="t-icon" />
        <img src={moon} alt="" className="t-icon" />
        <div
          className="t-button"
          onClick={handleClick}
          style={{ left: theme.state.darkMode ? 0 : 25 }}
        ></div>
      </div>
    </div>
  );
}
