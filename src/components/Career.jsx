import React from 'react'
import "../components/Career.css";
import imagePaths from '../imagePath';

function Career() {
    return (
        <div className='career-container'>
            <article>
                <section className='career-section1'>
                    <div className='career-content1'>
                        <h1>Become an Arcgatian</h1>
                        <div className='career-div1'>
                            <p className='orange'>WE THRIVE ON EXPERIENCE</p>
                            <p className='lightBlue'>WE CRAVE FOR INNOVATION</p>
                            <p className='lightGreen'>WE WORK TOWARDS SETTING AN EXAMPLE FOR OUR CLIENTS WITH OUR CONDUCT, WORK AND PROFESSIONALISM</p>
                            <p className='red'>WE WORK HARD AND LAUGH A LOT</p>
                            <p className='pink'>WE ENSURE A GREAT WORK ENVIRONMENT FOR WOMEN</p>
                            <p className='darkGreen'>WE’RE AT THE FOREFRONT OF THE OUTSOURCING REVOLUTION FOR STARTUPS</p>
                            <p className='darkBlue'>WE TAKE PRIDE IN BEING PART OF OUR CLIENTS’ SUCCESS; NO MATTER HOW BIG OR SMALL OUR CONTRIBUTION</p>
                        </div>
                    </div>
                </section>

                <section className='career-section2'>
                    <div className='career-content2'>
                        <div className='career-div2'>
                            <div className='career-body2'>
                                <div className='career-round-data'>
                                    <p className='red'>AMBITIOUS</p>
                                    <p className='darkBlue'>SELF-MOTIVATED</p>
                                    <p className='lightGreen'>AVID LEARNER</p>
                                    <p className='pink'>TEAM-WORKER</p>
                                    <p className='lightBlue'>DEDICATED</p>
                                    <p className='orange'>DISCIPLINED</p>
                                </div>
                            </div>
                            <div className='career-table'>
                                <p>We are hungry for talented individuals who believe in teamwork, dedication, discipline and growth.</p>
                                <p>We’re extremely selective, with an emphasis on the right skills, experience, attitude and ethics.</p>
                                <p>If you’re looking to make an impact and work with a great team, please <a href='join'>apply now</a>. We’d love to have you join our team.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='career-section3'>
                    <div className='career-content3'>
                        <div className='video-content'>
                            <h1>
                                Get an inside peek into Arcgate
                            </h1>
                            <div className='video-list'>
                                <div className='video-div'>
                                    <div className='video-body'>
                                        <a href=''>
                                            <div className='video-image'>
                                                <img src={imagePaths.imageVideo2} />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} />
                                                </span>
                                            </div>
                                        </a>
                                        <div className='video-text'>
                                            <p>CNBC-TV18 highlights the story of Arcgate in “The Leap Takers” show</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='video-div'>
                                    <div className='video-body'>
                                        <a href=''>
                                            <div className='video-image'>
                                                <img src={imagePaths.imageVideo3} />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} />
                                                </span>
                                            </div>
                                        </a>
                                        <div className='video-text'>
                                            <p>ET Now business News channel covers Arcgate in the “Emerging SME” series</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='video-div'>
                                    <div className='video-body'>
                                        <a href=''>
                                            <div className='video-image'>
                                                <img src={imagePaths.imageVideo01} />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} />
                                                </span>
                                            </div>
                                        </a>
                                        <div className='video-text'>
                                            <p>Hear our startup story from our founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='career-section4'>
                    <div className='career-content4'>
                        <div className='career-div3'>
                            <div className='body-section-content1'>
                                <h2>
                                    Life at Arcgate
                                </h2>
                                <center>
                                    <p>Hear from our people to learn more about our unique work culture.</p>
                                </center>
                                <div className='body-section-content1'>
                                    <div className='video-list'>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div className='thumb'>
                                                        <img src={imagePaths.videoImage1} />
                                                        <span className='btn-play'>
                                                            <img src={imagePaths.image18} />
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div className='thumb'>
                                                        <img src={imagePaths.videoImage2} />
                                                        <span className='btn-play'>
                                                            <img src={imagePaths.image18} />
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div className='thumb'>
                                                        <img src={imagePaths.videoImage3} />
                                                        <span className='btn-play'>
                                                            <img src={imagePaths.image18} />
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='career-button-div'>
                                    <div className='career-link-button'>
                                        <a href='careers'>VIEW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='career-section5'>
                    <div className='career-content5'>
                        <div className='career-div4'>
                         <h1>Current Job Openings</h1>
                         <div className='job-info'>
                            <div className='vacancy-container'>
                                <div className='career-body4'>
                                    <h4>BPO</h4>
                                    <ul>
                                        <li>
                                            <a href='career/research-analyst'>Research Analyst</a>
                                        </li>
                                        <li>
                                            <a href='career/quality-analyst'>Quality Analyst</a>
                                        </li>
                                        <li>
                                            <a href='career/accounts-executive'>Accounts Executive</a>
                                        </li>
                                        <li>
                                            <a href='career/senior-accounts-executive'>Senior Accounts Executive</a>
                                        </li>
                                        <li>
                                            <a href='career/non-voice-customer-support'>N0n-Voice Customer Support</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='career-body5'>
                                    <h4>Technology</h4>
                                    <ul>
                                        <li>
                                            <a href='career/python-database'>Python with Database</a>
                                        </li>
                                        <li>
                                            <a href='career/java-database'>Java Database</a>
                                        </li>
                                        <li>
                                            <a href='career/dotnet-developers'>.Net Developer</a>
                                        </li>
                                        <li>
                                            <a href='career/software-testing-automation'>Software QA Testing - Automation</a>
                                        </li>
                                        <li>
                                            <a href='career/devops-engineer'>DevOps Engineer</a>
                                        </li>
                                        <li>
                                            <a href='career/power-bi-engineer'>Power BI Engineer</a>
                                        </li>
                                    </ul>
                                </div>
                                <p></p>
                            </div>
                            <div className='career-button-div'>
                                <div className='career-button-link'>
                                    <a href='join'>APPLY</a>    
                                        </div>
                            </div>
                         </div>
                        </div>
                    </div>
                </section>

            </article>
            <footer>
                <section>
                    <aside>
                        <div className='footer-logo'>
                            <a href=''></a>
                        </div>
                        <nav>
                            <ul className='menu'>
                                <li><a href='about'>ABOUT</a></li>
                                <li><a href='bpo'>SERVICES</a></li>
                                <li><a href='technology'>TECHNOLOGY</a></li>
                                <li><a href='industries'>INDUSTRIES</a></li>
                            </ul>

                            <ul className='second-menu'>
                                <li><a href='clients'>CLIENTS</a></li>
                                <li><a href='careers'>CAREERS</a></li>
                                <li><a href='contact'>CONTACT</a></li>
                                <li><a href='blog'>BLOG</a></li>
                            </ul>

                            <ul className='second-menu'>
                                <li><a href='terms-of-use'>TERMS OF USE</a></li>
                                <li><a href='privacy-policy'>PRIVACY POLICY</a></li>
                            </ul>
                        </nav>
                    </aside>

                    <div className='footer-social hidden'>
                        <a href='' target='_blank' className='fb-icon'></a>
                        <a href='' target='_blank' className='twitter-icon'></a>
                        <a href='' target='_blank' className='linkedin-icon'></a>

                        <p className='copyright'>"Copyright © 2005 - 2023. All rights reserved. Built By Arcgate Technologies LLP. Designed by" <a href='' target='_blank'>superstudio.in</a></p>
                    </div>
                    <div className='footer-social-links'>
                        <ul>
                            <li><a href='' target='_blank' className='fb-icon' ><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href='' target='_blank' className='twitter-icon' ><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li> <a href='' className='linkedin-icon'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href='' target='_blank' className='youtube-icon'><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            <li><a href='' target='_blank' className='cloud-icon'><i class="fa fa-cloud" aria-hidden="true"></i></a></li>
                            <li><a href='' target='_blank' className='insta-icon'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                        <p className='copyright'>"Copyright © 2005 - 2023. All rights reserved. Built By Arcgate Technologies LLP. Designed by" <a href='' target='_blank'>superstudio.in</a></p>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Career