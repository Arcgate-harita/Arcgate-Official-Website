import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";

function ApplicationDevelopment() {
    return (
        <div className='app-container'>
            <section className='app-section1'>
                <div className='app-content1'>
                    <h1>Application Development Outsourcing</h1>
                    <p></p>
                    <h2>Companies today are faced with talent shortage, which leads to project backlogs, and important technology advancements getting delayed. Our outsourced application development model offers a robust and scalable methodology for both new and existing applications across a variety of platforms and technologies whether it's mobile application, web application, or enterprise-level systems</h2>
                </div>
            </section>

            <section className='app-section2'>
                <div className='app-content2'>
                    <div className='app-div2'>
                        <h1>Our Application Development Outsourced Services</h1>
                        <h3>
                            Our capabilities include application development, maintenance, and enhancements. Clients turn to us for our full range of specialized application development skills as a means of driving innovation and building new products. We structure our solution to your needs. Our goal is always to enable you to focus on driving growth in a flexible, scalable manner.</h3>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp1} alt='' />
                                </div>
                                <h2>Web Application Development</h2>
                                <h3>Our team of expert developers work closely with you to understand your requirements and create a web application that is reliable, scalable, and easy to use. We use the latest technologies and best practices to ensure that your web application is fast, secure, and responsive. Whether you need a custom CRM, project management tool, or inventory management system, we have the expertise to create a web application that meets your needs.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp2} alt='' />
                                </div>
                                <h2>Mobile Application Development</h2>
                                <h3>We offer a full cycle of application development and management services. Whether you need an app for iOS, Android or both, we have the expertise to create a mobile application that will help you achieve your business objectives. Our mobile app developers can build high-quality native apps for both Android and iOS platforms as well as hybrid mobile apps that can work in different environments.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp3} alt='' />
                                </div>
                                <h2>Desktop Application Development</h2>
                                <h3>We use cutting-edge technologies and tools to develop high-performance software that enhances productivity and streamlines workflows. We develop desktop applications for various operating systems, including Windows, macOS, and Linux, using programming languages such as Java, Python, and .NET. We also ensure that our applications are compatible with the latest hardware and software technologies to ensure maximum efficiency.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp4} alt='' />
                                </div>
                                <h2>API Development</h2>
                                <h3>Our team of experienced developers has the expertise to deliver custom APIs using a range of programming languages and frameworks, including REST, SOAP, GraphQL, Java, Python, .NET, and Node.js. We ensure that our APIs are secure, using industry-standard protocols such as OAuth and SSL to protect your data and prevent unauthorized access. We also ensure that our APIs comply with the latest industry standards and best practices.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp5} alt='' />
                                </div>
                                <h2>CMS Development</h2>
                                <h3>We offer our CMS development services to help you easily create, manage, and publish your website or blog. We offer a range of CMS services, including development, implementation, migration, and maintenance. We work with a variety of CMS platforms, including WordPress, Drupal, Magento, and Shopify, and we ensure that our solutions are scalable, secure, and high-performing.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.webApp6} alt='' />
                                </div>
                                <h2>Database Services
                                </h2>
                                <h3>We offer a range of database services, including design, development, implementation, migration, and maintenance. We work with a variety of database platforms, including MySQL, Microsoft SQL Server, PostgreSQL, MongoDB and Cassandra. We ensure that our solutions are scalable, secure, and high-performing. Our database development team has extensive experience in data modeling, database design, indexing, query optimization, and performance tuning.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-element'>
                            <div className='app-icon'>
                                <img src={imagePaths.webApp7} alt='' />
                            </div>
                            <h2>Maintenance & Support</h2>
                            <h3>We offer a range of maintenance and support services to suit your budget and needs, from basic support services to more comprehensive maintenance packages that include regular updates and feature enhancements. Our maintenance and support services include bug fixes, performance optimization, security updates, and feature enhancements.</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ApplicationDevelopment