import React from "react";
import "./css/bootstrap.min.css";
// import "./css/bootstrap.min.css";

function Header() {
  return (
    <header className="header header_style_01">
      <nav className="megamenu navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              <img
                src="./images/logos/Kisan-Sahulat.png"
                alt=""
                height="60px"
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li>
                <a className="active" href="body.js">
                  Home
                </a>
              </li>
              <li>
                <a href="About.js">About us</a>
              </li>
              <li>
                <a href="services.js">Our Services</a>
              </li>
              <li>
                <a href="crops.js">Crops</a>
              </li>
              <li>
                <a href="contact.js">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
