import React from 'react'
import "../blog_pages/Blog1.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect } from 'react';

function Blog1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Retails in India and Future Trends</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph1}</p>
                                <p></p>
                                <p>{section.paragraph2}</p>
                                <p></p>
                                <p>{section.paragraph3}</p>
                                <p></p>
                                <p>{section.paragraph4}</p>
                                <p></p>
                                <p>{section.paragraph5}</p>
                                <p></p>
                                <p>{section.paragraph6}</p>
                                <p></p>
                                <p>{section.paragraph7}</p>
                                <p></p>
                                <p>{section.paragraph8}</p>
                            </div>
                        ))}

                        <p></p>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-section-content2'>
                        <h6>MORE ARTICLES</h6>
                        <div className='blog1'>
                            <div className='blog1-content'>
                                <Link to='/blog2'>
                                    <div className='blog1-div'>
                                        <img src={imagePaths.blog1} alt='' />
                                    </div>
                                    <div className='thumb-blog1'>
                                        <p></p>
                                    </div>
                                </Link>
                            </div>

                            <div className='blog1-content'>
                                <Link to='/blog3'>
                                    <div className='blog1-div'>
                                        <img src={imagePaths.blog2} alt='' />
                                    </div>
                                    <div className='thumb-blog1'>
                                        <p></p>
                                    </div>
                                </Link>

                            </div>

                            <div className='blog1-content'>
                                <Link to='/blog4'>
                                    <div className='blog1-div'>
                                        <img src={imagePaths.blog3} alt='' />
                                    </div>
                                    <div className='thumb-blog1'>
                                        <p></p>
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

export default Blog1
