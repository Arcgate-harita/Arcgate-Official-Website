import React from 'react'
import "../bpo_pages/data_solution.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';

function data_solution() {
  return (
    <div className='solution-container'>
      <article>
        <section className='solution-section1'>
          <div className='solution-content1'>
            <h1>Data Solutions</h1>
            <h2>We take care of enriching and preparing your data so your data scientists and operations experts can focus on doing sophisticated analytics and running the business.</h2>
            <p></p>
          </div>
        </section>

        <section className='solution-section2'>
          '<div className='solution-content2'>
            <div className='solution-div2'>
              <div className='data-solution-type1'>
                <Link to="/data1">
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon8} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Enrichment
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to="/data2">
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon1} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Entry
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/data3'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon2} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Collection
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/data4'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon3} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Categorization
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <a href='/data5'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon4} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data Cleansing
                  </span>
                </a>
              </div>

              <div className='data-solution-type1'>
                <Link to='/data6'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon5} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Data deduplication
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/data7'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon6} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Reporting
                  </span>
                </Link>
              </div>

              <div className='data-solution-type1'>
                <Link to='/data8'>
                  <span className='data-solution-image'>
                    <img src={imagePaths.icon7} alt='' />
                  </span>
                  <span className='data-solution-text'>
                    Analytics
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='solution-section3'>
          <div className='solution-content3'>
            <div className='solution-div3'>
              <div className='solution-body'>
                <div className='solution-data'>
                  <p>Data extraction, integration, cleansing and enrichment is difficult, time consuming and repetitive. The problem with Big Data is partly that there is large volume of it, but mostly that we are often trying to integrate multiple disparate structured and unstructured sources. Combining varied data sources means that for each source we have to determine how to clean, format, and integrate it. The more sources and types of data, the more plumbing work is required.</p>
                  <p></p>
                </div>
                <p></p>
              </div>
              <div className='solution-body'>
                <div className='solution-data'>
                  <p>Machine learning, supplemented with human data experts can help your Big Data and AI platform continuously and incrementally improve over time. Obviously the machine learning algorithms are more efficient, but not efficient unless your data has gone through proper curation. Getting to trustworthy data to make good and timely decisions is a huge challenge that we aim to solve.</p>
                  <p></p>
                </div>
                <p></p>
              </div>
              <div className='solution-body'>
                <div className='solution-data'>
                  <p>Our team of 2000+ full-time human experts help improve data precision and dramatically reduce the time and effort required to connect and enrich internal and external data sources at scale and low cost. We partner with you to ensure that you collect, organize and ingest clean data into your transaction and analytical databases.</p>
                  <p></p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </section>

        <section className='blogView-section2'>
                  <div className='blogView-div2'>
                  <h6>MORE ARTICLES</h6>
                    <div className='blogView'>
                        <div className='blogView-container1'>
                            <div className='blogView-content2'>
                                <Link to='/blog25'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.blog24} alt='' />
                                    </div>
                                    <div className='thumb-blogView'>
                                        <p>Retail in India and Future Trends</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='blogView-container1'>
                            <div className='blogView-content2'>
                                <Link to='/blog21'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.blog20} alt='' />
                                    </div>
                                    <div className='thumb-blogView'>
                                        <p>
                                            Artificial Intelligence – The Exciting Future </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='blogView-container1'>
                            <div className='blogView-content2'>
                                <Link to='/blog38'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.blog37} alt='' />
                                    </div>
                                    <div className='thumb-blogView'>
                                        <p>
                                            Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='blogView-container1'>
                            <div className='blogView-content2'>
                                <Link to='/blog37'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.blog36} alt='' />
                                    </div>
                                    <div className='thumb-blogView'>
                                        <p>
                                           </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                   
                     </div>
                   
                   </div>
                </section>
      </article>
    </div>
  )
}

export default data_solution
