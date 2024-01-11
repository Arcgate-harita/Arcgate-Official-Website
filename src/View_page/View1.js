import React from 'react'
import "../bpo_pages/data_solution.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function View1() {

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
    <div className='solution-container'>
      <article>
        <section className='solution-section1-2'>
          <div className='solution-content1'>
            <h1>Business Process Outsourcing (BPO) Services</h1>
            <h2>We offer a proven commitment to quality, accuracy, scale, speed and low costs when delivering Data Management and Business Process Outsourcing (BPO) services.</h2>
            <p></p>
          </div>
        </section>

        <section className='solution-section2'>
          <div className='solution-content2'>
            <div className='solution-div2'>
              <div className='data-solution-type1'>
                <Link to="/accounting_outsourcing">
                  <span className='data-solution-image'>
                    <img src={imagePaths.ica1} alt='' />
                  </span>
                  <span className='data-solution-text'>
                  Accounting Outsourcing
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/ai-data-preparation'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.ica2} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    AI-Data Preparation
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/data-solution'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.ica3} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Solutions
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/customer-onboarding-support'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.ica4} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Customer Onboarding Support
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/order-management'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.ica5} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Order Management
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/transcription'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.ica6} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Transcription
                  </span>
                </Link>
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

export default View1
