import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import IndustryPara from "./Industry_para";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function Industry1() {

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
        <div className='industry-container'>
            <article>
                <section className='industry-section1'>
                    <div className='industry-content1'>
                        <h1>Adtech</h1>
                        <p></p>
                        <center>
                            <h2>Arcgate helps companies leading innovation in the advertising industry with data categorization, tagging, reporting and improving ad-matching relevance</h2>
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='industry-section2'>
                    <div className='industry-content2'>
                        <div className='industry-div2'>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting1} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Reporting
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting2} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Analytics
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting3} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Ad Relevance Training Data
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting4} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Content & Media Classification
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting5} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Customer Onboarding & Support
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='industry-section3'>
                    <div className='industry-content3'>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph1}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <div className='industry-div3'>
                            <div className='industry-body'>
                                <div className='industry-data'>
                                    {IndustryPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph2}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                    <p></p>
                                </div>
                                <p></p>
                            </div>
                            <div className='industry-body'>
                                <div className='industry-data'>
                                    {IndustryPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph3}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                    <p></p>
                                </div>
                                <p></p>
                            </div>
                            <div className='industry-body'>
                                <div className='industry-data'>
                                    {IndustryPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph4}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                    <p></p>
                                </div>
                                <p></p>
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
                                    <Link to='/blog17'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog16} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog18'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog17} alt='' />
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


export default Industry1
