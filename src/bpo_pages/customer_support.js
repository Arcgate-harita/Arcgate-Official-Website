import React from 'react';
import { useState, useEffect } from "react";
import "../bpo_pages/customer_support.css";
import imagePaths from '../imagePath';
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

function CustomerSupport() {
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
    <div className='customer-container'>
      <article>
        <section className='customer-section1'>
          <div className='customer-content1'>
            <h1>Customer Onboarding & Support</h1>
            <p></p>
            <h2>When you outsource new customer onboarding and support to Arcgate, you ensure high quality, flexibility, scalability, and a commitment to excellence in service.</h2>
            <p></p>
          </div>
        </section>

        <section className='customer-section2'>
          <div className='customer-content2'>
            <div className='customer-div2'>
              <h2>In today’s highly competitive marketplace, you need to work harder to attract and retain every single customer. Your customers expect consistent, timely and personalized service.
                <br></br>
              </h2>

              <h2>Work with Arcgate to engage with your customers and make sure they have the best possible experience right from initial set up to ongoing technical and general support.</h2>

              <div className='customer-body2'>
                <a href=''>
                  <span className='customer-image'>
                    <img src={imagePaths.customer1} alt='' />
                  </span>
                  <br></br>
                  <span className='customer-text'>Customer Onboarding</span>
                  <br></br>
                  <span className='customer-para'>
                    <p></p>
                    <p>We help set up every new customer on your platform – the result is a seamless new customer onboarding process.</p>
                  </span>
                </a>
              </div>

              <div className='customer-body2'>
                <a href=''>
                  <span className='customer-image'>
                    <img src={imagePaths.customer2} alt='' />
                  </span>
                  <br></br>
                  <span className='customer-text'>Customer Care & Help Desk</span>
                  <br></br>
                  <span className='customer-para'>
                    <p></p>
                    <p>Fanatical service request management to ensure high customer satisfaction.</p>
                  </span>
                </a>
              </div>


            </div>
          </div>
        </section>
        <section className='data-section2-blog'>
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
                      <Link to='/blog18'></Link>
                    </p>
                    <Link to='/blog18'>
                      <h2>Delight your customer always!</h2>
                    </Link>
                    <p>
                      <Link to='/blog18'></Link>
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
                      <Link to='/blog16'></Link>
                    </p>
                    <Link to='/blog16'>
                      <h2>Online Reputation and Content Moderation</h2>
                    </Link>
                    <p>
                      <Link to='/blog16'></Link>
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

export default CustomerSupport
