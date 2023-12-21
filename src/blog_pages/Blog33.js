import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect , useState} from 'react';
import goToTop from "../images/goto_top.png";

function Blog33() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Data Warehousing - Strategic Tool</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph5P}</p>
                                <p></p>
                                <p>{section.paragraph5Q}</p>
                                <p></p>
                                <p>{section.paragraph5R}</p>
                                <p></p>
                                <p>{section.paragraph5S}</p>
                                <p></p>
                                <h1>Data Life Cycle Management</h1>
                                <p>{section.paragraph5T}</p>
                                <p></p>
                                <img src={imagePaths.blogImage3} alt='' />
                                <h1>Pre-Data Warehouse</h1>
                                <p>{section.paragraph5U}</p>
                                <p></p>
                                <p>{section.paragraph5V}</p>
                                <p></p>
                                <h1>Data Cleansing</h1>
                                <p>{section.paragraph5W}</p>
                                <p></p>
                                <h1>Data Repositories</h1>
                                <p>{section.paragraph5X}</p>
                                <p></p>
                                <p>{section.paragraph5Y}</p>
                                <p></p>
                                <h1>Dront-End Analysis</h1>
                                <p>{section.paragraph5Z}</p>
                                <p></p>
                                <p>{section.paragraph6A}</p>
                                <p></p>
                                <p>{section.paragraph6B}</p>
                                <p></p>
                                <h1>Summary</h1>
                                <p>{section.paragraph6C}</p>
                                <p></p>
                                <p>{section.paragraph6D}</p>
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
export default Blog33
