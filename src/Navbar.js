import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <p>
            <strong className="strong-word">We are hiring!</strong>
            <span>
              Become an Arcgatian. Join our team and deliver outsourcing services to the most innovative companies in the world.
            </span>
          </p>
          <a className="current-link" href="#current-openings">
            See Current Openings
          </a>
        </div>
      </div>
      <section className="navbar">
        <div className="arcgate-logo">
          <a href=""></a>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <a href="#">BPO</a>
              <span className="down-arrow"></span>
            </li>

            <li>
              <Link to="/technology">TECHNOLOGY</Link>
            </li>
            <li>
              <a href="#">INDUSTRIES</a>
              <span className="down-arrow"></span>
            </li>
            <li>
              <Link to="/clients">CLIENTS</Link>
            </li>
            <li>
              <Link to="/career">CAREERS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <a href="#">INSIGHTS</a>
              <span className="down-arrow"></span>
            </li>
          </ul>
        </nav>
      </section>

    </header>
  );
}

export default Navbar;
