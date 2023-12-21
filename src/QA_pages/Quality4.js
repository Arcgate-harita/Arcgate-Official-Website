import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function Quality4() {

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
                        <h2>Performance Testing Outsourcing</h2>
                        <p></p>
                        <center>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph31}</p>
                                    <p></p>
                                    <p>{section.paragraph32}</p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='quality-section3'>
                    <div className='quality-content3'>
                        <div className='quality-div3'>
                            <h1>Our Performance Testing Outsourced Services</h1>
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function14} alt='' />
                                    </div>
                                    <h2>Load testing
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph33}</p>
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
                                    <h2>Stress testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph34}</p>
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
                                    <h2>Soak testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph35}</p>
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
                                    <h2>Scalability testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph36}</p>
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
                                    <h2>Volume testing
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph37}</p>
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
                                    <h2>Performance Analysis and Reporting</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph38}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </section>

                <section className='team-section2'>
                    <div className='team-content2'>
                        <div className='team-div2'>
                            <h1>Why Arcgate for Performance Testing?</h1>
                        </div>
                        <div className='team-body2'>
                            <div className='team-left'>
                                <div className='team-element'>
                                    <div className='team-icon'>
                                        <img src={imagePaths.teamIcon1} alt='' />
                                    </div>
                                    <h2>Cost Savings</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph39}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='team-right'>
                                <div className='team-element'>
                                    <div className='team-icon'>
                                        <img src={imagePaths.teamIcon2} alt='' />
                                    </div>
                                    <h2>Expertise and Experience
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph40}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='team-body2'>
                            <div className='team-left'>
                                <div className='team-element'>
                                    <div className='team-icon'>
                                        <img src={imagePaths.teamIcon3} alt='' />
                                    </div>
                                    <h2>Improved Time-to-Market
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph41}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='team-right'>
                                <div className='team-element'>
                                    <div className='team-icon'>
                                        <img src={imagePaths.teamIcon4} alt='' />
                                    </div>
                                    <h2>Quality Assurance
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph42}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='team-body2'>
                            <div className='team-element'>
                                <div className='team-icon'>
                                    <img src={imagePaths.teamIcon5} alt='' />
                                </div>
                                <h2>Scalability</h2>
                                {QualityPara.map((section, index) => (
                                    <div key={index}>
                                        <p>{section.paragraph43}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                </section>


                <section className='app-section4'>
                    <div className='app-content4'>
                        <h1>Performance Testing Tools We Use</h1>
                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Performance Tracking Tools</h6>
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

export default Quality4
