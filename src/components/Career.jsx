import React, { useState, useEffect } from "react";
import "../components/Career.css";
import imagePaths from '../imagePath';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaArrowUp from "../images/arrow-up.png";


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

function Career() {


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
        <div className='career-container'>
            <article>
                <section className='career-section1'>
                    <div className='career-content1'>
                        <h1 id='arcgatian'>Become an Arcgatian</h1>
                        <div className='career-div1'>
              <p data-aos="fade-left" className='orange'>WE THRIVE ON EXPERIENCE</p>
              <p data-aos="fade-right" className='lightBlue'>WE CRAVE FOR INNOVATION</p>
              <p data-aos="fade-left" className='lightGreen'>WE WORK TOWARDS SETTING AN EXAMPLE FOR OUR CLIENTS WITH OUR CONDUCT, WORK AND PROFESSIONALISM</p>
              <p data-aos="fade-right" className='red'>WE WORK HARD AND LAUGH A LOT</p>
              <p data-aos="fade-left" className='pink'>WE ENSURE A GREAT WORK ENVIRONMENT FOR WOMEN</p>
              <p data-aos="fade-right" className='darkGreen'>WE’RE AT THE FOREFRONT OF THE OUTSOURCING REVOLUTION FOR STARTUPS</p>
              <p data-aos="fade-left" className='darkBlue'>WE TAKE PRIDE IN BEING PART OF OUR CLIENTS’ SUCCESS; NO MATTER HOW BIG OR SMALL OUR CONTRIBUTION</p>
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
                                                <div data-aos="fade-up">
                                                    <img src={imagePaths.imageVideo3} alt='' />
                                                    <span className='btn-video'>
                                                        <img src={imagePaths.image18} alt='' />
                                                    </span>
                                                </div>
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
                                                <div data-aos="fade-up">
                                                    <img src={imagePaths.imageVideo2} alt='' />
                                                    <span className='btn-video'>
                                                        <img src={imagePaths.image18} alt='' />
                                                    </span>
                                                </div>
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
                                                <div data-aos="fade-up">
                                                    <img src={imagePaths.imageVideo01} alt='' />
                                                    <span className='btn-video'>
                                                        <img src={imagePaths.image18} alt='' />
                                                    </span>
                                                </div>
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
                                                    <div data-aos="fade-up">
                                                        <div className='thumb'>
                                                            <img src={imagePaths.videoImage1} alt='' />
                                                            <span className='btn-play'>
                                                                <img src={imagePaths.image18} alt='' />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div data-aos="fade-up">
                                                        <div className='thumb'>
                                                            <img src={imagePaths.videoImage2} alt='' />
                                                            <span className='btn-play'>
                                                                <img src={imagePaths.image18} alt='' />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='video-blog1'>
                                            <div className='blog-pic'>
                                                <a className='blog-text'>
                                                    <div data-aos="fade-up">
                                                        <div className='thumb'>
                                                            <img src={imagePaths.videoImage3} alt='' />
                                                            <span className='btn-play'>
                                                                <img src={imagePaths.image18} alt='' />
                                                            </span>
                                                        </div>
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

                <section id='current-openings' className='career-section5'>
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

export default Career
