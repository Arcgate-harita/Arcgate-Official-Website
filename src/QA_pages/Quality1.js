import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";


function Quality1() {
    return (
        <div className='quality-container'>
        <article>
            <section className='quality-section1'>
                <div className='quality-content1'>
                    <h2>Manual Quality Assurance (QA) & Testing Outsourcing</h2>
                    <p></p>
                    {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph1}</p>
                            <p></p>
                            <p>{section.paragraph2}</p>
                            <p></p>
                        </div>
                    ))}
                    <p></p>
                </div>
            </section>
        
        <section className='quality-section3'>
                <div className='quality-content3'>
                    <div className='quality-div3'>
                        <h1>Our Manual Testing Outsourced Services</h1>
                        {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph3}</p>
                            <p></p>
                        </div>
                    ))}
                    </div>
                    <div className='quality-body3'>
                        <div className='quality-left'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.FunctionalTesting} alt='' />
                                </div>
                                <h2>Functional Testing</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph4}</p>
                            <p></p>
                        </div>
                    ))}
                            </div>
                        </div>
                        <div className='quality-right'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.function9} alt='' />
                                </div>
                                <h2>Integration Testing</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph5}</p>
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
                                    <img src={imagePaths.function10} alt='' />
                                </div>
                                <h2>Smoke Testing</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph6}</p>
                            <p></p>
                        </div>
                    ))}
                            </div>
                        </div>
                        <div className='quality-right'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.function5} alt='' />
                                </div>
                                <h2>Security Testing</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph7}</p>
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
                                    <img src={imagePaths.function11} alt='' />
                                </div>
                                <h2>Regression Testing
</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph8}</p>
                            <p></p>
                        </div>
                    ))}
                            </div>
                        </div>
                        <div className='quality-right'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.function12} alt='' />
                                </div>
                                <h2>Configuration Testing</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph9}</p>
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
                                    <img src={imagePaths.function13} alt='' />
                                </div>
                                <h2>Graphical User Interface (GUI) Testing</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph10}</p>
                            <p></p>
                        </div>
                    ))}
                            </div>
                        </div>
                        <div className='quality-right'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.function8} alt='' />
                                </div>
                                <h2>User Acceptance Testing
</h2>
                                {QualityPara.map((section, index) => (
                                 <div key={index}>
                                  <p>{section.paragraph11}</p>
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
                                    <img src={imagePaths.function7} alt='' />
                                </div>
                                <h2>Compatibility Testing</h2>
                                {QualityPara.map((section, index) => (
                                 <div key={index}>
                                  <p>{section.paragraph12}</p>
                                  <p></p>
                                   </div>
                                 ))}
                            </div>
                            </div>
                </div>
            </section>
            

        </article>
    </div>
    )
                    }

export default Quality1
