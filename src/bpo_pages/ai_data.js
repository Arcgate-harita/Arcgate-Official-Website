import React from 'react'
import imagePaths from '../imagePath';
import "../bpo_pages/ai_data.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

function Data() {
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
    <div className='data-container'>
      <article>
        <section className="data-section1">
          <div className="data-content1">
            <div className="data-left">
              <h1>Big Data and Artificial Intelligence (AI) Challenge</h1>
              <br></br>
              <h2>The harsh reality of Big Data and AI is that
                <span className="orange"> 90% of time is spent preparing data </span>
                before it can be useful. Data extraction, annotation, cleansing and enrichment is difficult, time consuming and repetitive.</h2>
                <br></br>
              <h2>Engineering and data scientist experts spend time doing
                <span className="orange"> data cleansing.</span></h2>
              <p></p>
            </div>
            <div className="data-right">
              <img src={imagePaths.agFront} alt='' />
            </div>
            <p></p>
          </div>
        </section>


        <section className="data-section2">
          <div className="data-content2">
            <div className="data-div2">
              <h1>The Pain in the Market Today</h1>
              <h2>Crowdsourced solutions come with
                <span className="orng"> data and intellectual property (IP) security risk.</span>
              </h2>
              <div className="market-today">
                <div className="data-left1">
                  <h3>Your data is sitting on an unknown person’s desktop in an unknown country.</h3>
                  <h3>Lack of true accountability and low specialized skills.</h3>
                  <p></p>
                </div>
                <div className="data-right2">
                  <h3>No formal resource onboarding, ongoing training or management.</h3>
                  <h3>Workflow not customized to your unique needs.</h3>
                  <p></p>
                </div>
              </div>
              <h2>In-house solutions to get the data ready is <span className='orng'>cumbersome, expensive and time-consuming.</span>
              </h2>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>


        <section className='data-section3'>
          <div className='data-content3'>
            <div className='data-left2'>
              <img src={imagePaths.solutionImage} alt='' />
            </div>
            <div className='data-right2'>
              <h1>The Solution –
                <span className='orng'>Arcgate</span>
              </h1>
              <p>Dun & Bradstreet ranked Arcgate as the
                <span className='orng'> Best Small & Medium Enterprise </span>
                in the IT & ITES sector in India.
              </p>
              <p>
                <span className='orng'>2000+ highly skilled full-time analysts </span>
                who have exclusively worked on multi-year engagements for a variety of market leading US customers.
              </p>
              <p>Highly secure, state-of-the-art 150,000 square feet delivery center with
                <span className='orng'> 24×7 </span>operations.
              </p>
              <p>We augment
                <span className='orng'> training of machine learning models </span>
                with human intelligence. The result is highly improved data precision and smarter algorithms.
              </p>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>

        <section className='data-section4'>
          <div className='data-content4'>
            <center>
              <h1>We help
                <span> AI and machine learning models
                  get better </span>with human intelligence. Get highly specialized annotated custom datasets to make your algorithms and applications smarter and more accurate. Our dedicated team of analysts will work with you to generate training data to solve a wide range of use cases.
              </h1>
            </center>
            <div className='data-div4'>
              <div className='data-body4'>
                <div className='data-image'>
                  <img src={imagePaths.machine1} alt='' />
                </div>
                <h6>Data Collection</h6>
                <ul>
                  <li>
                    <img src={imagePaths.data1} alt='' />Data Enrichment</li>
                  <li>
                    <img src={imagePaths.data2} alt='' />Data Entry</li>
                </ul>
              </div>

              <div className='data-body4'>
                <div className='data-image'>
                  <img src={imagePaths.machine2} alt='' />
                </div>
                <h6>Data Preparation</h6>
                <ul>
                  <li>
                    <img src={imagePaths.data3} alt='' />Content Tagging</li>
                  <li>
                    <img src={imagePaths.data4} alt='' />Transcription &
                    Classification</li>
                  <li>
                    <img src={imagePaths.data5} alt='' />Image & Video</li>
                </ul>
              </div>

              <div className='data-body4'>
                <div className='data-image'>
                  <img src={imagePaths.machine3} alt='' />
                </div>
                <h6>Algorithm Training</h6>
                <ul>
                  <li>
                    <img src={imagePaths.data6} alt='' />Search Relevance</li>
                  <li>
                    <img src={imagePaths.data7} alt='' />Visual Search</li>
                  <li>
                    <img src={imagePaths.data8} alt='' />Content Moderation</li>
                  <li>
                    <img src={imagePaths.data9} alt='' />Sentiment Analysis</li>
                  <li>
                    <img src={imagePaths.data10} alt='' />Chatbot Training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='data-section-blog'>
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
                      <Link to='/blog7'></Link>
                    </p>
                    <Link to='/blog7'>
                      <h2> Artificial Intelligence (AI) and Data</h2>
                    </Link>
                    <p>
                      <Link to='/blog7'></Link>
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
                      <Link to='/blog14'></Link>
                    </p>
                    <Link to='/blog14'>
                      <h2>Big Data and Artificial Intelligence (AI) Need Each Other</h2>
                    </Link>
                    <p>
                      <Link to='/blog14'></Link>
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
                      <Link to='/blog15'></Link>
                    </p>
                    <Link to='/blog15'>
                      <h2>Search Relevance and Conversion</h2>
                    </Link>
                    <p>
                      <Link to='/blog15'></Link>
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
                      <Link to='/blog23'></Link>
                    </p>
                    <Link to='/blog23'>
                      <h2>Big Data – Big Opportunity</h2>
                    </Link>
                    <p>
                      <Link to='/blog23'></Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='data-blogs5'>
                <div data-aos="fade-up">
                  <div className='data-blog-card'>
                    <div className='data-blog-image'>
                      <img src={imagePaths.blogLogo} alt='' />
                    </div>
                    <p>
                      <Link to='/blog13'></Link>
                    </p>
                    <Link to='/blog13'>
                      <h2>Startups and Back Office Process Outsourcing</h2>
                    </Link>
                    <p>
                      <Link to='/blog13'></Link>
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

export default Data
