import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";
import { useEffect } from 'react';

function ResearchAnalyst() {
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
            <h1>Research Analyst</h1>
            <h4>Key Responsibility Areas</h4>
            <p>Operations</p>
            <ol>
              <li>Responsible for meeting daily targets in the set time frame while following the project guidelines.</li>
              <li>Responsible to complete each record with the set standard of quality</li>
              <li>Responsible to attend recommended training sessions and take assessments.</li>
              <li>Responsible to function as per the project requirement</li>
              <li>Responsible for processing of all one time projects and achieving assigned targets with quality.</li>
            </ol>
            <h4>Key Performance Indicators</h4>
            <ul>
              <li>Utilization: Maintain utilization benchmark with compliance</li>
              <li>Quality: Maintain quality benchmark</li>
              <li>Discipline: Conduct as per the advised manner.</li>
              <li>Team Spirit: Required to work in a team while demonstrating and ensuring high standards of team spirit and team work.</li>
            </ul>
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

export default ResearchAnalyst
