import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function Quality3() {

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
        <div className='quality-container'>
            <article>
                <section className='quality-section1'>
                    <div className='quality-content1'>
                        <h2>API Testing Outsourcing</h2>
                        <p></p>
                        <center>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph22}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='quality-section3'>
                    <div className='quality-content3'>
                        <div className='quality-div3'>
                            <h1>Our API Testing Outsourced Services</h1>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph23}</p>
                                    <p></p>
                                </div>
                            ))}
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function14} alt='' />
                                    </div>
                                    <h2>Functional testing
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph24}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function15} alt='' />
                                    </div>
                                    <h2>Load testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph25}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function3} alt='' />
                                    </div>
                                    <h2>Compatibility testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph26}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function16} alt='' />
                                    </div>
                                    <h2>Negative testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph27}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function17} alt='' />
                                    </div>
                                    <h2>End-to-end testing
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph28}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function18} alt='' />
                                    </div>
                                    <h2>Exploratory testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph29}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div className='quality3'>
                            <div className='quality3-element3'>
                                <div className='quality3-icon'>
                                    <img src={imagePaths.function19} alt='' />
                                </div>
                                <h2>Security testing</h2>
                                {QualityPara.map((section, index) => (
                                    <div key={index}>
                                        <p>{section.paragraph30}</p>
                                        <p></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                <section className='app-section4'>
                    <div className='app-content4'>
                        <h1>API Testing Tools We Use</h1>
                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>API Testing Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo7} alt='' className='image1' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo8} alt='' className='image2' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo9} alt='' className='image4' />
                                    </div>
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

export default Quality3
