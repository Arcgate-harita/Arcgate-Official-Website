import React from 'react'
import "../bpo_pages/data_solution.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';

function view1() {
  return (
    <div className='solution-container'>
      <article>
        <section className='solution-section1'>
          <div className='solution-content1'>
            <h1>Business Process Outsourcing (BPO) Services</h1>
            <h2>We offer a proven commitment to quality, accuracy, scale, speed and low costs when delivering Data Management and Business Process Outsourcing (BPO) services.</h2>
            <p></p>
          </div>
        </section>

        <section className='solution-section2'>
          <div className='solution-content2'>
            <div className='solution-div2'>
              <div className='data-solution-type1'>
              <Link to="/accounting_outsourcing">
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon8} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Account Outsourcing
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
              <Link to='/ai-data-preparation'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon1} alt='' />
                  </span>
                  <span className='data-solution-text'>
                   AI-Data Preparation
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
              <Link to='/data-solution'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon2} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Solutions
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
              <Link to='/customer-onboarding-support'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon3} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Customer Onboarding Support
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
              <Link to='/order-management'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon4} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Order Management
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
              <Link to='/transcription'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon5} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Transcription
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

     
      
      </article>
    </div>
  )
}

export default view1
