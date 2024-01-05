import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function JavaDatabase() {
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
                    <h1>Java with Database</h1>
                    <ol>
                      <li>3+ years of experience as a Java Developer.</li>

                      <li>Sound knowledge of Object-Oriented Programming (OOP) Patterns and Concepts.</li>

                      <li>Familiarity with different design and architectural patterns.</li>

                      <li>Skill for writing reusable Java libraries.</li>

                      <li>Understanding of the concepts of MVC (Model-View-Controller) Pattern, JDBC (Java Database Connectivity), and RESTful web services.</li>

                      <li>Experience in working with popular web application frameworks like Play and Spark.</li>

                      <li>Relevant Knowledge of Java GUI frameworks like Swing, SWT, AWT according to project requirements.</li>

                      <li>Strong database technology skills such as MySQL, PostgreSQL Oracle, and MongoDB.</li>

                      <li>Ability to write clean, readable Java code.</li>

                      <li>Basic knowhow of class loading mechanism in Java.</li>

                      <li>Basic knowledge of JVM (Java Virtual Machine), its drawbacks, weaknesses, and workarounds.</li>

                      <li>In-depth knowledge of code versioning tools, for instance, Git.</li>

                      <li>Good problem-solving skills.</li>

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

export default JavaDatabase