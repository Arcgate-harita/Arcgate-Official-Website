import React, { useState, useEffect } from "react";
import imagePaths from '../imagePath';
import "../components/Technology.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import goToTop from "../images/goto_top.png";

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
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',

});


function Technology() {

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
        <div className='technology-container'>
            <article>
                <section className='technology-section1'>
                    <div className='technology-content1'>
                        <img src={imagePaths.arcgateLabLogo} alt="" />
                        <p></p>
                        <div className='technology-div1'>
                            <h2>Technology Services</h2>
                            <p></p>
                            <br></br>
                            <p>The convergence of Big Data, Cloud, Mobile and Artificial Intelligence (AI) is transforming enterprises, industries, and the world. And it is just the start.</p>
                            <p>The products that we have helped build over the years are probably in your pocket.</p>
                        </div>
                    </div>
                </section>

                <section className='technology-section2'>
                    <div className='technology-content2'>
                        <h2>What We Do</h2>
                        <p></p>
                        <center>
                            <p></p>
                            <p>We leverage technology to create solutions that make a true impact. We build a range of applications leveraging the full benefits of modern architectures, continuous delivery practices and cloud-enabled platforms.</p>
                            <p>We are an experienced development partner that you can rely on to deliver cost-effective full-cycle custom software development services.</p>
                            <p></p>
                        </center>
                        <p></p>
                        <div className='technology-div2'>

                            <div className='data-process-type1'>

                                <div data-aos="fade-in">
                                    <Link to="/application-development">

                                        <span className='data-process-image'>

                                            <img src={imagePaths.technologyIcon1} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            Application Developement
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/quality-assurance-testing'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.image7} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            Quality Assurance & Testing
                                        </span>
                                    </Link>
                                </div>

                            </div>
                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/team-augmentation'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.image8} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            Team Augmentation
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/devops'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.devops} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            DevOps Solutions
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/zendesk'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.arcgatelab4} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            Zendesk Admin Support
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/salesforce'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.arcgatelab3} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            Salesforce Admin Support
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/nutsuite'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.arcgatelab2} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            NetSulte Admin Support
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className='data-process-type1'>
                                <div data-aos="fade-in">
                                    <Link to='/datavisual'>

                                        <span className='data-process-image'>

                                            <img src={imagePaths.arcgatelab1} alt='' />

                                        </span>

                                        <span className='data-process-text'>
                                            Data Visulatization
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p></p>

                </section>

                <section className='technology-section3'>
                    <div className='technology-content3'>
                        <h2>Arcgate Ventures</h2>
                        <p></p>
                        <center>
                            <p></p>
                            <p>We start and fund companies that we believe will make a difference to the way we work and live.</p>
                            <p></p>
                        </center>
                        <p></p>
                        <div className='technology-div3'>
                            <div className='technology-body' data-aos='fade-up'>

                                <div className='rounded-box1'>
                                    <p>
                                        We
                                        <br></br>
                                        dream and
                                        <br></br>
                                        discuss the
                                        <br></br>
                                        next big
                                        <br></br>
                                        thing.
                                    </p>
                                    <p></p>
                                </div>
                                <br></br>
                                <p>Ideation</p>
                                <p></p>

                            </div>
                            <div className='technology-body' data-aos='fade-up' data-aos-delay='200'>

                                <div className='rounded-box2'>
                                    <p>
                                        We
                                        <br></br>
                                        provide the
                                        <br></br>
                                        funding,
                                        <br></br>
                                        infrastructure
                                        <br></br>
                                        and resources
                                        <br></br>
                                        to make it.
                                        <br></br>
                                        happen.
                                    </p>
                                    <p></p>
                                </div>
                                <br></br>
                                <p>Resources</p>
                                <p></p>

                            </div>
                            <div className='technology-body' data-aos='fade-up' data-aos-delay='400'>

                                <div className='rounded-box3'>
                                    <p>
                                        We
                                        <br></br>
                                        put together
                                        <br></br>
                                        the best cross-
                                        <br></br>
                                        functional
                                        <br></br>
                                        team to make
                                        <br></br>
                                        the idea come
                                        <br></br>
                                        alive.
                                    </p>
                                    <p></p>
                                </div>
                                <br></br>
                                <p>Build</p>
                                <p></p>

                            </div>
                            <div className='technology-body' data-aos='fade-up' data-aos-delay='600'>

                                <div className='rounded-box4'>
                                    <p>
                                        We
                                        <br></br>
                                        invest to
                                        <br></br>
                                        scale and
                                        <br></br>
                                        move as fast
                                        <br></br>
                                        as we can.
                                    </p>
                                    <p></p>
                                </div>
                                <br></br>
                                <p>Grow</p>
                                <p></p>
                            </div>

                        </div>
                        <p></p>
                        <center>
                            <p></p>
                            <p>We are currently working hard on our first product which we believe is disruptive and extremely ambitious. More details to come shortly as we get ready for launch!</p>
                            <p></p>
                        </center>
                        <p></p>
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

export default Technology
