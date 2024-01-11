import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";
import { useEffect } from 'react';

function NetDatabase() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <h1>.NET Developers</h1>
                        <ol>
                            <li>5 years of development experience using C# .NET</li>
                            <li>Experience with the ASP.NET framework, SQL Server and design/architectural patterns (e.g. Model-View-Controller (MVC))</li>

                            <li>Experience of at least 3 years in MVC architecture</li>

                            <li>Skill for writing reusable Java libraries.</li>

                            <li>Knowledge of Javascript, JQuery, CSS</li>

                            <li>Familiarity with architecture styles/APIs (REST, RPC)</li>

                            <li>Good to have knowledge in .NET Core, PostgreSQL, MySQL etc.</li>

                            <li>Excellent troubleshooting and communication skills</li>

                            <li>Strong understanding of object-oriented programming</li>

                            <li>Able to work well in a team setting</li>

                            <li>Proficient understanding of code versioning tools such as Git, SVN, and Gitlab</li>
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

export default NetDatabase
