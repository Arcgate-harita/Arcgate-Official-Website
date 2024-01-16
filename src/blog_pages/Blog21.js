import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect , useState} from 'react';

function Blog21() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>The Great Data Dash</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph1Q}</p>
                                <p></p>
                                <p>{section.paragraph1R}</p>
                                <p></p>
                                <p>{section.paragraph1S}</p>
                                <p></p>
                                <p>{section.paragraph1T}</p>
                                <p></p>
                                <p>{section.paragraph1U}</p>
                                <p></p>
                                <p>{section.paragraph1V}</p>
                                <p></p>
                                <p>{section.paragraph1W}</p>
                                <p></p>
                                <p><span>Location: </span>{section.paragraph1X}</p>
                                <p></p>
                                <p><span>IoT and smart products: </span> {section.paragraph1Y}</p>
                                <p></p>
                                <p><span>Cookies: </span>{section.paragraph1Z}</p>
                                <p></p>
                                <p><span>Electronic touch points: </span>{section.paragraph2A}</p>
                                <p></p>
                                <p>{section.paragraph2B}</p>
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
export default Blog21
