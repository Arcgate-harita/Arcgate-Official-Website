import React from 'react';
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect , useState} from 'react';

function Blog9() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1-bg1'>
                    <div className='blog-content1-bg1'>
                        <h2>Getting Recognized for our Culture of Excellence</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph61}</p>
                                <p></p>
                                <img className='award-image' src={imagePaths.award} alt='' />
                                <p></p>
                                <p>{section.paragraph62}</p>
                                <p></p>
                                <p>{section.paragraph63}</p>

                                <p></p>
                                <p>{section.paragraph64}</p>

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
export default Blog9
