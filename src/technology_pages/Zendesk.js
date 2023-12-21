import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function Zendesk() {
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
                    <h1>Zendesk Admin Support Outsourcing</h1>
                    <p></p>
                    <h2>We recognize the significance of customer support for your business. We offer a range of Zendesk services to help you deliver exceptional customer service. Whether you require assistance in configuring Zendesk for the first time or optimizing an existing instance with continuous support, our team of certified administrators possesses the requisite skills and expertise to assist you. Our Zendesk Admin Support Outsourcing Services have been thoughtfully crafted to elevate your customer support process to the next level and elevate customer satisfaction to new heights.</h2>
                </div>
            </section>

            <section className='app-section2'>
                <div className='app-content2'>
                    <div className='app-div2'>
                        <h1>Our Zendesk Administrator Outsourced Services</h1>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp1} alt='' />
                                </div>
                                <h2>User and Profile Management</h2>
                                <h3>We can set up new user accounts, deactivate users, unlock user accounts, reset passwords, and manage roles and permissions to ensure that users have the appropriate access levels and security settings based on their roles and responsibilities.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp2} alt='' />
                                </div>
                                <h2>Configuring and Customizing Zendesk</h2>
                                <h3>We help you configure Zendesk to meet your business requirements, including creating custom fields, objects, and workflows. We can also create custom apps to automate repetitive tasks and simplify complex workflows.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp3} alt='' />
                                </div>
                                <h2>Ticket Management</h2>
                                <h3>We help you streamline your customer support process by managing and organizing tickets efficiently. This includes setting up custom ticket fields, automating ticket routing, and creating macros to handle common issues quickly.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp4} alt='' />
                                </div>
                                <h2>Reporting and Advanced Analytics</h2>
                                <h3>We build custom reports and dashboards in Zendesk to help you track key metrics and make data-driven decisions. Our team can help you manage your Zendesk data efficiently. We can import and export data, create custom reports and dashboards, and ensure data accuracy and integrity.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp5} alt='' />
                                </div>
                                <h2>Maintaining and Monitoring Zendesk</h2>
                                <h3>We provide ongoing support to ensure that your Zendesk instance is running smoothly. This includes performing regular system updates and backups, monitoring system performance, and troubleshooting issues.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Training and Support
                                </h2>
                                <h3>We create helpful training materials, conduct training sessions, and offer ongoing support to Zendesk users. We are dedicated to equipping the users with the skills and knowledge they need to utilize the Zendesk platform effectively.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp5} alt='' />
                                </div>
                                <h2>Collaborating with Teams</h2>
                                <h3>We work with your organization's departments and teams to configure Zendesk's collaborative features, such as team views, internal notes, and shared ticket views. Our aim is to improve communication and streamline workflows, resulting in increased productivity and customer satisfaction. We are committed to providing personalized support to help you maximize the benefits of Zendesk.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Zendesk Integrations
                                </h2>
                                <h3>We configure and manage Zendesk integrations, including third-party apps like Jira, Salesforce, Slack, Shopify, and SurveyMonkey. Our team develops custom integrations and automates tasks through the Zendesk API. We also create custom apps to extend Zendesk's functionality and improve the customer experience. Our solutions streamline workflows and enhance customer satisfaction.</h3>
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

export default Zendesk
