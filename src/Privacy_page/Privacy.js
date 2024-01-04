import React from 'react';
import PrivacyPara from "./Privacy_para";
import "../Privacy_page/Privacy.css";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

function Privacy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='privacy-container'>
            <article>
                <section className='privacy-section1'>
                    <div className='privacy-content1'>
                        <h1>Privacy Policy</h1>
                    </div>
                </section>

                <section className='privacy-section2'>
                    <div className='privacy-content2'>
                        {PrivacyPara.map((section, index) => (
                            <div key={index}>
                                <p></p>
                                <p>Last updated on August 5, 2023</p>
                                <p>{section.paragraph1}</p>
                                <p></p>
                                <h2>{section.heading1}</h2>
                                
                                <p>{section.paragraph2}</p>
                                <p></p>
                                <p>{section.paragraph3}</p>
                                <p></p>
                                <h2>{section.heading2}</h2>
                              
                                <p>{section.paragraph4}</p>
                                <p></p>
                                <h2>{section.heading3}</h2>
                                
                                <p>{section.paragraph5}</p>
                                <p></p>
                                <h2>{section.heading4}</h2>
                              
                                <p>{section.paragraph6}</p>
                                <p></p>
                                <h2>{section.heading5}</h2>
                             
                                <p>{section.paragraph7}</p>
                                <p></p>
                                <h2>{section.heading6}</h2>
                                <p>{section.paragraph8}</p>
                                <p><span>Contact Person:</span>{section.paragraph9}</p>
                                <p><span>Contact address:</span>{section.paragraph10}</p>
                                <p><span>Phone:</span>{section.paragraph11}</p>
                                <Link to="/contact" >
                                    <p className='email'>Email Us</p>
                                </Link>
                                <p></p>
                                <h2>{section.heading7}</h2>
                                <p></p>
                                <p>{section.paragraph12}</p>
                                <p></p>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Privacy
