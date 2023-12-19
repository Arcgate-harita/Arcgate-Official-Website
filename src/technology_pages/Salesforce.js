import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";

function Salesforce() {
    return (
        <div className='app-container'>
            <section className='app-section1'>
                <div className='app-content1'>
                    <h1>Salesforce Admin Support Outsourcing</h1>
                    <p></p>
                    <h2>Salesforce Administration is critical to the success of an organization that relies on Salesforce as their primary CRM platform. Arcgate provides Salesforce Certified Administrators to help manage and customize your Salesforce platform and meet the needs of your organization.</h2>
                </div>
            </section>

            <section className='app-section2'>
                <div className='app-content2'>
                    <div className='app-div2'>
                        <h1>Our Salesforce Administrator Outsourced Service</h1>
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
                                <h3>Help set up Salesforce to meet the specific needs of your organization including creating custom fields, objects, and workflows to automate business processes.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp3} alt='' />
                                </div>
                                <h2>Account Management</h2>
                                <h3>We ensure that users have the appropriate permissions, access levels, and security settings based on their roles and responsibilities. Help identify and merge duplicate Accounts, Contacts and Leads.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp4} alt='' />
                                </div>
                                <h2>Reporting and Advanced Analytics</h2>
                                <h3>Our Admins can handle data management in Salesforce including importing and exporting data, creating reports and dashboards, and ensuring data accuracy and integrity.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp5} alt='' />
                                </div>
                                <h2>Maintaining and Monitoring Salesforce</h2>
                                <h3>Help ensure that your Salesforce instance is running smoothly. This includes performing regular system updates and backups, monitoring system performance, and troubleshooting issues.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Training and Support
                                </h2>
                                <h3>Help provide training and support to users of the Salesforce platform. This includes creating training material, conducting training sessions, and providing ongoing support to users.</h3>
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
                                <h3>Help coordinate with different departments and teams within your organization to ensure that Salesforce is meeting business needs.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Salesforce Integrations
                                </h2>
                                <h3>Configure and manage various Salesforce integrations for your organization. Examples of integrations include Lean Data, Voyager, Drift, Conga, Location API, ZoomInfo, SAPI and 6sense.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Salesforce
