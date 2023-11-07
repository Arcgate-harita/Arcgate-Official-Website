import React from 'react'
import imagePaths from '../imagePath';
import "../bpo_pages/ai_data.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Data() {
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
}, []);
  return (
    <div className='data-container'>
      <article>
        <section className="data-section1">
          <div className="data-content1">
            <div className="data-left">
              <h1>Big Data and Artificial Intelligence (AI) Challenge</h1>
              <h2>The harsh reality of Big Data and AI is that
                <span className="orange">90% of time is spent preparing data</span>
                before it can be useful. Data extraction, annotation, cleansing and enrichment is difficult, time consuming and repetitive.</h2>
              <h2>Engineering and data scientist experts spend time doing
                <span className="orange">data cleansing.</span></h2>
              <p></p>
            </div>
            <div className="data-right">
              <img src={imagePaths.agFront} alt='' />
            </div>
            <p></p>
          </div>
        </section>


        <section className="data-section2">
          <div className="data-content2">
            <div className="data-div2">
              <h1>The Pain in the Market Today</h1>
              <h2>Crowdsourced solutions come with
                <span className="orng"> data and intellectual property (IP) security risk.</span>
              </h2>
              <div className="market-today">
                <div className="data-left1">
                  <h3>Your data is sitting on an unknown person’s desktop in an unknown country.</h3>
                  <h3>Lack of true accountability and low specialized skills.</h3>
                  <p></p>
                </div>
                <div className="data-right2">
                  <h3>No formal resource onboarding, ongoing training or management.</h3>
                  <h3>Workflow not customized to your unique needs.</h3>
                  <p></p>
                </div>
              </div>
              <h2>In-house solutions to get the data ready is <span className='orng'>cumbersome, expensive and time-consuming.</span>
              </h2>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>


        <section className='data-section3'>
          <div className='data-content3'>
            <div className='data-left2'>
              <img src={imagePaths.solutionImage} alt='' />
            </div>
            <div className='data-right2'>
              <h1>The Solution –
                <span className='orng'>Arcgate</span>
              </h1>
              <p>Dun & Bradstreet ranked Arcgate as the
                <span className='orng'>Best Small & Medium Enterprise </span>
                in the IT & ITES sector in India.
              </p>
              <p>
                <span className='orng'>2000+ highly skilled full-time analysts</span>
                who have exclusively worked on multi-year engagements for a variety of market leading US customers.
              </p>
              <p>Highly secure, state-of-the-art 150,000 square feet delivery center with
                <span className='orng'>24×7</span>operations.
              </p>
              <p>We augment
                <span className='orng'>training of machine learning models</span>
                with human intelligence. The result is highly improved data precision and smarter algorithms.
              </p>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>

        <section className='data-section4'>
          <div className='data-content4'>
            <h1>We help
              <span>AI and machine learning models
                get better </span>with human intelligence. Get highly specialized annotated custom datasets to make your algorithms and applications smarter and more accurate. Our dedicated team of analysts will work with you to generate training data to solve a wide range of use cases.
            </h1>
            <div className='data-div4'>
              <div className='data-body4'>
                <div className='data-image'>
                <img src={imagePaths.machine1} alt='' />
                </div>
                <h6>Data Collection</h6>
                <ul>
                  <li>
                  <img src={imagePaths.data1} alt='' />Data Enrichment</li>
                  <li>
                  <img src={imagePaths.data2} alt='' />Data Entry</li>
                </ul>
              </div>

              <div className='data-body4'>
                <div className='data-image'>
                <img src={imagePaths.machine2} alt='' />
                </div>
                <h6>Data Preparation</h6>
                <ul>
                  <li>
                  <img src={imagePaths.data3} alt='' />Content Tagging</li>
                  <li>
                  <img src={imagePaths.data4} alt='' />Transcription </li>
                  <li>
                  <img src={imagePaths.data5} alt='' />Image & Video</li>
                </ul>
              </div>

              <div className='data-body4'>
                <div className='data-image'>
                <img src={imagePaths.machine3} alt='' />
                </div>
                <h6>Algorithm Training</h6>
                <ul>
                  <li>
                  <img src={imagePaths.data6} alt='' />Search Relevance</li>
                  <li>
                  <img src={imagePaths.data7} alt='' />Visual Search</li>
                  <li>
                  <img src={imagePaths.data8} alt='' />Content Moderation</li>
                  <li>
                  <img src={imagePaths.data9} alt='' />Sentiment Analysis</li>
                  <li>
                  <img src={imagePaths.data10} alt='' />Chatbot Training</li>
                </ul>
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
                                <Link to='/blog1'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.imageBlog1} alt='' />
                                    </div>
                                    <div className='thumb-blogView'>
                                        <p>Retail in India and Future Trends</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='blogView-container1'>
                            <div className='blogView-content2'>
                                <Link to='/blog2'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.imageBlog2} alt='' />
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
                                <Link to='/blog3'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.imageBlog3} alt='' />
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
                                <Link to='/blog4'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.blog3} alt='' />
                                    </div>
                                    <div className='thumb-blogView'>
                                        <p>
                                           </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='blogView-container1'>
                            <div className='blogView-content2'>
                                <Link to='/blog5'>
                                    <div className='blogView-div'>
                                        <img src={imagePaths.blog4} alt='' />
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

export default Data
