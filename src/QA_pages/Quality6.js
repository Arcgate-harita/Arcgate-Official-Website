import React from 'react';
import imagePaths from '../imagePath';
import "../QA_pages/Quality.css";
import QualityPara from "./Quality_para";


function Quality6() {
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
                            <p>{section.paragraph}</p>
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
                                <h2>Experience</h2>
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
                                    <img src={imagePaths.UserTesting} alt='' />
                                </div>
                                <h2>Cost</h2>
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
                                    <img src={imagePaths.ZendeskTesting} alt='' />
                                </div>
                                <h2>Flexibility</h2>
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
                                    <img src={imagePaths.AccountTesting} alt='' />
                                </div>
                                <h2>Speed</h2>
                                {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph7}</p>
                            <p></p>
                        </div>
                    ))}
                            </div>
                        </div>
                    </div>
                    <p></p>
                    {QualityPara.map((section, index) => (
                        <div key={index}>
                            <p>{section.paragraph8}</p>
                            <p></p>
                        </div>
                    ))}
                </div>
            </section>
            

        </article>
    </div>
    )
                    }

export default Quality6
