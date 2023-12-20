import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import IndustryPara from './Industry_para';
import { Link } from "react-router-dom";

function Industry3() {
    return (
        <div className='industry-container'>
            <article>
                <section className='industry-section1-b'>
                    <div className='industry-content1'>
                        <h1>Real Estate Tech</h1>
                        <p></p>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph6}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='industry-section2'>
                    <div className='industry-content2'>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph7}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <div className='industry-div2'>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting9} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Lease and Sale Listings Management
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting10} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Agent and Broker Onboarding
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting11} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Brokerages and Agents Support
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting12} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Deal Portfolio Management
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting13} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Lease and Sale Data Analysis
                                    </span>
                                    <br></br>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>





                <section className='blogView-section2'>
                    <div className='blogView-div2'>
                        <h6>INSIGHTS</h6>
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

                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog6'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog5} alt='' />
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
        </div >
    )
}


export default Industry3
