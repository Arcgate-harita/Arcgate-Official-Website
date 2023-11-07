import React from 'react'
import "../blog_pages/Blog2.css";
import imagePaths from '../imagePath';
import { Link } from "react-router-dom";
import paragraphs from './Paragraph';
import { useEffect } from 'react';

function Blog2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blog-container'>
            <article>
                <section id='blog2-section1' className='blog2-section1'>
                    <div className='blog2-content1'>
                        <h2>Artificial Intelligence - The Exciting Future</h2>
                    </div>
                </section>

                <section className='blog2-section2'>
                    <div className='blog2-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph9}</p>
                                <p></p>
                                <p>{section.paragraph10}</p>
                                <p></p>
                                <p>{section.paragraph11}</p>
                                <h4>{section.heading}</h4>
                                {section.bulletPoints && (
                                    <ul>
                                        {section.bulletPoints.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph12}</p>
                                <p></p>
                                <p>{section.paragraph13}</p>
                                <p></p>
                            </div>
                        ))}

                        <p></p>
                    </div>
                </section>

                <section className='blog2-section2'>
                    <div className='blog2-section-content2'>
                        <h6>MORE ARTICLES</h6>
                        <div className='blog2'>
                            <div className='blog2-container'>
                                <div className='blog2-content'>
                                    <Link to='/blog1'>
                                        <div className='blog2-div'>
                                            <img src={imagePaths.imageBlog1} alt='' />
                                        </div>
                                        <div className='thumb-blog2'>
                                            <p>Retail in India and Future Trends</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blog2-container'>
                                <div className='blog2-content'>
                                    <Link to='/blog3'>
                                        <div className='blog2-div'>
                                            <img src={imagePaths.blog2} alt='' />
                                        </div>
                                        <div className='thumb-blog2'>
                                            <p>
                                                Artificial Intelligence – The Exciting Future </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blog2-container'>
                                <div className='blog2-content'>
                                    <Link to='/blog4'>
                                        <div className='blog2-div'>
                                            <img src={imagePaths.blog3} alt='' />
                                        </div>
                                        <div className='thumb-blog2'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Blog2
