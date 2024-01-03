import React from 'react';
import "../technology_pages/QualityTesting.css";
import imagePaths from "../imagePath";
import { Link } from 'react-router-dom';
import TechnologyPara from './technology_para';
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


function QualityTesting() {
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
        <div className='quality-container'>
            <article>
                <section className='quality-section1'>
                    <div className='quality-content1'>
                        <h2>Quality Assurance (QA) & Testing Outsourcing</h2>
                        <p></p>
                        {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph1}</p>
                                <p></p>
                            </div>
                        ))}
                        <p></p>
                    </div>
                </section>

                <section className='quality-section2'>
                    <div className='quality-content2'>
                        <h2>Our Quality Assurance Outsourced Services</h2>
                        <p></p>
                        {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph2}</p>
                                <p></p>
                            </div>
                        ))}
                        <p></p>

                        <div className='quality-div2'>
                            <div className='quality-body2'>
                                <div data-aos="fade-in">
                                    <Link to="/quality1">
                                        <span className='quality-image'>
                                            <img src={imagePaths.testing1} alt='' />
                                        </span>
                                        <br></br>
                                        <span className='quality-text'>Manual Testing</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='quality-body2'>
                                <div data-aos="fade-in">
                                    <Link to="/quality2">
                                        <span className='quality-image'>
                                            <img src={imagePaths.testing2} alt='' />
                                        </span>
                                        <br></br>
                                        <span className='quality-text'>Automated Testing</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='quality-body2'>
                                <div data-aos="fade-in">
                                    <Link to="/quality3">
                                        <span className='quality-image'>
                                            <img src={imagePaths.testing3} alt='' />
                                        </span>
                                        <br></br>
                                        <span className='quality-text'>API Testing</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='quality-body2'>
                                <div data-aos="fade-in">
                                    <Link to="/quality4">
                                        <span className='quality-image'>
                                            <img src={imagePaths.testing4} alt='' />
                                        </span>
                                        <br></br>
                                        <span className='quality-text'>Performance Testing</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='quality-body2'>
                                <div data-aos="fade-in">
                                    <Link to="/quality5">
                                        <span className='quality-image'>
                                            <img src={imagePaths.testing5} alt='' />
                                        </span>
                                        <br></br>
                                        <span className='quality-text'>Accessbilty Testing</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='quality-body2'>
                                <div data-aos="fade-in">
                                    <Link to="/quality6">
                                        <span className='quality-image'>
                                            <img src={imagePaths.testing6} alt='' />
                                        </span>
                                        <br></br>
                                        <span className='quality-text'>Salesforce Testing</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='app-section3-1'>
                <div className='app-content3-1'>
                    <h1>How We Do It</h1>
                    <div className='app-div3'>
                        <div className='app-color1'>
                            <h3>
                            Requirement Gathering and Analysis
                            </h3>
                            <ul>
                                <li>Collect & understand the requirement</li>
                        <li>Determine the expectations and Use cases.</li>
                        <li>Validate understanding of the requirement</li>
                            </ul>
                           
                        </div>
                        <div className='app-color2'>
                            <h3>
                            Test Cases Development
                            </h3>
                            <ul>
                                <li>dentify all possible test scenarios</li>
                                <li>Write test cases ensuring 100% testing coverage.</li>
                                <li>Determine the functionality and prepare test data.</li>
                            </ul>
                        </div>
                        <div className='app-color3'>
                            <h3>
                             
                            Test Execution
                            </h3>
                            <ul>
                                <li>Manual and Automated test execution.
</li>
<li>Execute the test suite and validate the results.</li>
<li>Perform end to end testing on all test environmen</li>

                            </ul>
                        </div>
                        <div className='app-color4'>
                            <h3>
                               
                            Bug Tracking
                            </h3>
                            <ul>
                                <li>Track and Report all the defects.</li>
                                <li>Evaluate, monitor and prioritize the defects.</li>
                                <li>Distinguish blockers issues.</li>
                            </ul>
                        </div>
                        <div className='app-color5'>
                            <h3>
                               
                            Reporting
                            </h3>
                            <ul>
                                
                            <li>Record testing results with defect artifacts</li>
                            <li>Prepare a test report with all completion matrix.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



                <section className='app-section4'>
                    <div className='app-content4'>
                        <h1>Technology Expertise</h1>
                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>DataBase Testing</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.MysqlLogo} alt='' className='image1' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.RedisLogo} alt='' className='image2' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.PostLogo} alt='' className='image3' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Continuous Intregration Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.JenkinsLogo} alt='' className='image9' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.GItLogo} alt='' className='image10' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.BitbucketLogo} alt='' className='image11' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Automation Languages</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.JavaLogo} alt='' className='image16' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.PyhtonLogo} alt='' className='image17' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.NodeLogo} alt='' className='image18' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.jsLogo} alt='' className='image19' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Automation Techniques</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo18} alt='' className='image20' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo19} alt='' className='image21' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Testing Frameworks</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo15} alt='' className='image23' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo16} alt='' className='image24' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo17} alt='' className='image25' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Web Automation Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo13} alt='' className='image27' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo14} alt='' className='image28' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Mobile Automation Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo20} alt='' className='image31' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo13} alt='' className='image32' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>API Testing Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.postman} alt='' className='image31' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.SoapuiLogo} alt='' className='image32' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.JmeterLogo} alt='' className='image33' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Test Management Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo21} alt='' className='image31' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo22} alt='' className='image32' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo23} alt='' className='image33' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo24} alt='' className='image34' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo25} alt='' className='image34' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Defect Tracking Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo26} alt='' className='image27' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo27} alt='' className='image28' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo28} alt='' className='image29' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo25} alt='' className='image30' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo29} alt='' className='image30' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Performance Tracking Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo30} alt='' className='image31' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.JmeterLogo} alt='' className='image32' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo31} alt='' className='image33' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo32} alt='' className='image34' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='quality-section3'>
                    <div className='quality-content3'>
                        <div className='quality-div3'>
                            <h1>Why Arcgate for Quality Assurance & Testing?</h1>

                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.qa1} alt='' />
                                    </div>
                                    <p></p>
                                    <h2>Experience</h2>
                                    <p></p>
                                    {TechnologyPara.map((section, index) => (
                                        <div key={index}>
                                            <center>
                                                <p>{section.paragraph3}</p>
                                            </center>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.qa2} alt='' />
                                    </div>
                                    <p></p>
                                    <h2>Cost</h2>
                                    <p></p>
                                    {TechnologyPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph4}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div data-aos="fade-in">
                                    <div className='quality-element3'>
                                        <div className='quality-icon'>
                                            <img src={imagePaths.qa3} alt='' />
                                        </div>
                                        <p></p>
                                        <h2>Flexibility</h2>
                                        <p></p>
                                        {TechnologyPara.map((section, index) => (
                                            <div key={index}>
                                                <p>{section.paragraph5}</p>
                                                <p></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div data-aos="fade-in">
                                    <div className='quality-element3'>
                                        <div className='quality-icon'>
                                            <img src={imagePaths.qa4} alt='' />
                                        </div>
                                        <p></p>
                                        <h2>Speed</h2>
                                        <p></p>
                                        {TechnologyPara.map((section, index) => (
                                            <div key={index}>
                                                <p>{section.paragraph6}</p>
                                                <p></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div data-aos="fade-in">
                            {TechnologyPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph7}</p>
                                    <p></p>
                                </div>
                            ))}
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


            </article>
        </div>
    )
}

export default QualityTesting
