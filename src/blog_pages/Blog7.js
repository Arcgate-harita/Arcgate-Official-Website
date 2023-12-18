import React from 'react'
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import "../blog_pages/Blog_comman.css";
import { useEffect } from 'react';

function Blog7() {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Artificial Intelligence (AI) and Data
                        </h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph38}</p>
                                <p></p>
                                <p>{section.paragraph39}</p>
                                <p></p>
                                <p>{section.paragraph41}</p>

                                <p></p>
                                <p>{section.paragraph42}</p>
                                <p></p>
                                <h3>Supervised, Unsupervised and Semi-supervised Learning</h3>
                                <p></p>
                                <p>{section.paragraph43}</p>
                                <p></p>
                                <h2>{section.heading44}</h2>
                                <p>{section.paragraphA}</p>

                                <p></p>
                                <h3>Humans-in-the-Loop and Training Data Sets</h3>
                                <p></p>
                                <p>{section.paragraph45}</p>
                                <p></p>
                                <p>{section.paragraph46}</p>
                                <p></p>
                                <p></p>
                                <h3>The Importance of Data</h3>
                                <p></p>
                                <p>{section.paragraph47}</p>
                                <p></p>
                                <p>{section.paragraph48}</p>
                                <p></p>
                                {section.bulletPoints3 && (
                                    <ul>
                                        {section.bulletPoints3.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph49}</p>
                                <p></p>
                                <h3>AI and Humans</h3>
                                <p></p>
                                <p>{section.paragraph50}</p>
                                <p></p>
                            </div>
                        ))}

                        <p></p>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-section-content2'>
                        <h6>MORE ARTICLES</h6>
                        <div className='blog'>

                            <div className='blog-content'>
                                <Link to='/blog1'>
                                    <div className='blog-div'>
                                        <img src={imagePaths.imageBlog1} alt='' />
                                    </div>
                                    <div className='thumb-blog'>
                                        <p>Retail in India and Future Trends</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='blog-content'>
                                <Link to='/blog2'>
                                    <div className='blog-div'>
                                        <img src={imagePaths.imageBlog2} alt='' />
                                    </div>
                                    <div className='thumb-blog'>
                                        <p>
                                            Artificial Intelligence – The Exciting Future </p>
                                    </div>
                                </Link>
                            </div>

                            <div className='blog-content'>
                                <Link to='/blog3'>
                                    <div className='blog-div'>
                                        <img src={imagePaths.imageBlog3} alt='' />
                                    </div>
                                    <div className='thumb-blog'>
                                        <p>
                                            Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Blog7
