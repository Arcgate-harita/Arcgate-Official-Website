import React from 'react';
import "../bpo_pages/account_outsourcing.css";
import imagePaths from '../imagePath';
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

function AccountOutsourcing() {

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
    <div className='account-container'>
      <article>
        <section className='account-section1'>
          <div className='account-content1'>
            <h1>Accounting & Finance Outsourcing Services</h1>
            <p></p>
          </div>
        </section>

        <section className='account-section2'>
          <div className='account-content2'>'
            <div className='account-div'>
              <div className='account-body1'>
                <div data-aos="fade-in">
                  <a>
                    <span className='span-image'>
                      <img src={imagePaths.account1} />
                      <br></br>
                    </span>
                    <br></br>
                    <br></br>
                    <span className='span-text'>Invoice Reconciliation & Approval</span>
                  </a>
                </div>
              </div>
              <div className='account-body2'>
                <div data-aos="fade-in">
                  <span className='span-image'>
                    <img src={imagePaths.account2} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Invoice Creation</span>
                </div>
              </div>
              <div className='account-body3'>
                <div data-aos="fade-in">
                  <span className='span-image'>
                    <img src={imagePaths.account3} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Bank Statement Reconciliation</span>
                </div>
              </div>
              <div className='account-body4'>
                <div data-aos="fade-in">
                  <span className='span-image'>
                    <img src={imagePaths.account4} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Vendor Statement Review</span>
                </div>
              </div>
              <div className='account-body5'>
                <div data-aos="fade-in">
                  <span className='span-image'>
                    <img src={imagePaths.account5} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>PO Processing</span>
                </div>
              </div>
              <div className='account-body6'>
                <div data-aos="fade-in">
                  <span className='span-image'>
                    <img src={imagePaths.account6} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Vendor Onboarding</span>
                </div>
              </div>
              <div className='account-body7'>
                <div data-aos="fade-in">
                  <span className='span-image'>
                    <img src={imagePaths.account7} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Reporting & Analytics</span>
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


export default AccountOutsourcing
