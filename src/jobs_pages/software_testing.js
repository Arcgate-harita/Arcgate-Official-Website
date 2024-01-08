import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function SoftwareTesting() {
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
                    <h1>Software QA Testing - Automation</h1>
                    <ol>
                      <li>3-5 Years project experience in test automation framework designing and implementation of the same in projects using selenium.</li>

                    <li>Experience Java programming knowledge.</li>

                      <li>Test Automation Framework (TDD, BDD) understanding and skill to develop a framework from the scratch or modify existing framework if needed.</li>

                      <li>Should be experienced in test planning, test execution, test data preparation, reporting & metrics.</li>

                      <li>Working experience with GIT and integration of test automations with CI/CD pipelines.</li>

                      <li>Working experience in Web application and Mobile App android, iOS Automation using Appium.</li>

                      <li>Good Experience with Service-level (API) and UI automation.</li>

                      <li>Experience with Jenkins integration and configuring Jenkins jobs.</li>

                      <li>Experience in SauceLabs integration and cross-browser compatibility automation.</li>

                      <li>Worked with Page Object Model automation.</li>

                      <li>Experience in Exploratory testing</li>

                      <li>Analyzes test results to ensure existing functionality and recommends corrective action.</li>

                      <li>Experience with developing fast, reliable & scalable automation framework with velocity at 30 mins per tests, 99% success rate.</li>

                      <li>Experience with JIRA</li>

                      <li>Working Experience with Agile development process.</li>

                      <li>Working knowledge of Java application development and Windows/UNIX/Linux systems</li>
                      
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

export default SoftwareTesting