import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function Quality6() {

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
                        <h2>Salesforce Quality Assurance (QA) & Testing Outsourcing</h2>
                        <p></p>
                        <center>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph49}</p>
                                    <p></p>
                                    <p>{section.paragraph50}</p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='quality-section3'>
                    <div className='quality-content3'>
                        <div className='quality-div3'>
                            <h1>Our Salesforce Expertise</h1>
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.function14} alt='' />
                                    </div>
                                    <p></p>
                                    <h2>Sales Cloud</h2>
                                    <p></p>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph51}</p>
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
                                    <p></p>
                                    <h2>Service Cloud</h2>
                                    <p></p>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph52}</p>
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
                                        <img src={imagePaths.function14} alt='' />
                                    </div>
                                    <p></p>
                                    <h2>Salesforce CPQ & Billing</h2>
                                    <p></p>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph53}</p>
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
                                    <p></p>
                                    <h2>Salesforce Integrations</h2>
                                    <p></p>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph54}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-section3">
                    <div className="team-content3">
                        <div className="team-div3">
                            <h1>Our Salesforce Testing Outsourced Services</h1>
                            <p></p>
                            <h3>Our Salesforce testing engineers are equipped with the required skills and experience to offer accurate and efficient results with a wide range of Salesforce testing services.</h3>
                            <br></br>
                            <div className="team-body3">
                                <ul>
                                    <li>Functional Testing</li>
                                    <li>API Testing</li>
                                    <li>Automation Testing</li>
                                    <li>Regression Testing</li>
                                    <li>UAT Support</li>
                                    <li>Compatibility Testing</li>
                                    <li>Integration Testing</li>
                                    <li>Workflow Testing</li>
                                    <li>Volume Testing</li>
                                    <li>Security Testing</li>
                                    <li>Configuration Testing</li>
                                    <li>Performance Testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='quality-list-section'>
                    <div className='quality-list-content'>
                        <div className='quality-list-body'>
                            <h1>
                                Why Arcgate for Saleforce Testing Services?
                            </h1>

                            <div className='list'>
                                <ul>
                                    <li>
                                        {QualityPara.map((section, index) => (
                                            <div key={index}>
                                                <p>{section.paragraph55}</p>
                                                <p></p>
                                                <p>{section.paragraph56}</p>
                                                <p></p>
                                                <p>{section.paragraph57}</p>
                                                <p></p>

                                            </div>
                                        ))}

                                    </li>
                                    <li>
                                        {QualityPara.map((section, index) => (
                                            <div key={index}>
                                                <p>{section.paragraph58}</p>
                                                <p></p>
                                                <p>{section.paragraph59}</p>
                                                <p></p>
                                                <p>{section.paragraph60}</p>
                                                <p></p>
                                                <p>{section.paragraph61}</p>
                                                <p></p>
                                            </div>
                                        ))}
                                    </li>
                                </ul>
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

export default Quality6
