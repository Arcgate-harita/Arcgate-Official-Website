import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";


function Quality2() {
    return (
        <div className='quality-container'>
            <article>
                <section className='quality-section1'>
                    <div className='quality-content1'>
                        <h2>Automation Testing Outsourcing</h2>
                        <p></p>
                        <center>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph13}</p>
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
                            <h1>Our Automation Testing Outsourced Services</h1>
                            {QualityPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph14}</p>
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
                                    <h2>Automation Strategy & Planning</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph15}</p>
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
                                    <h2>Custom Automation Framework</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph16}</p>
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
                                    <h2>Automated Regression Testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph17}</p>
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
                                    <h2>Automated GUI Testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph18}</p>
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
                                    <h2>Web Automation Testing
                                    </h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph19}</p>
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
                                    <h2>Mobile Automation Testing</h2>
                                    {QualityPara.map((section, index) => (
                                        <div key={index}>
                                            <p>{section.paragraph20}</p>
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
                                <h2>API Automation Testing</h2>
                                {QualityPara.map((section, index) => (
                                    <div key={index}>
                                        <p>{section.paragraph21}</p>
                                        <p></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                <section className='app-section4'>
                    <div className='app-content4'>
                        <h1>Automation Tools & Technologies We Use</h1>
                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Automation Languages</h6>
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

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Automation Tools</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.xamarinLOgo} alt='' className='image9' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo13} alt='' className='image10' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo14} alt='' className='image11' />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Automation Frameworks</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo15} alt='' className='image16' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo16} alt='' className='image17' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo17} alt='' className='image18' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Automation Techniques</h6>
                            </div>
                            <div className='app-logs'>
                                <div className='app-images'>
                                    <div>
                                        <img src={imagePaths.LibraryLogo18} alt='' className='image20' />
                                    </div>
                                    <div>
                                        <img src={imagePaths.LibraryLogo19} alt='' className='image21' />
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </article>
        </div>
    )
}

export default Quality2
