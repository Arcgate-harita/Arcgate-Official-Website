import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import IndustryPara from './Industry_para';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function Industry5() {

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
                <section className='industry-section1-d'>
                    <div className='industry-content1'>
                        <h1>Sharing Economy</h1>
                        <p></p>
                        <center>
                            {IndustryPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph10}</p>
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
                                    <p>{section.paragraph11}</p>
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
                                        <img src={imagePaths.reporting1} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Application Verification
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting18} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Payment Verification
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting19} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Reporting & Analytics 
                                    </span>
                                    <br></br>
                                </a>
                            </div>

                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting20} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Fraud Management 
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

        </div >
    )
}


export default Industry5
