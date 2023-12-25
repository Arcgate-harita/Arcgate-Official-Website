import React from 'react';
import "../bpo_pages/account_outsourcing.css";
import imagePaths from '../imagePath';
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

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
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>Invoice Reconciliation & Approval</span>
              </div>
              <div className='account-body2'>
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>Invoice Creation</span>
              </div>
              <div className='account-body3'>
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>Bank Statement Reconciliation</span>
              </div>
              <div className='account-body4'>
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>Vendor Statement Review</span>
              </div>
              <div className='account-body5'>
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>PO Processing</span>
              </div>
              <div className='account-body6'>
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>Vendor Onboarding</span>
              </div>
              <div className='account-body7'>
                <span className='span-image'>
                  <img src={imagePaths.account1} />
                </span>
                <br></br>
                <span className='span-text'>Reporting & Analytics</span>
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
