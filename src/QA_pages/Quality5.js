import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";


function Quality5() {

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

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
    return (
        <div className='quality-container'>
            <article>
                <section className='quality-section1'>
                    <div className='quality-content1'>
                        <h2>Accessibility Testing Outsourcing</h2>
                        <p></p>
                        <center>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph44}</p>
                                    <p></p>
                                    <p>{section.paragraph45}</p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='quality-section3'>
                    <div className='quality-content3'>
                        <div className='quality-div3'>
                            <h1>Our Accessibility Testing Outsourced Services</h1>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph46}</p>
                                    <p></p>
                                </div>
                            ))}
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.zendesk1} alt='' />
                                    </div>
                                    <h2>Manual Accessibility  testing
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph47}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>
                                <div className='quality-list'>
                                    <ul>
                                        <li>Keyboard-only navigation</li>
                                        <li>Compatibility with assistive technology</li>
                                        <li>Error messages and error prevention</li>
                                        <li>Distinguishable links</li>
                                        <li>Accuracy of text alternatives</li>
                                        <li>Meaningful sequence of content</li>
                                        <li>Audio descriptions and captions</li>
                                        <li>Accessibility criteria that cannot be automated</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.zendesk2} alt='' />
                                    </div>
                                    <h2>Automated Accessibility  testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph48}</p>
                                            <p></p>
                                        </div>
                                    ))}
                                </div>

                                <div className='quality-list'>
                                    <ul>
                                        <li>Page titles</li>
                                        <li>Hierarchical heading structure</li>
                                        <li>Presence of text alternatives</li>
                                        <li>Empty links</li>
                                        <li>Color contrast</li>
                                        <li>Form labels</li>
                                        <li>HTML page language and attributes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='quality-section6'>
                    <div className='quality-div4'>
                        <h2>
                            Accessibility Validation Key Elements
                        </h2>

                        <div className='why-arcgate'>
                            <p>
                                <img src={imagePaths.icons1} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons2} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons3} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons4} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons5} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons6} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons7} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons8} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons9} alt='' />
                                <br></br>

                            </p>

                            <p>
                                <img src={imagePaths.icons10} alt='' />
                                <br></br>

                            </p>
                        </div>

                    </div>
                </section>

                <section className='app-section4'>
                    <div className='app-content4'>
                        <h1>Accessibility Testing Tools We Use</h1>
                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Accessibility Testing Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo38} alt='' className='image1' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo39} alt='' className='image2' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo40} alt='' className='image4' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo41} alt='' className='image4' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo42} alt='' className='image4' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo43} alt='' className='image4' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo44} alt='' className='image4' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo45} alt='' className='image4' />
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

export default Quality5
