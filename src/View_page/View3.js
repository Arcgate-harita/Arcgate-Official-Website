import React from 'react';
import "../View_page/View.css";
import imagePaths from '../imagePath';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function View3() {


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
        <section className='view-insight-section1'>
          <div className='view-content1'>
            <h1>Insights</h1>
            <p></p>
          </div>
        </section>

        <section className='view-insight-section2'>
          <div className='view-content2'>
            <div className='view-div'>
              <div className='view-insight-row1'>
                <div className='view-body'>
                  <br></br>
                  <Link to="/blogView">
                    <span className='span-image'>
                      <img src={imagePaths.insight1} />
                    </span>
                  </Link>
                  <br></br>
                  <span className='span-text'>Blog</span>
                  <br></br>
                </div>
                <div className='view-body'>
                  <Link to="/podcast">
                    <span className='span-image'>
                      <br></br>
                      <img src={imagePaths.insight2} />
                      <br></br>
                    </span>
                  </Link>
                  <span className='span-text'>Podcasts</span>
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


export default View3
