import React from 'react'
import "../src/body_container.css";
import imagePaths from './imagePath';

function BodyContainer() {
    return (
        <div className='body-container'>
            <article className='body-content'>
                <section className='body-section'>
                    {/* <img src={image}></img> */}
                    <div className='body-div'>
                        <h2>
                            We are a fast growing team of 2000+ people passionate about data and technology.
                            <br></br>
                            <br></br>
                            "We help some of the most innovative startups in the world with AI data preparation, data enrichment, search relevance, content moderation, application development and quality engineering."
                        </h2>
                    </div>
                </section>

                <section className='body-section2'>
                    <div className='body-div2'>
                        <center>
                            <p>
                                Dun & Bradstreet rated Arcgate as the Best Mid-Sized Enterprise in the IT & ITES sector in India.
                            </p>
                            <p className='logo-image'>
                            <img src={imagePaths.logoImage} />
                            </p>
                        </center>
                    </div>
                </section>

                <section className='body-section3'>
                    <div className='body-div3'>
                        <h2>Trusted by the most disruptive companies</h2>
                        <p>We work with incredibly exciting startups and high growth companies who dream big and move fast. Our relationship with our clients is a partnership – we bring our experience, best practices and tools to apply to our customer’s unique requirements.</p>
                        <p>Our customers include the top leaders in Real Estate Tech, Food Tech, Sharing Economy, Ecommerce, Fintech and Consumer Internet. We value their trust deeply and take the responsibility very seriously.</p>
                    </div>
                </section>

                <section className='body-section4'>
                    <h1>We provide critical outsourcing services to help our clients accelerate in the AI-first world.</h1>
                    <div className='bpo1'>
                        <div className='right-border'>
                            <div className='data-process'>
                                <h2>BPO</h2>
                                <div className='row1'>
                                    <div className='data-process-type1'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.bpoImage} />
                                            </span>
                                            <span className='data-process-text'>
                                                Accounting Outsourcing
                                            </span>
                                        </a>
                                    </div>

                                    <div className='data-process-type1'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image1} />
                                            </span>
                                            <span className='data-process-text'>
                                                AI Data Preparation
                                            </span>
                                        </a>
                                    </div>

                                    <div className='data-process-type1'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image2} />
                                            </span>
                                            <span className='data-process-text'>
                                                Data Solutions
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className='row2'>
                                    <div className='data-process-type1'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image3} />
                                            </span>
                                            <span className='data-process-text'>
                                                Coustomer Onboarding & support
                                            </span>
                                        </a>
                                    </div>

                                    <div className='data-process-type1'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image4} />
                                            </span>
                                            <span className='data-process-text'>
                                                Order Management
                                            </span>
                                        </a>
                                    </div>

                                    <div className='data-process-type1'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image5} />
                                            </span>
                                            <span className='data-process-text'>
                                                Transcription
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='data-process1'>
                                <h2>Technology</h2>
                                <div className='row1'>
                                    <div className='data-process-type2'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image6} />
                                            </span>
                                            <span className='data-process-text'>
                                                Application Development
                                            </span>
                                        </a>
                                    </div>

                                    <div className='data-process-type2'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image7} />
                                            </span>
                                            <span className='data-process-text'>
                                                Quality Assurance & Testing
                                            </span>
                                        </a>
                                    </div>

                                    <div className='data-process-type2'>
                                        <a href='accounting_outsourcing'>
                                            <span className='data-process-image'>
                                            <img src={imagePaths.image8} />
                                            </span>
                                            <span className='data-process-text'>
                                                Team Augmentation
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className='body-section5'>
                    <div className='arcgate-content'>
                        <div className='video-content'>
                            <h1>
                                Get an inside peek into Arcgate
                            </h1>
                            <div className='video-list'>
                                <div className='video-div'>
                                    <div className='video-body'>
                                        <a href=''>
                                            <div className='video-image'>
                                            <img src={imagePaths.imageVideo1} />
                                                <span className='btn-video'>
                                                <img src={imagePaths.image18} />
                                                </span>
                                            </div>
                                        </a>
                                        <div className='video-text'>
                                            <p>Dun & Bradstreet Special Recognition Award 2019 - SME</p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='body-section6'>
                    <div className='body-div4'>
                        <h2>
                            Why Arcgate
                        </h2>
                        <center>
                            <p>Since 2005 we have helped accelerate more than 75 startups. That deep experience helps us understand the needs of high growth companies better than most outsourcing vendors.                            </p>
                        </center>
                        <div className='why-arcgate'>
                            <p>
                            <img src={imagePaths.image9} />
                                <br></br>
                                <span>Speed</span>
                            </p>

                            <p>
                            <img src={imagePaths.image10} />
                                <br></br>
                                <span>Management</span>
                            </p>

                            <p>
                            <img src={imagePaths.image11} />
                                <br></br>
                                <span>Cost</span>
                            </p>

                            <p>
                            <img src={imagePaths.image12} />
                                <br></br>
                                <span>Infrastructure</span>
                            </p>

                            <p>
                            <img src={imagePaths.image13} />
                                <br></br>
                                <span>Fexibility</span>
                            </p>

                            <p>
                            <img src={imagePaths.image14} />
                                <br></br>
                                <span>Quality</span>
                            </p>
                        </div>
                        <div className='button-div'>
                            <div className='link-button'>
                                <a className='link-button-a' href='about#why-arcgate'>LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='body-section7'>
                    <div className='body-div5'>
                        <div className='body-section-content'>
                            <div className='body-section-content1'>
                                <h2>
                                    Become an Arcgatian
                                </h2>
                                <center>
                                    <p>Combining the innovative feel of a startup with the sophistication of an experienced team, we are at the forefront of the outsourcing revolution for startups in the AI-first world.</p>
                                </center>
                                <div className='body-section-content1'>
                                    <div className='video-list'>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div className='thumb'>
                                                    <img src={imagePaths.image15} />
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
                                                    <img src={imagePaths.image16} />
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
                                                    <img src={imagePaths.image17} />
                                                        <span className='btn-play'>
                                                        <img src={imagePaths.image18} />
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='button-div'>
                                    <div className='link-button'>
                                        <a href='careers'>SEE CAREERS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='body-section8'>
                    <div className='body-section-content2'>
                        <h2>Our Blog</h2>
                        <center>
                            <p>Read our thoughts around outsourcing and startups</p>
                        </center>
                        <div className='blog'>
                            <div className='blog-container'>
                                <div className='blog-content'>
                                    <a href=''>
                                        <div className='blog-div'>
                                        <img src={imagePaths.imageBlog1} />
                                        </div>
                                        <div className='thumb-blog'>
                                            <p>Retail in India and Future Trends</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='blog-container'>
                                <div className='blog-content'>
                                    <a href=''>
                                        <div className='blog-div'>
                                        <img src={imagePaths.imageBlog2} />
                                        </div>
                                        <div className='thumb-blog'>
                                            <p>
                                                Artificial Intelligence – The Exciting Future </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='blog-container'>
                                <div className='blog-content'>
                                    <a href=''>
                                        <div className='blog-div'>
                                        <img src={imagePaths.imageBlog3} />
                                        </div>
                                        <div className='thumb-blog'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='button-div'>
                            <div className='button-div-link'>
                                <a href='blog'>VIEW ALL</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='body-section9'>
                    <div className='body-section9-content'>
                        <div className='body-section9-div'>
                            <h2>Listen to our Podcasts</h2>
                        </div>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <a>
                                            <p>Food tech startups are leveraging artificial intelligence and image recognition</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <a>
                                            <p>Food tech startups are leveraging artificial intelligence and image recognition</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <a>
                                            <p>Food tech startups are leveraging artificial intelligence and image recognition</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='body-section10'>
                    <div className='body-section10-div'>
                        <h2>Tweets</h2>
                        <div className='tweet-content'>
                            <div className='tweet-div'>
                                <img></img>
                            </div>
                        </div>
                        <div className='tweet-body'>
                            <div className='tweet-text'>
                                <a href=''>Follow</a>
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
                            <li> <a href=''className='linkedin-icon'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
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

export default BodyContainer