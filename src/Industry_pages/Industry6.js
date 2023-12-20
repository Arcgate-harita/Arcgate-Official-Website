import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry_para";
import IndustryPara from './Industry_para';
import { Link } from "react-router-dom";

function Industry6() {
    return (
        <div className='industry-container'>
            <article>
                <section className='industry-section1-e'>
                    <div className='industry-content1'>
                        <h1>Marketplaces & eCommerce</h1>
                        <center>
                            <p>Internet and mobile technologies have fundamentally transformed how people connect, share ideas, and do business.</p>
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='industry-section2'>
                    <div className='industry-content2'>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph12}</p>
                                    <p></p>
                                    <p>{section.paragraph13}</p>
                                    <p></p>
                                    <p>{section.paragraph14}</p>
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
                                        <img src={imagePaths.reporting21} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Order Management
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting22} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Order Tracking
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting23} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Customer Support 
                                    </span>
                                    <br></br>
                                </a>
                            </div>

                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting24} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Recommendation Engine Training Data
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
                                    <Link to='/blog11'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog12} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>

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


export default Industry6
