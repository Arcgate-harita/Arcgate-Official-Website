import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";
import { useEffect } from 'react';

function PythonDatabase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='research-container'>
      <article>
        <section className='research-section'>
          <div className='header-logo'>
            <img src={ArcgateLogo}></img>
            <p></p>
            <div className='close'>
              <a href='/career'>
                <img src={closeIcon}></img>
              </a>
            </div>
          </div>

          <div className='research-content'>
            <h1>Python with Database</h1>
            <ol>
              <li>3+ years of experience as a Python Developer.</li>
              <li>Expertise in at least one popular Python framework (like Django, Flask or Pyramid).</li>
              <li>Knowledge of Object Relational Mapping (ORM).</li>
              <li>Best practices on Cloud Platform.</li>
              <li>Familiarity with front-end technologies (like JavaScript and HTML5).</li>
              <li>In-depth knowledge of code versioning tools, for instance, Git.</li>
              <li>Good problem-solving skills.</li>
              <li>Strong database technology skills such as MySQL, PostgreSQL Oracle, and MongoDB.</li>
              <li>Excellent written and verbal communication.</li>
              <li>Ability to work as part of a team.</li>
            </ol>
          </div>

          <div className='research-button'>
            <a href='/apply'>
              <button>APPLY</button>
            </a>
          </div>
        </section>
      </article>
    </div>
  )
}

export default PythonDatabase
