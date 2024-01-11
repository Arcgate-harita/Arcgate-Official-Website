import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function DevopsEngineer() {
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
                    <h1>DevOps Engineer</h1>
                    <ol>
                      <li>Very good Experience with AWS Cloud Services such as (Ec2,RDS,S3,Lambda Funtions, Api Gateway, RDS, CloudWatch, ElasticCache, ELK Cluster, CloudWatch, Cloudformation, Cloudfront, SQS, Kinesis datastream)</li>

                    <li>Experience with Google Cloud and Azure</li>

                      <li>Experience with Kubernetes and Docker.</li>

                      <li>Jenkins CI/CD pipeline, GitLab, AWS CodePipeLine</li>

                      <li>Working experience with GIT and integration of test automations with CI/CD pipelines.</li>

                      <li>Bash Shell Scripts, Ansible , Teraform</li>

                      <li>Experience with CDN Services such as Cloudflare/Akamai</li>

                      <li>Linux Server Administration</li>

                      <li>Experience with Apache/Nginx Server</li>

                      <li>Experience with PostgreSQL/MySQL RDBMS</li>

                      <li>Experience with Security Penetration tools such as Nessus and OpenVas</li>

                      <li>Experience with Nginx and Zabbix monitoring tools.</li>

                      <li>DevOps Engineer who can develop ETL with Web scraping and API and support in both our Custom ETL Platform and in our Snaplogic ELT/ETL platform (we will train)</li>

                      <li>Develop optimized SQL statements for integral data science processes</li>

                      <li>Active monitoring of alerts & operational dashboards for availability, latency, performance, and capacity</li>

                      <li>Researching, diagnosing, troubleshooting, and identifying solutions to resolve issues.</li>
                      
                      <li>Take proactive measurements to mitigate the risk of data mis-loads.</li>
                      
                      <li>Proven work experience as a DevOps Engineer, or demonstrated academic background</li>

                      <li>Hands-on experience with Python, SQL and Bash scripting</li>

                      <li>Proficient in using REST APIs and Web Scraping</li>

                      <li>Ability to diagnose and troubleshoot basic technical issues.</li>

                      <li>Excellent problem-solving and communication skills both verbal and written.</li>

                      <li>Experience building and maintaining production systems.</li>
                      
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

export default DevopsEngineer
