import React from 'react'
import "../blog_pages/Blog3.css";
import imagePaths from '../imagePath';
import { Link } from "react-router-dom";
import paragraphs from './Paragraph';
import { useEffect , useState} from 'react';

function Blog3() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blog-container'>
            <article>
                <section className='blog3-section1'>
                    <div className='blog3-content1'>
                        <h2>Big Data, IoT and AI - Creating new possibilities in Real Estate and Smart City Development</h2>
                    </div>
                </section>

                <section className='blog3-section2'>
                    <div className='blog3-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph14}</p>
                                <p></p>
                                <p>{section.paragraph15}</p>
                                <p></p>
                                <p>{section.paragraph16}</p>
                                <p></p>
                                <p>{section.paragraph17}</p>
                                <p></p>
                            </div>
                        ))}

                        <p></p>
                    </div>
                </section>

                <section className='blog3-section2'>
                    <div className='blog3-section-content2'>
                        <h6>MORE ARTICLES</h6>
                        <div className='blog3'>
                            <div className='blog3-container'>
                                <div className='blog3-content'>
                                    <Link to='/blog1'>
                                        <div className='blog3-div'>
                                            <img src={imagePaths.imageBlog1} alt='' />
                                        </div>
                                        <div className='thumb-blog3'>
                                            <p>Retail in India and Future Trends</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blog3-container'>
                                <div className='blog3-content'>
                                    <Link to='/blog2'>
                                        <div className='blog3-div'>
                                            <img src={imagePaths.blog1} alt='' />
                                        </div>
                                        <div className='thumb-blog3'>
                                            <p>
                                                Artificial Intelligence – The Exciting Future </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blog3-container'>
                                <div className='blog3-content'>
                                    <Link to='/blog4'>
                                        <div className='blog3-div'>
                                            <img src={imagePaths.blog3} alt='' />
                                        </div>
                                        <div className='thumb-blog3'>
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

export default Blog3
