import React from 'react'
import imagePaths from '../imagePath'
import "../technology_pages/team.css";
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

function Team() {
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
        <div className='team-container'>
            <article>

                <section className='team-section1'>
                    <div className='team-content1'>
                        <h2>Team Augmentation Outsourcing</h2>
                        <p></p>
                        <p>With 15+ years of experience working with startup engineering teams, we understand your needs when it comes to delivery, support, communication and quality. We specialize in providing companies with skilled and experienced IT professionals to help them achieve their business objectives.</p>
                        <p></p>
                        <p>Scale up your software development process with dedicated teams of experienced developers at low cost. We work as a tightly integrated extension of your engineering team. The result is faster product development and greater flexibility. We pair up our developers with QA specialists to make sure that quality stays high.</p>
                        <p></p>
                    </div>
                </section>

                <section className='app-section2'>
                    <div className='app-content2'>
                        <div className='app-div2'>
                            <h1>Our IT Staff Augmentation Outsourced Services</h1>
                            <h3>
                                Our IT Staff Augmentation Services are designed to provide companies with flexible, scalable, and cost-effective solutions to meet their IT resource needs. We work closely with our clients to understand their unique business requirements and provide them with the right IT professionals who have the necessary skills and expertise.</h3>
                        </div>
                        <div className='app-body2'>
                            <div className='app-left'>
                                <div data-aos="fade-in">
                                    <div className='app-element'>
                                        <div className='app-icon'>
                                            <img src={imagePaths.FunctionalTesting} alt='' />
                                        </div>
                                        <h2>Project-Based Staff Augmentation</h2>
                                        <h3>This service is ideal for companies that need additional IT staff to work on specific projects for a limited period.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='app-right'>
                                <div data-aos="fade-in">
                                    <div className='app-element'>
                                        <div className='app-icon'>
                                            <img src={imagePaths.UserTesting} alt='' />
                                        </div>
                                        <h2>Temporary Staff Augmentation</h2>
                                        <h3>This service is ideal for companies that need additional IT staff to fill a temporary skill gap caused by an employee's absence or a specific project requirement.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='app-body2'>
                            <div className='app-left'>
                                <div data-aos="fade-in">
                                    <div className='app-element'>
                                        <div className='app-icon'>
                                            <img src={imagePaths.ZendeskTesting} alt='' />
                                        </div>
                                        <h2>Long-Term Staff Augmentation</h2>
                                        <h3>This service is ideal for companies that need additional IT staff on a long-term basis to support their ongoing IT operations.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='app-right'>
                                <div data-aos="fade-in">
                                    <div className='app-element'>
                                        <div className='app-icon'>
                                            <img src={imagePaths.AccountTesting} alt='' />
                                        </div>
                                        <h2>On-Demand Staff Augmentation</h2>
                                        <h3>This service is ideal for companies that need flexible IT staffing solutions to meet their fluctuating business needs.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="team-section3">
                    <div className="team-content3">
                        <div className="team-div3">
                            <h1>Our IT Staff Augmentation Service Areas</h1>
                            <br></br>
                            <div className="team-body3">
                                <ul>
                                    <li>Data Analytics</li>
                                    <li>Cloud Computing</li>
                                    <li>Software Dovelopment</li>
                                    <li>Technical Support</li>
                                    <li>Network Infrastructure</li>
                                    <li>Quality Assurance & Testing</li>
                                    <li>UI/UX Design</li>
                                    <li>Project Management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='team-section2'>
                    <div className='team-content2'>
                        <div className='team-div2'>
                            <h1>Why Arcgate for Team Augmentation?</h1>
                        </div>
                        <div className='team-body2'>
                            <div className='team-left'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon1} alt='' />
                                        </div>
                                        <h2>Skills Specialization</h2>
                                        <h3>Our IT Staff Augmentation Services provide companies with access to a wide range of IT professionals who have expertise in various areas of IT.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='team-right'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon2} alt='' />
                                        </div>
                                        <h2>Cost-effective solutions
                                        </h2>
                                        <h3>Our services help companies save on the overhead costs of hiring full-time employees and provide them with the flexibility to scale their IT resources as per their business needs.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='team-body2'>
                            <div className='team-left'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon3} alt='' />
                                        </div>
                                        <h2>Reduced risk</h2>
                                        <h3>Our services help companies mitigate the risk of hiring full-time employees who may not be a good fit for the organization's culture or may not have the required skills</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='team-right'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon4} alt='' />
                                        </div>
                                        <h2>Faster time-to-market
                                        </h2>
                                        <h3>Our services help companies speed up the delivery of IT projects by providing them with access to a larger talent pool of IT professionals.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='team-body2'>
                            <div className='team-left'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon5} alt='' />
                                        </div>
                                        <h2>Customized solutions</h2>
                                        <h3>We offer customized solutions to meet our clients' unique business requirements.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='team-right'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon6} alt='' />
                                        </div>
                                        <h2>Experienced team
                                        </h2>
                                        <h3>Our team of IT professionals has worked on various projects in different industries, and they bring a wealth of experience and expertise to the table.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='team-body2'>
                            <div className='team-left'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon7} alt='' />
                                        </div>
                                        <h2>Quality service delivery</h2>
                                        <h3>We follow a rigorous screening process to ensure that we provide our clients with the best IT talent available.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='team-right'>
                                <div data-aos="fade-in">
                                    <div className='team-element'>
                                        <div className='team-icon'>
                                            <img src={imagePaths.teamIcon8} alt='' />
                                        </div>
                                        <h2>Scalable solutions
                                        </h2>
                                        <h3>Our services provide companies with the flexibility to scale their IT resources as per their business needs</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

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

export default Team
