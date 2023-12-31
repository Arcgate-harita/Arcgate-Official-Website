import React from 'react';
import "../View_page/View.css";
import imagePaths from '../imagePath';
import { Link } from "react-router-dom";
import ViewPara from './view_para';
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function View2() {

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
    <div className='view-container'>
      <article>
        <section className='view-section1'>
          <div className='view-content1'>
            <h1>Industries</h1>
            <p></p>
            <p>Deep, <span>industry specific expertise </span>across various sectors.</p>
            <p></p>
            {ViewPara.map((section, index) => (
              <div key={index}>
                <p>{section.paragraph1}</p>
                <p></p>
              </div>
            ))}
            <p></p>
          </div>
        </section>

        <section className='view-section2'>
          <div className='view-content2'>
            {ViewPara.map((section, index) => (
              <div key={index}>
                <p>{section.paragraph2}</p>
                <p></p>
              </div>
            ))}
            <div className='view-div'>
              <div className='view-row1'>
                <div className='view-body'>
                  <br></br>
                  <Link to="/Industry1">
                    <span className='span-image'>
                      <img src={imagePaths.clientLogo3} />
                    </span>
                  </Link>
                  <br></br>
                  <span className='span-text'>Adtech</span>
                  <br></br>
                </div>
                <div className='view-body'>
                  <Link to="/Industry2">
                    <span className='span-image'>
                      <br></br>
                      <img src={imagePaths.clientLogo4} />
                      <br></br>
                    </span>
                  </Link>
                  <span className='span-text'>Food Tech</span>
                  <br></br>
                </div>
                <div className='view-body'>
                  <Link to="/Industry3">
                    <span className='span-image'>
                      <br></br>
                      <img src={imagePaths.clientLogo5} />
                      <br></br>
                    </span>
                  </Link>
                  <span className='span-text'>Real Esate Tech</span>
                  <br></br>
                </div>
              </div>
              <div className='view-row2'>
                <div className='view-body'>
                  <Link to="/Industry4">
                    <span className='span-image'>
                      <br></br>
                      <img src={imagePaths.clientLogo1} />
                      <br></br>
                    </span>
                  </Link>
                  <span className='span-text'>Oil & Energy</span>
                  <br></br>
                </div>
                <div className='view-body'>
                  <Link to="/Industry5">
                    <span className='span-image'>
                      <br></br>
                      <img src={imagePaths.clientLogo6} />
                      <br></br>
                    </span>
                  </Link>
                  <span className='span-text'>Sharing Economy</span>
                  <br></br>
                </div>
                <div className='view-body'>
                  <Link to="/Industry6">
                    <span className='span-image'>
                      <br></br>
                      <img src={imagePaths.clientLogo7} />
                      <br></br>
                    </span >
                  </Link>
                  <span className='span-text'>Marketplace & eCommerce</span>
                  <br></br>
                </div>
              </div>
              <br></br>
            </div>
            <br></br>
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


export default View2
