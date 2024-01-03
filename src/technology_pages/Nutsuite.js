import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function Nutsuite() {
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
    
    return (
        <div className='app-container'>
            <section className='app-section1'>
                <div className='app-content1'>
                    <h1>NetSuite Admin Support Outsourcing</h1>
                    <p></p>
                    <h2>We offer comprehensive NetSuite Administrator Support services to help businesses maximize the value of their NetSuite investment. Our experienced NetSuite professionals understand the platform and provide customized solutions tailored to your specific business needs whether you need to customize your system, optimize workflows, or stay up-to-date with the latest features and functionality. We are dedicated to providing top-notch service and support to ensure that your system runs smoothly and efficiently.</h2>
                </div>
            </section>

            <section className='app-section2'>
                <div className='app-content2'>
                    <div className='app-div2'>
                        <h1>Our NetSuite Administrator Outsourced Services</h1>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.adminIcon1} alt='' />
                                </div>
                                <h2>User Management</h2>
                                <h3>We can help you manage user access and permissions to ensure that the right people have access to the right data and functionality. We can also help you create custom user roles to fit your specific business needs.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk6} alt='' />
                                </div>
                                <h2>Custom Scripting</h2>
                                <h3>We can automate processes and customize functionality using NetSuite's powerful scripting capabilities. Our custom scripting services include script development, testing, and deployment.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.adminIcon6} alt='' />
                                </div>
                                <h2>Training and Education</h2>
                                <h3>We offer training and education services to help users get up to speed with NetSuite, including new feature releases and best practices.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk4} alt='' />
                                </div>
                                <h2>Reporting</h2>
                                <h3>We can help you create custom reports and dashboards to give you the insights you need to make informed business decisions. Our team can help you identify key performance indicators (KPIs) and set up automated reporting to save you time and effort.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk5} alt='' />
                                </div>
                                <h2>Audit and Optimization</h2>
                                <h3>We can perform an audit of your NetSuite system to identify areas where you can improve performance and streamline processes. We can also provide recommendations for optimizing your system.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk8} alt='' />
                                </div>
                                <h2>System Health Checks
                                </h2>
                                <h3>We offer regular system health checks to identify potential issues before they become major problems. Our system health checks include performance monitoring and data integrity checks.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.adminIcon2} alt='' />
                                </div>
                                <h2>Customization and Configuration</h2>
                                <h3>We can help you configure and customize NetSuite to fit your business processes and workflows. Our team of certified NetSuite experts can help you create custom fields, forms, and reports to streamline your operations and get the data you need to make informed business decisions.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk7} alt='' />
                                </div>
                                <h2>System Integration
                                </h2>
                                <h3>Our team has expertise in linking NetSuite with a diverse range of third-party systems, including eCommerce platforms, shipping software, CRMs, and banking tools. We can help you streamline data flow, automate processes, and facilitate payments to improve your organization's efficiency and flexibility.</h3>
                            </div>
                        </div>
                    </div>

                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.teamIcon1} alt='' />
                                </div>
                                <h2>Troubleshooting</h2>
                                <h3>We can help you troubleshoot any issues you encounter with NetSuite, from minor glitches to more complex problems. Our team has the experience and expertise to quickly identify and resolve issues, minimizing downtime and ensuring that your system is running smoothly.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk7} alt='' />
                                </div>
                                <h2>Support and Maintenance
                                </h2>
                                <h3>We offer ongoing support and maintenance services to troubleshoot issues, perform system upgrades, and ensure that your system is performing optimally. Our support and maintenance services include issue resolution, system monitoring, and maintenance.</h3>
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

export default Nutsuite
