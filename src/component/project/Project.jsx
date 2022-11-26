import React, { useContext } from "react";
import phone from "../../img/phone.png";
import phonebig from "../../img/phonebig.png";
import phonsma from "../../img/phone-png-17040.png";
// import app from "../../img/app-release.apk";
import laptop from "../../img/laptop.png";
import dashbord from "../../img/Dashboard.png";
import rateit from "../../img/rateit.png";
import wiki from "../../img/wiki.png";
import "./project.css";
import { ThemeContext } from "../../context";
export default function Project() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div class="projects">
        <h1 class="projectsTitle">Here are some of my projects</h1>
        <div class="project">
          <div className="phones">
            <div class="phone dis" data-aos="fade-left">
              <img src={phonsma} alt="" />
              <div class="phoneScreen">
                <img src={dashbord} alt="" class="phoneApp" />
              </div>
            </div>
            <div class="phone skew">
              <img src={phonebig} alt="" className="phoneimgs" />
              <div class="phoneScreen2">
                <img src={dashbord} alt="" class="phoneApp" />
              </div>
            </div>
          </div>
          <div class="projectDetail dta">
            <h1 class="projectTitle">Lab-Connect</h1>
            <p class="projectDesc">
              A labratory sytem that have a full modern functional Labratory
              order Dashboard to manage patients records related to labratory.
              <span className="info">
                it's ongoing project that briges the gap between
                doctors,patients and lab-technicians by facilating relible
                communication and
              </span>
              doctors are able to choose available labs in the city and order
              lab tests for patients. The system also allows Doctors to know
              real time status of sample (ETA).Handovers are also registered in
              database for real time location.You can download the app to know
              more about the feature ...
            </p>
            <button
              class="projectButton"
              style={{ backgroundColor: !theme.state.darkMode && "#323232" }}
            >
              {" "}
              <a
               
               
                style={{ textDecoration: "none" }}
              >
                Download app
              </a>
            </button>
          </div>
        </div>
        <div class="project">
          <div class="laptop" data-aos="flip-up">
            <img src={laptop} alt="" />
            <div class="laptopScreen">
              <img src={rateit} alt="" class="laptopApp" />
            </div>
          </div>
          <div class="projectDetail">
            <h1 class="projectTitle">Rate-Eat</h1>
            <p class="projectDesc">
              A digital platform, through which, users create and consume item
              level feedback.it's web application designed to provides a
              one-stop local platform for consumers to discover all dishes
              nearby or across city with their irrespectve description and
              client service rating. Note that this is a platform to not rate a
              burger-place but a burger at a burger place. See it online
            </p>
            <button
              class="projectButton"
              style={{ backgroundColor: !theme.state.darkMode && "#323232" }}
            >
              <a
                href="https://rateeat.app"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {" "}
                View Demo
              </a>
            </button>
          </div>
        </div>
        <div class="project">
          <div class="phone3" data-aos="fade-right">
            <img src={phone} alt="" />
            <div class="phoneScreen3">
              <img src={wiki} alt="" class="phoneApp" />
            </div>
          </div>
          <div class="projectDetail">
            <h1 class="projectTitle">Wiki-Search Engine</h1>
            <p class="projectDesc">
              A software system designed to carry out wikepedia article
              searches. This is my Personal Web app implemented and designed to
              search wikipedia topics using wiki-Api.Search results are
              Nicely-organized and made easy-to-use pages. Cross-referenced to
              related information.see the demo...
            </p>
            <button
              className="projectButton"
              style={{ backgroundColor: !theme.state.darkMode && "#323232" }}
            >
              <a
                href="https://searchwiki-engine.netlify.app/"
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                View Demo
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="githubContainer">
        <h1 class="githubTitle">Want to see all projects?</h1>

        <div class="githubSm">
          <a
            href="https://github.com/ibnuyezid"
            target="_blank"
            style={{
              color: !theme.state.darkMode && "black",
              // boxShadow:
              //   !theme.state.darkMode && "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
              background: !theme.state.darkMode && "#fff",
              border: !theme.state.darkMode && "none",
            }}
          >
            <i className="fa-brands fa-github"></i>
            <h3 className="githubname"> /Mohamed Yezid</h3>
          </a>
          <h2 className="contact">Find Me on Github or Let's Chat</h2>
        </div>
      </div>
    </>
  );
}
