import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function SeniorAccountExecutive() {
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
                    <h1>Senior Accounts Executive</h1>
                    <ol>
                      <li>Proven work experience as a Senior Account Executive, Account Executive, Account Coordinator, Account Representative, or a similar role.</li>
                      <li>Familiarity with CRM software and performance metrics tools.</li>
                      <li>Good time management and organizational skills.</li>
                      <li>Strong analytical and problem-solving skills.</li>
                      <li>Excellent communication, presentation, and negotiation skills.</li>
                      <li>Strong leadership skills.</li>
                      <li>Ability to manage strict deadlines and stressful situations.</li>
                      <li>Highly motivated individual.</li>
                      <li>Having an eye for detail.</li>
                      <li>Analyze financial information and summarize financial status.</li>
                      <li>Prepare financial statements and produce budget according to schedule.</li>
                      <li>Direct internal and external audits to ensure compliance.</li>
                      <li>Develop and document business processes and accounting policies to maintain and strengthen internal controls.</li>
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

export default SeniorAccountExecutive
