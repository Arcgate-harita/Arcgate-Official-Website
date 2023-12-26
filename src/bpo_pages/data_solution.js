import React from 'react'
import { useState, useEffect } from 'react';
import "../bpo_pages/data_solution.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
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

function DataSolution() {

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
        <section className='solution-section1'>
          <div className='solution-content1'>
            <h1>Data Solutions</h1>
            <h2>We take care of enriching and preparing your data so your data scientists and operations experts can focus on doing sophisticated analytics and running the business.</h2>
            <p></p>
          </div>
        </section>

        <section className='solution-section2'>
          <div className='solution-content2'>
            <div className='solution-div2'>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <Link to="/data1">
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon8} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Data Enrichment
                    </span>
                  </Link>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <Link to="/data2">
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon1} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Data Entry
                    </span>
                  </Link>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <Link to='/data3'>
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon2} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Data Collection
                    </span>
                  </Link>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <Link to='/data4'>
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon3} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Data Categorization
                    </span>
                  </Link>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <a href='/data5'>
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon4} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Data Cleansing
                    </span>
                  </a>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-i">
                  <Link to='/data6'>
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon5} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Data deduplication
                    </span>
                  </Link>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <Link to='/data7'>
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon6} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Reporting
                    </span>
                  </Link>
                </div>
              </div>

              <div className='data-solution-type1'>
                <div data-aos="fade-in">
                  <Link to='/data8'>
                    <span className='data-solution-image'>
                      <img src={imagePaths.icon7} alt='' />
                    </span>
                    <span className='data-solution-text'>
                      Analytics
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='solution-section3'>
          <div className='solution-content3'>
            <div className='solution-div3'>

              <div className='solution-body'>
                <div data-aos="fade-up">
                  <div className='solution-data'>
                    <p>Data extraction, integration, cleansing and enrichment is difficult, time consuming and repetitive. The problem with Big Data is partly that there is large volume of it, but mostly that we are often trying to integrate multiple disparate structured and unstructured sources. Combining varied data sources means that for each source we have to determine how to clean, format, and integrate it. The more sources and types of data, the more plumbing work is required.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>

              <div className='solution-body'>
                <div data-aos="fade-up">
                  <div className='solution-data'>
                    <p>Machine learning, supplemented with human data experts can help your Big Data and AI platform continuously and incrementally improve over time. Obviously the machine learning algorithms are more efficient, but not efficient unless your data has gone through proper curation. Getting to trustworthy data to make good and timely decisions is a huge challenge that we aim to solve.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>

              <div className='solution-body'>
                <div data-aos="fade-up">
                  <div className='solution-data'>
                    <p>Our team of 2000+ full-time human experts help improve data precision and dramatically reduce the time and effort required to connect and enrich internal and external data sources at scale and low cost. We partner with you to ensure that you collect, organize and ingest clean data into your transaction and analytical databases.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='data-section1-blog'>
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
                      <Link to='/blog25'></Link>
                    </p>
                    <Link to='/blog25'>
                      <h2>Data value chain</h2>
                    </Link>
                    <p>
                      <Link to='/blog25'></Link>
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
                      <Link to='/blog21'></Link>
                    </p>
                    <Link to='/blog21'>
                      <h2>The Great Data Dash</h2>
                    </Link>
                    <p>
                      <Link to='/blog21'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs3'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.blogLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/blog38'></Link>
                    </p>
                    <Link to='/blog38'>
                      <h2>Crawlers and data quality</h2>
                    </Link>
                    <p>
                      <Link to='/blog38'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs4'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.blogLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/blog37'></Link>
                    </p>
                    <Link to='/blog37'>
                      <h2>Business intelligence and dashboards</h2>
                    </Link>
                    <p>
                      <Link to='/blog37'></Link>
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


    </div>
  )
}

export default DataSolution
