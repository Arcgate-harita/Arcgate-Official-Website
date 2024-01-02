import React from 'react';
import { useState, useEffect } from 'react';
import imagePaths from '../imagePath'
import "../bpo_pages/order_management.css";
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

function OrderManagement() {

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
    <div className='order-container'>
      <article>
        <section className='order-section1'>
          <div className='order-content1'>
            <h1>Order Management</h1>
            <p></p>
            <h2>Arcgate helps fast growing companies increase revenue with higher order accuracy and shorter order entry and fulfillment times.</h2>
            <p></p>
          </div>
        </section>

        <section className='order-section2'>
          <div className='order-content2'>
            <div className='order-div2'>
              <h2>Using industry best practices, the improved order management processes result in a superior customer experience, better service levels, and cost savings.</h2>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <div data-aos="fade-in">
                      <img src={imagePaths.order1} alt='' />
                    </div>
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Order Entry
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <div data-aos="fade-in">
                      <img src={imagePaths.order2} alt='' />
                    </div>
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Order Fulfillment
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <div data-aos="fade-in">
                      <img src={imagePaths.order3} alt='' />
                    </div>
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Order Tracking
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <div data-aos="fade-in">
                      <img src={imagePaths.order4} alt='' />
                    </div>
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Cancellations
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <div data-aos="fade-in">
                      <img src={imagePaths.order5} alt='' />
                    </div>
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Reporting & Analytics
                  </span>
                  <br></br>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='order-section3'>
          <div className='order-content3'>
            <div className='order-div3'>
              <div className='order-body3'>
                <div data-aos="fade-up">
                  <div className='order-data'>
                    <p>We help clients identify and manage order exceptions and standardize the order management business process. A reduction in on-hold orders results in improved cycle times and revenue recognition.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
              <div className='order-body3'>
                <div data-aos="fade-up">
                  <div className='order-data'>
                    <p>Our project leadership team closely tracks operational efficiency and effectiveness metrics, such as SLAs, Turnaround time (TAT) and transaction accuracy.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
              <div className='order-body3'>
                <div data-aos="fade-up">
                  <div className='order-data'>
                    <p>The result is reduced average cost of order processing and ability to scale up quickly during promotional events and holidays.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='data-section3-blog'>
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
                      <Link to='/blog20'></Link>
                    </p>
                    <Link to='/blog20'>
                      <h2>Navigating through the ecommerce world</h2>
                    </Link>
                    <p>
                      <Link to='/blog20'></Link>
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

export default OrderManagement
