import React from 'react';
import TermPara from './Term_para';
import "../Term_page/Term.css";
import { Link } from 'react-router-dom';

function Terms() {
    return (
        <div className='term-container'>
            <article>
                <section className='term-section1'>
                    <div className='term-content1'>
                        <h1>Terms of Use</h1>
                    </div>
                </section>

                <section className='term-section2'>
                    <div className='term-content2'>
                        {TermPara.map((section, index) => (
                            <div key={index}>
                                <h2>{section.heading1}</h2>
                              
                                <p>{section.paragraph1}</p>
                                <p></p>
                                <h2>{section.heading2}</h2>
                               
                                <p>{section.paragraph2}</p>
                                <p></p>
                                <p>{section.paragraph3}</p>
                                <p></p>
                                <h2>{section.heading3}</h2>
                               
                                <p>{section.paragraph4}</p>
                                <p></p>
                                <p>{section.paragraph5}</p>
                                <p></p>
                                <h2>{section.heading4}</h2>
                               
                                <p>{section.paragraph6}</p>
                                <p></p>
                                <p>{section.paragraph7}</p>
                                <p></p>
                                <h2>{section.heading5}</h2>
                                
                                <p>{section.paragraph8}</p>
                                <p></p>
                                <p>{section.paragraph9}</p>
                                <p></p>
                                <p>{section.paragraph10}</p>
                                <p></p>
                                <h2>{section.heading6}</h2>
                               
                                <p>{section.paragraph11}
                                <Link to="/privacy"> <span>Privacy Policy</span></Link></p>
                                <p></p>
                                <h2>{section.heading7}</h2>
                            
                                <p>{section.paragraph12}</p>
                                <p></p>
                                <h2>{section.heading8}</h2>
                                
                                <p>{section.paragraph13}</p>
                                <p></p>

                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Terms
