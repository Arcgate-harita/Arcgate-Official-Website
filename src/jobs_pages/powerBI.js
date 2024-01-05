import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function PowerbiEngineer() {
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
                    <h1>Power BI Engineer</h1>
                    <ol>
                      <li>2+ years’ experience in BI Tools like (Power BI, Tableau and SAP)</li>
<li>Power BI Report development.</li>
                      <li>Building Analysis Services reporting models.</li>
                      <li>Developing visual reports, KPI scorecards, and dashboards using Power BI desktop.</li>
                      <li>Connecting data sources, importing data, and transforming data for Business intelligence.</li>
                      <li>Analytical thinking for translating data into informative reports and visuals.</li>
                      <li>Capable of implementing row-level security on data along with an understanding of application security layer models in Power BI.</li>
                      <li>Should have an edge over making DAX queries in Power BI desktop.</li>
                      <li>Expert in using advanced-level calculations on the data set.</li>
                      <li>Responsible for design methodology and project documentaries.</li>
                      <li>Should be able to develop tabular and multidimensional models that are compatible with data warehouse standards.</li>
                      <li>Very good communication skills must be able to discuss the requirements effectively with the client teams, and with internal teams.</li>
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

export default PowerbiEngineer