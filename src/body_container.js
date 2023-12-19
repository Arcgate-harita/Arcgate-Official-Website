import { useState } from 'react';
import "../src/body_container.css";
import imagePaths from './imagePath';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaArrowUp from "./images/arrow-up.png";


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

function BodyContainer() {

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
        <div className='body-container'>
            <article className='body-content'>
                <section className='body-section'>
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
                                <img src={imagePaths.logoImage} alt='' />
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

                                <div className='data-process-type1'>
                                    <Link to="/accounting_outsourcing">
                                        <span className='data-process-image'>

                                            <img src={imagePaths.bpoImage} alt='' />

                                        </span>
                                        <span className='data-process-text1'>
                                            Accounting Outsourcing
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type1'>
                                    <Link to='/ai-data-preparation'>
                                        <span className='data-process-image2'>
                                            <img src={imagePaths.image1} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            AI Data Preparation
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type1'>
                                    <Link to='/data-solution'>
                                        <span className='data-process-image3'>
                                            <img src={imagePaths.image2} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            Data Solutions
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type1'>
                                    <Link to='/customer-onboarding-support'>
                                        <span className='data-process-image4'>
                                            <img src={imagePaths.image3} alt='' />
                                        </span>
                                        <span className='data-process-text2'>
                                            customer Onboarding & support
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type1'>
                                    <Link to='/order-management'>
                                        <span className='data-process-image5'>
                                            <img src={imagePaths.image4} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            Order Management
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type1'>
                                    <Link to='/transcription'>
                                        <span className='data-process-image6'>
                                            <img src={imagePaths.image5} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            Transcription
                                        </span>
                                    </Link>
                                </div>
                            </div>

                        </div>


                        <div className='left-border'>
                            <h2>Technology</h2>
                            <div className='data-process1'>

                                <p></p>
                                <br></br>
                                <div className='data-process-type2'>
                                    <Link to='/application-development'>
                                        <span className='data-process-image7'>
                                            <img src={imagePaths.image6} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            Application Development
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type2'>
                                    <Link to='/quality-assurance-testing'>
                                        <span className='data-process-image8'>
                                            <img src={imagePaths.image7} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            Quality Assurance & Testing
                                        </span>
                                    </Link>
                                </div>

                                <div className='data-process-type2'>
                                    <Link to='/team-augmentation'>
                                        <span className='data-process-image9'>
                                            <img src={imagePaths.image8} alt='' />
                                        </span>
                                        <span className='data-process-text'>
                                            Team Augmentation
                                        </span>
                                    </Link>
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
                                                <a href='https://www.youtube.com/watch?v=rn1v6nod--E' target='_blank'>
                                                    <div data-aos="fade-up">
                                                        <img src={imagePaths.imageVideo1} alt='' />
                                                        <span className='btn-video'>
                                                            <img src={imagePaths.image18} alt='' />
                                                        </span>
                                                    </div>
                                                </a>
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
                                                <a href='https://www.youtube.com/watch?v=9JF7rnMgKKg&t=446s' target='_blank'>
                                                    <div data-aos="fade-up">
                                                        <img src={imagePaths.imageVideo2} alt='' />
                                                        <span className='btn-video'>
                                                            <img src={imagePaths.image18} alt='' />
                                                        </span>
                                                    </div>
                                                </a>
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
                                                <a href='https://www.youtube.com/watch?v=rEJ1V48lrc0' target='_blank'>
                                                    <div data-aos="fade-up">
                                                        <img src={imagePaths.imageVideo3} alt='' />
                                                        <span className='btn-video'>
                                                            <img src={imagePaths.image18} alt='' />
                                                        </span>
                                                    </div>
                                                </a>
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
                                <div data-aos="fade-right">
                                    <img src={imagePaths.image9} alt='' />
                                </div>
                                <br></br>
                                <span>Speed</span>
                            </p>

                            <p>
                                <div data-aos="fade-right">
                                    <img src={imagePaths.image10} alt='' />
                                </div>
                                <br></br>
                                <span>Management</span>
                            </p>

                            <p>
                                <div data-aos="fade-right">
                                    <img src={imagePaths.image11} alt='' />
                                </div>
                                <br></br>
                                <span>Cost</span>
                            </p>

                            <p>
                                <div data-aos="fade-right">
                                    <img src={imagePaths.image12} alt='' />
                                </div>
                                <br></br>
                                <span>Infrastructure</span>
                            </p>

                            <p>
                                <div data-aos="fade-right">
                                    <img src={imagePaths.image13} alt='' />
                                </div>
                                <br></br>
                                <span>Fexibility</span>
                            </p>

                            <p>
                                <div data-aos="fade-right">
                                    <img src={imagePaths.image14} alt='' />
                                </div>
                                <br></br>
                                <span>Quality</span>
                            </p>
                        </div>
                        <div className='button-div'>
                            <div className='link-button'>
                                <a className='link-button-a' href="/About#why-arcgate" >LEARN MORE</a>
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
                                                        <a href='https://www.youtube.com/watch?v=ux_FiVC4eVM' target='_blank'>
                                                            <div data-aos="fade-up">
                                                                <img src={imagePaths.image15} alt='' />
                                                                <span className='btn-play'>
                                                                    <img src={imagePaths.image18} alt='' />
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div className='thumb'>
                                                        <a href='https://www.youtube.com/watch?v=0dEGFOtAsZs' target='_blank'>
                                                            <div data-aos="fade-up">
                                                                <img src={imagePaths.image16} alt='' />
                                                                <span className='btn-play'>
                                                                    <img src={imagePaths.image18} alt='' />
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div className='thumb'>
                                                        <a href='https://www.youtube.com/watch?v=O97QHjU-i-Y' target='_blank'>
                                                            <div data-aos="fade-up">
                                                                <img src={imagePaths.image17} alt='' />
                                                                <span className='btn-play'>
                                                                    <img src={imagePaths.image18} alt='' />
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='button-div'>
                                    <div className='link-button'>
                                        <a href='/Career'>SEE CAREERS</a>
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

                            <div className='blog-content'>
                                <Link to='/blog1'>
                                    <div className='blog-div'>
                                        <div data-aos="fade-up">
                                            <img src={imagePaths.imageBlog1} alt='' />
                                        </div>
                                    </div>
                                    <div className='thumb-blog'>
                                    </div>
                                </Link>
                            </div>

                            <div className='blog-content'>
                                <Link to='/blog2'>
                                    <div className='blog-div'>
                                        <div data-aos="fade-up">
                                            <img src={imagePaths.imageBlog2} alt='' />
                                        </div>
                                    </div>
                                    <div className='thumb-blog'>

                                    </div>
                                </Link>

                            </div>

                            <div className='blog-content'>
                                <Link to='/blog3'>
                                    <div className='blog-div'>
                                        <div data-aos="fade-up">
                                            <img src={imagePaths.imageBlog3} alt='' />
                                        </div>
                                    </div>
                                    <div className='thumb-blog'>

                                    </div>
                                </Link>
                            </div>

                        </div>
                        <div className='button-div'>
                            <div className='button-div-link'>
                                <a href='/blogView'>VIEW ALL</a>
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
                                        <Link to="/podcast1">
                                            <p>Food tech startups are leveraging artificial intelligence and image recognition</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast2">
                                            <p>Real Estate Tech Space to Witness a Boost in Investments</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast3">
                                            <p>Rewriting the Ecommerce Strategy and Reinventing Retail</p>
                                        </Link>
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
                                <a href=''>FOLLOW US</a>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            {isVisible && (
                <>
                    <div className="top-btn" onClick={goToBtn}>
                        <img src={FaArrowUp} className="top-btn--icon" />
                    </div>
                    <div className='icon-text'>
                        BACK TO TOP
                    </div>
                </>
            )}
        </div>
    )
}

export default BodyContainer
