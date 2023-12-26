import React from 'react';
import { useState, useEffect } from 'react';
import imagePaths from '../imagePath';
import "../bpo_pages/transcription.css";
import goToTop from "../images/goto_top.png";

function Transcription() {

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
    <div className='trans-container'>
      <article>
        <section className='trans-section1'>
          <div className='trans-content1'>
            <h1>Transcription</h1>
            <p></p>
            <h2>x
              OCR is not always 100% accurate and at times not possible due to the way the source data needs to be interpreted and mapped to your data structure.</h2>
            <p></p>
          </div>
        </section>

        <section className='trans-section2'>
          <div className='trans-content2'>
            <div className='trans-div2'>
              <h2>
                Our team of human experts can help make sure that the data from images, PDFs and scanned documents is understood and entered accurately in your application. You can leverage the human generated data sets to train your algorithms and improve your machine learning models over time.</h2>
              <div className='trans-body2'>
                <a>
                  <br></br>
                  <span className='trans-image'>
                    <br></br>
                    <img src={imagePaths.trans1} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='trans-text'>
                    Order Entry
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='trans-body2'>
                <a>
                  <br></br>
                  <span className='trans-image'>
                    <br></br>
                    <img src={imagePaths.trans2} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='trans-text'>
                    Order Fulfillment
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='trans-body2'>
                <a>
                  <br></br>
                  <span className='trans-image'>
                    <br></br>
                    <img src={imagePaths.trans3} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='trans-text'>
                    Order Tracking
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='trans-body2'>
                <a>
                  <br></br>
                  <span className='trans-image'>
                    <br></br>
                    <img src={imagePaths.trans4} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='trans-text'>
                    Cancellations
                  </span>
                  <br></br>
                </a>
              </div>
              <p></p>
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

export default Transcription
