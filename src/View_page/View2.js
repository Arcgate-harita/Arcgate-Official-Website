import React from 'react';
import "../View_page/View.css";
import imagePaths from '../imagePath';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import ViewPara from './view_para';

function View2() {

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
                <Link to="/testing1">
                <span className='span-image'>        
                  <img src={imagePaths.clientLogo3} />
                </span>
                </Link>
                <br></br>
                <span className='span-text'>ADTECH</span>
                <br></br>
              </div>
              <div className='view-body'>
              <Link to="/testing2">
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
              <Link to="/testing3">
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
              <Link to="/testing4">
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
              <Link to="/testing5">
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
              <Link to="/testing6">
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.clientLogo7} />
                  <br></br>
                </span >
                </Link>
                <span className='span-text'>Marketplace & Ecommerce</span>
                <br></br>
              </div>
              </div>
              <br></br>
            </div>
            <br></br>
          </div>
        </section>
      </article>
    </div>
  )
}


export default View2
