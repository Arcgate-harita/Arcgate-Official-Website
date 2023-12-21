import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect , useState} from 'react';
import goToTop from "../images/goto_top.png";

function Blog35() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Thoughts on Venture Capital & Startups</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph6H}</p>
                                <p></p>
                                {section.bulletPoints44 && (
                                    <ul>
                                        {section.bulletPoints44.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph6I}</p>
                                <p></p>
                                <h1>IPO vs. Acquisition</h1>
                                <p>{section.paragraph6J}</p>
                                <p></p>
                                <h1>Entrepreneur-In-Residence (E.I.R)</h1>
                                <p>{section.paragraph6K}</p>
                                <p></p>
                                <h1>US still the center of VC activity</h1>
                                <p>{section.paragraph6L}</p>
                                <p></p>
                                <p>{section.paragraph6M}</p>
                                <p></p>
                                <p>{section.paragraph6N}</p>
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
export default Blog35
