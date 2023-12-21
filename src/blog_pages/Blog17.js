import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect , useState} from 'react';
import goToTop from "../images/goto_top.png";

function Blog17() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>The Exciting Future of AdTech</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph100}</p>
                                <p></p>
                                <p>{section.paragraph101}</p>
                                <p></p>
                                <p>{section.paragraph102}</p>
                                <p></p>
                                <p>{section.paragraph103}</p>
                                <p></p>
                                {section.bulletPoints5 && (
                                    <ul>
                                        {section.bulletPoints5.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph104}</p>
                                <p></p>
                                <p>{section.paragraph105}</p>
                                <p></p>
                                <p>{section.paragraph106}</p>
                                <p></p>
                                <p>{section.paragraph107}</p>
                                <p></p>
                                <p>{section.paragraph108}</p>
                                <p></p>
                                <p>{section.paragraph109}</p>
                                <p></p>
                                <p>{section.paragraph110}</p>
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
export default Blog17
