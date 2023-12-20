import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";

function Devops() {
    return (
        <div className='app-container'>
            <section className='app-section1'>
                <div className='app-content1'>
                    <h1>DevOps Solutions Outsourcing</h1>
                    <p></p>
                    <h2>We offer comprehensive outsourced DevOps services & solutions to help you manage your cloud operations and workloads efficiently.</h2>
                    <p></p>
                    <h2>The result is lower costs, faster release management cycles, and quality software builds.</h2>
                </div>
            </section>

            <section className='app-section2'>
                <div className='app-content2'>
                    <div className='app-div2'>
                        <h1>Our DevOps Solutions Outsourced Services</h1>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp1} alt='' />
                                </div>
                                <h2>CI/CD Pipeline</h2>
                                <h3>Set up and manage automated CI/CD pipelines to accelerate software development and deployment, and ensure consistent and reliable builds.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp2} alt='' />
                                </div>
                                <h2>Infrastructure Management</h2>
                                <h3>Configure, manage and monitor cloud-based infrastructure on providers such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) to enable scalable and efficient application deployment.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp3} alt='' />
                                </div>
                                <h2>Monitoring and Alerts</h2>
                                <h3>Set up and configure tools to track application performance and detect issues before they impact end-users.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp4} alt='' />
                                </div>
                                <h2>Containerization & Orchestration</h2>
                                <h3>Set up and manage containerization technologies such as Docker, Kubernetes, and Helm to enable efficient application deployment and management.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp5} alt='' />
                                </div>
                                <h2>Infrastructure as Code (IaC)</h2>
                                <h3>Create and manage infrastructure as code to enable faster, more reliable, and repeatable deployment of infrastructure and applications.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Incident Response and Disaster Recovery
                                </h2>
                                <h3>Deploy and manage processes and tools for incident response and disaster recovery to minimize downtime and ensure business continuity in the event of a disruption.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp5} alt='' />
                                </div>
                                <h2>Configuration Management</h2>
                                <h3>Manage configuration of software systems to ensure consistency across environments, enable reproducible builds, and reduce the risk of errors.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Security and Compliance
                                </h2>
                                <h3>Ensure that DevOps practices and tools are implemented securely, and comply with relevant industry standards and regulations such as HIPAA, PCI-DSS, and GDPR.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Devops