import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import IndustryPara from './Industry_para';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function Industry3() {

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
        <div className='industry-container'>
            <article>
                <section className='industry-section1-b'>
                    <div className='industry-content1'>
                        <h1>Real Estate Tech</h1>
                        <p></p>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph6}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='industry-section2'>
                    <div className='industry-content2'>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph7}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <div className='industry-div2'>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting9} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Lease and Sale Listings Management
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting10} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Agent and Broker Onboarding
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting11} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Brokerages and Agents Support
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting12} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Deal Portfolio Management
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting13} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Lease and Sale Data Analysis
                                    </span>
                                    <br></br>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>




                <section className='data-section-blog-3'>
          <div className='data-content-blog'>
            <h6>INSIGHTS</h6>
            <div className='data-body-blog'>
              <div className='data-blogs1'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.blogLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/blog22'></Link>
                    </p>
                    <Link to='/blog22'>
                      <h2> Commercial real estate industry tech transformation</h2>
                    </Link>
                    <p>
                      <Link to='/blog22'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs2'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.blogLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/blog26'></Link>
                    </p>
                    <Link to='/blog26'>
                      <h2>Make room for real estate technology</h2>
                    </Link>
                    <p>
                      <Link to='/blog26'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs3'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.podcastLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/podcast1'></Link>
                    </p>
                    <Link to='/podcast1'>
                      <h2>Real Estate Tech – A promising space for investors and venture capitalists in 2018</h2>
                    </Link>
                    <p>
                      <Link to='/podcast1'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs4'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.podcastLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/podcast8'></Link>
                    </p>
                    <Link to='/podcast8'>
                      <h2>Real estate tech space to witness a boost in investments</h2>
                    </Link>
                    <p>
                      <Link to='/podcast8'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs5'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.podcastLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/podcast10'></Link>
                    </p>
                    <Link to='/podcast10'>
                      <h2>Real estate tech is building the industry’s future</h2>
                    </Link>
                    <p>
                      <Link to='/podcast10'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs6'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.podcastLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/podcast18'></Link>
                    </p>
                    <Link to='/podcast18'>
                      <h2>The shiny new trends in real estate industry: Technology and big data</h2>
                    </Link>
                    <p>
                      <Link to='/podcast18'></Link>
                    </p>
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

        </div >
    )
}


export default Industry3
