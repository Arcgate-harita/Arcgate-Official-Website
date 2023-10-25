import React from 'react'
import "../components/Client.css";
import imagePaths from "../imagePath";
function Clients() {
    return (
        <div className='clients-container'>
            <article>
                <section className='clients-section1'>
                    <div className='clients-content1'>
                        <h1>Trusted by the most disruptive companies</h1>
                        <p></p>
                        <center></center>
                        <p></p>
                        <p>We work with incredibly exciting startups and high growth companies who dream big and move fast. Our relationship with our clients is a partnership – we bring our experience, best practices and tools to apply to our customer’s unique requirements.</p>
                        <br></br>
                        <p>Our customers include the top leaders in Real Estate Tech, Food Tech, Sharing Economy, Ecommerce, Fintech and Consumer Internet. We value their trust deeply and take the responsibility very seriously.</p>
                        <p></p>
                    </div>
                </section>

                <section className='clients-section2'>
                    <div className='clients-content2'>
                        <h2>Case Studies</h2>
                        <h3>Multi-Year Engagements</h3>
                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon1} alt="" />
                                <p></p>
                                <h6>Oil &
                                    <br></br>
                                    Energy</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo1} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>Helped a large Oil & Energy Analytics company
                                    <span>collect, standardize and map data from 2 million public filings</span>
                                    to enable making real-time trading decisions.
                                </p>
                                <p></p>
                            </div>
                        </div>

                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon2} alt="" />
                                <p></p>
                                <h6>Security
                                    <br></br>
                                    Software</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo2} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>
                                    Classified and analyzed top
                                    <span>5 million websites for spam, viruses and malware</span>for a publicly traded Security Software Vendor using proprietary algorithms.
                                </p>
                                <p></p>
                            </div>
                        </div>
                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon3} alt="" />
                                <p></p>
                                <h6>Media</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo3} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>Trained photo, video and content matching algorithms for a large media company using
                                    <span>human scoring, tagging and categorization.</span>
                                </p>
                                <p></p>
                            </div>
                        </div>

                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon4} alt="" />
                                <p></p>
                                <h6>Food
                                    <br></br>
                                    Tech</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo4} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>Collected and annotated business listings,
                                    <span>photos and food menu data </span>for a market leader in the on-demand delivery space.
                                </p>
                                <p></p>
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

export default Clients