import React from 'react'
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import "../blog_pages/Blog_comman.css";
import { useEffect , useState} from 'react';

function Blog8() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1-bg'>
                    <div className='blog-content1-bg'>
                        <h2>Our BPO Startup Story in India
                        </h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph51}</p>
                                <p></p>
                                <p>{section.paragraph52}</p>
                                <p></p>
                                <div className="video-container">
                                    <iframe
                                        width="700"
                                        height="515"
                                        src="https://www.youtube.com/embed/bxVOaa7FZVM"
                                        title="YouTube video"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>



                                <p></p>
                                <h3>How did it all start?</h3>
                                <p></p>
                                <p>{section.paragraph53}</p>
                                <p></p>
                                <h3>What or who was your inspiration to start off?</h3>
                                <p></p>
                                <p>{section.paragraph54}</p>
                                <p></p>
                                <h3>What was your first set back and how did you overcome it?</h3>
                                <p></p>
                                <p>{section.paragraph55}</p>
                                <p></p>
                                <h3>What is your success mantra?</h3>
                                <p></p>
                                <p>{section.paragraph56}</p>
                                <p></p>
                                <h3>What was your goal? And how hard did you work to achieve it?</h3>
                                <p></p>
                                <p>{section.paragraph57}</p>
                                <p></p>
                                <h3>It’s said that you have to, lose something to be successful. What all did you lose or sacrifice for your success?</h3>
                                <p></p>
                                <p>{section.paragraph58}</p>
                                <p></p>
                                <h3>How has the year been so far for you both personally and professionally?</h3>
                                <p></p>
                                <p>{section.paragraph59}</p>
                                <p></p>
                                <h3>Message to the new generation of entrepreneurs?</h3>
                                <p>{section.paragraph60}</p>
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

export default Blog8
