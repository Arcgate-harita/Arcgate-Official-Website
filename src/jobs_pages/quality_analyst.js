import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function QualityAnalyst() {
  return (
    <div className='research-container'>
        <article>
            <section>
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
                    <h1>Quality Analyst</h1>
                    <h4>Key Responsibility Areas</h4>
                    <ol>
                      <li>SLA: Contribute in maintaining all SLAs</li>
                      <li>Objective: Understand the importance of organization’s commitment with the client and maintain remarkable flexibility of time and role reversal to meet the objective.</li>
                      <li>Skills: Should have “Good to Excellent” command on project knowledge.</li>
                      <li>Responsible to function as per the project requirement</li>
                      <li>Team Spirit: Required to work in a team while demonstrating and ensuring high standards of team spirit and team work.</li>
                    </ol>
                   <h4>Key Performance Areas</h4>
                    <ul>
                        <p>Communication</p>
                      <li>Responsible for understanding and helping implementing updates or changes.</li>
                      <p>Project Operations</p>
                      <li>Responsible for meeting turnaround time (TAT) and SLAs.</li>
                      <li>Responsible to complete all daily, weekly and monthly audit percent or target with supreme quality.</li>
                      <li>Responsible for identifying and reporting repetitive errors.</li>
                      <li>Responsible for reviewing cases highlighted by RA and SRA for resolution.</li>
                      <li>Responsible for auditing and processing of all one time projects and completing them to maintain TAT.</li>
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

export default QualityAnalyst