import React from 'react';
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import "../blog_pages/Blog_comman.css";
import { useEffect , useState} from 'react';

function Blog6() {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Search Relevance and Search Quality Takes Center Stage</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph29}</p>
                                <p></p>
                                <p>{section.paragraph30}</p>
                                <p></p>
                                <h3>Introdution</h3>
                                <p></p>
                                <p>{section.paragraph31}</p>
                                <p></p>
                                <p>{section.paragraph32}</p>
                                <p></p>
                                <p>{section.paragraph33}</p>
                                <p></p>
                                <h2>{section.heading2}</h2>
                                <p>{section.paragraphA}</p>
                                {section.bulletPoints2 && (
                                    <ul>
                                        {section.bulletPoints2.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <h3>Humans-in-the-Loop and Training Data Sets</h3>
                                <p></p>
                                <p>{section.paragraph34}</p>
                                <p></p>
                                <p>{section.paragraph35}</p>
                                <p></p>
                                <p>{section.paragraph36}</p>
                                <p></p>
                                <h3>Conclusion</h3>
                                <p>{section.paragraph37}</p>
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

export default Blog6
