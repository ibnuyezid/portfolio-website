import React, { useContext } from "react";
import "./contact.css";
import contact from "../../img/contact.svg";
import { ThemeContext } from "../../context";
export default function Contact() {
  const theme = useContext(ThemeContext);

  return (
    <section className="contact" id="contact">
      <div className="container contact__container">
        <aside className="contact__aside">
          <div className="aside__image">
            <img src={contact} alt="" />
          </div>
          <h4 style={{ textTransform: "capitalize" }}>
            let's create something together
          </h4>
          <p>
            Do you have some big ideas and need help bringing them to fruition
            for your business? Then please reach out, I would love to hear more
            about you, your project and how I can help you with my profession!
          </p>
          <ul className="contact__detail">
            <li>
              <i className="uil uil-phone-times"></i>
              <h5>+251966906285</h5>
            </li>
            <li>
              <i className="uil uil-envelope"></i>
              <h5>tewdudai@gmail.com</h5>
            </li>
            <li>
              <i className="uil uil-location-point"></i>
              <h5>Addis Ababa, Ethiopia</h5>
            </li>
          </ul>
          <ul className="contact__socials">
            <li>
              <a href="https://facebook.com" target="_blank">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </aside>
        <form
          className="contact__form"
          action="https://formspree.io/f/mlezykkn"
          method="Post"
        >
          <div className="form__name">
            <input
              style={{
                color: !theme.state.darkMode && "black",
                background: !theme.state.darkMode && "white",
                borderColor: theme.state.darkMode && "#333",
              }}
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              style={{
                color: !theme.state.darkMode && "black",
                background: !theme.state.darkMode && "white",
                borderColor: theme.state.darkMode && "#333",
              }}
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            style={{
              color: !theme.state.darkMode && "black",
              background: !theme.state.darkMode && "white",
              borderColor: theme.state.darkMode && "#333",
            }}
            type="Email"
            name="Email Address"
            placeholder="Your Email"
            required
          />
          <textarea
            style={{
              color: !theme.state.darkMode && "black",
              borderColor: theme.state.darkMode && "#333",
              backgroundColor: !theme.state.darkMode && "white",
            }}
            name="message"
            placeholder="message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
