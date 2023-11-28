import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";


function Quality5() {
    return (
        <div className='quality-container'>
        <article>
            <section className='quality-section1'>
                <div className='quality-content1'>
                    <h2>Accessibility Testing Outsourcing</h2>
                    <p></p>
                    {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph44}</p>
                            <p></p>
                            <p>{section.paragraph45}</p>
                        </div>
                    ))}
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
                                    <img src={imagePaths.function14} alt='' />
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
                                    <img src={imagePaths.function15} alt='' />
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
            
            <section className='body-section6'>
                    <div className='body-div4'>
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
                                <img src={imagePaths.LibraryLogo7} alt='' className='image1'/>
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
    </div>
    )
                    }

export default Quality5