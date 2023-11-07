import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect } from 'react';

function Blog28() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Outsourcing: Opportunities & Challenges</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph3K}</p>
                                <p></p>
                                <p>{section.paragraph3L}</p>
                                <p></p>
                                <p>{section.paragraph3M}</p>
                                <p></p>
                                <h1>Outsourcing Realities</h1>
                                <p></p>
                                <p>{section.paragraph3N}</p>
                                <p></p>
                                <p>{section.paragraph3O}</p>
                                <p></p>
                                <p>{section.paragraph3P}</p>
                                <p></p>
                                {section.bulletPoints14 && (
                                    <ul>
                                        {section.bulletPoints14.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph3Q}</p>
                                <p></p>
                                <h1>Start with Engagement Management</h1>
                                <p>{section.paragraph3R}</p>
                                <p></p>
                                {section.bulletPoints15 && (
                                    <ul>
                                        {section.bulletPoints15.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph3S}</p>
                                <p></p>
                                <h1>Outsourcing Strategy</h1>
                                <p></p>
                                {section.bulletPoints16 && (
                                    <ul>
                                        {section.bulletPoints16.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph3T}</p>
                                <p></p>
                                <h1>Good Advice - Talk to People</h1>
                                <p></p>
                                <p>{section.paragraph3U}</p>
                                <p></p>
                                <h1>Explore – Meet Multiple Vendors</h1>
                                <p></p>
                                <p>{section.paragraph3V}</p>
                                <p></p>
                                <h1>Cost – The Right Price</h1>
                                <p></p>
                                <p>{section.paragraph3W}</p>
                                <p></p>
                                <h1>The Engagement</h1>
                                <p></p>
                                <p>{section.paragraph3X}</p>
                                <p></p>
                                <h1>Culture & Communication</h1>
                                <p></p>
                                <p>{section.paragraph3Y}</p>
                                <p></p>
                                <p>{section.paragraph3Z}</p>
                                <p></p>
                                <h1>People & Leadership</h1>
                                <p></p>
                                <p>{section.paragraph4A}</p>
                                <p></p>
                                <h1>Alignment</h1>
                                <p></p>
                                <p>{section.paragraph4B}</p>
                                <p></p>
                                <h1>Measure Performance</h1>
                                <p></p>
                                <p>{section.paragraph4C}</p>
                                <p></p>
                                <h1>Outsourcing & Innovation</h1>
                                <p></p>
                                <p>{section.paragraph4D}</p>
                                <p></p>
                                <p>{section.paragraph4E}</p>
                                <p></p>
                                <p>{section.paragraph4F}</p>
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
export default Blog28
