import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import IndustryPara from './Industry_para';
import { Link } from "react-router-dom";

function Industry4() {
    return (
        <div className='industry-container'>
            <article>
                <section className='industry-section1-c'>
                    <div className='industry-content1'>
                        <h1>Oil & Energy</h1>
                        <p></p>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph8}</p>
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
                                    <p>{section.paragraph9}</p>
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
                                        <img src={imagePaths.reporting14} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Public Filings Data Extraction
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting15} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Data Collection
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting16} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Data Enrichment 
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
                        </div>
                    </div>
                </section>


            </article>
        </div >
    )
}


export default Industry4
