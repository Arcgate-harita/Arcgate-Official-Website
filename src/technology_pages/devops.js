import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,


    offset: 120,
    delay: 0,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});


function Devops() {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
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
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev1} alt='' />
                                    </div>
                                    <h2>CI/CD Pipeline</h2>
                                    <h3>Set up and manage automated CI/CD pipelines to accelerate software development and deployment, and ensure consistent and reliable builds.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev2} alt='' />
                                    </div>
                                    <h2>Infrastructure Management</h2>
                                    <h3>Configure, manage and monitor cloud-based infrastructure on providers such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) to enable scalable and efficient application deployment.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev3} alt='' />
                                    </div>
                                    <h2>Monitoring and Alerts</h2>
                                    <h3>Set up and configure tools to track application performance and detect issues before they impact end-users.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev4} alt='' />
                                    </div>
                                    <h2>Containerization & Orchestration</h2>
                                    <h3>Set up and manage containerization technologies such as Docker, Kubernetes, and Helm to enable efficient application deployment and management.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev5} alt='' />
                                    </div>
                                    <h2>Infrastructure as Code (IaC)</h2>
                                    <h3>Create and manage infrastructure as code to enable faster, more reliable, and repeatable deployment of infrastructure and applications.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev6} alt='' />
                                    </div>
                                    <h2>Incident Response and Disaster Recovery
                                    </h2>
                                    <h3>Deploy and manage processes and tools for incident response and disaster recovery to minimize downtime and ensure business continuity in the event of a disruption.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev7} alt='' />
                                    </div>
                                    <h2>Configuration Management</h2>
                                    <h3>Manage configuration of software systems to ensure consistency across environments, enable reproducible builds, and reduce the risk of errors.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div data-aos="fade-in">
                                <div className='app-element'>
                                    <div className='app-icon'>
                                        <img src={imagePaths.dev8} alt='' />
                                    </div>
                                    <h2>Security and Compliance
                                    </h2>
                                    <h3>Ensure that DevOps practices and tools are implemented securely, and comply with relevant industry standards and regulations such as HIPAA, PCI-DSS, and GDPR.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isVisible && (
                <>
                    <div className="top-btn" onClick={goToBtn}>
                        <img src={goToTop} className="top-btn--icon" />
                    </div>
                    <div className='icon-text'>
                        BACK TO TOP
                    </div>
                </>
            )}

        </div>
    )
}

export default Devops
