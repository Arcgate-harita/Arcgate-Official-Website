import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect } from 'react';

function Blog29() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Out-of-Home Digital Advertising - Overview & Trends</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph4G}</p>
                                <p></p>
                                <p>{section.paragraph4H}</p>
                                <p></p>
                                <h1>Digital Signage Ecosystem</h1>
                                <p></p>
                                <p>{section.paragraph4I}</p>
                                <p></p>
                                {section.bulletPoints17 && (
                                    <ul>
                                        {section.bulletPoints17.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph4J}</p>
                                <p></p>
                                {section.bulletPoints18 && (
                                    <ul>
                                        {section.bulletPoints18.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <h1>Economic Models</h1>
                                <p></p>
                                {section.bulletPoints19 && (
                                    <ul>
                                        {section.bulletPoints19.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <h1>Audience Measurement</h1>
                                <p>{section.paragraph4K}</p>
                                <p></p>
                                {section.bulletPoints20 && (
                                    <ul>
                                        {section.bulletPoints20.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph4L}</p>
                                <p></p>
                                <h1>Pricing Challenges</h1>
                                <p></p>
                                <p>{section.paragraph4M}</p>
                                <p></p>
                                <h1>Trends and Opportunities</h1>
                                <p></p>
                                {section.bulletPoints21 && (
                                    <ul>
                                        {section.bulletPoints21.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <h1>Challenges</h1>
                                <p></p>
                                {section.bulletPoints22 && (
                                    <ul>
                                        {section.bulletPoints22.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph4N}</p>
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
};
export default Blog29
