import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function Industry2() {

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
        <div className='industry-container'>
            <article>
                <section className='industry-section1-a'>
                    <div className='industry-content1'>
                        <h1>Food Tech</h1>
                        <p></p>
                        <center>
                            <h2>We have years of deep experience helping successful food tech startups ensure they have the most comprehensive and accurate data on menus and restaurants.</h2>
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='industry-section2'>
                    <div className='industry-content2'>
                        <div className='industry-div2'>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting6} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Menu Creation
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting7} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Menu Updates
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting8} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Business Profile Setup 
                                    </span>
                                    <br></br>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>





                <section className='data-section-blog-2'>
          <div className='data-content-blog-1'>
            <h6>INSIGHTS</h6>
            <div className='data-body-blog'>
              <div className='data-blogs1'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.blogLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/blog11'></Link>
                    </p>
                    <Link to='/blog11'>
                      <h2>Food startups build an appetite for artificial intelligence</h2>
                    </Link>
                    <p>
                      <Link to='/blog11'></Link>
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
                      <Link to='/blog27'></Link>
                    </p>
                    <Link to='/blog27'>
                      <h2>Think food, think tech</h2>
                    </Link>
                    <p>
                      <Link to='/blog27'></Link>
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
                      <Link to='/podcast17'></Link>
                    </p>
                    <Link to='/podcast17'>
                      <h2>Food industry needs to adapt to big data analytics and technology</h2>
                    </Link>
                    <p>
                      <Link to='/podcast17'></Link>
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
                      <Link to='/podcast1'></Link>
                    </p>
                    <Link to='/podcast1'>
                      <h2>Food tech startups are leveraging artificial intelligence and image recoginition</h2>
                    </Link>
                    <p>
                      <Link to='/podcast1'></Link>
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
                      <Link to='/podcast15'></Link>
                    </p>
                    <Link to='/podcast15'>
                      <h2>Adapt technology to move forward or leave money on the table </h2>
                    </Link>
                    <p>
                      <Link to='/podcast15'></Link>
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


export default Industry2
