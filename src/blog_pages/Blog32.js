import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect , useState} from 'react';
import goToTop from "../images/goto_top.png";

function Blog32() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='blog-container'>
            <article>
                <section className='blog-section1'>
                    <div className='blog-content1'>
                        <h2>Indian Magazine Market Overview</h2>
                    </div>
                </section>

                <section className='blog-section2'>
                    <div className='blog-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <h1>Introduction</h1>
                                <p>{section.paragraph4S}</p>
                                <p></p>
                                <h1>Challenging Times</h1>
                                <p>{section.paragraph4T}</p>
                                <p></p>
                                <p>{section.paragraph4U}</p>
                                <p></p>
                                {section.bulletPoints26 && (
                                    <ul>
                                        {section.bulletPoints26.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p>{section.paragraph4V}</p>
                                <p></p>
                                <p>{section.paragraph4W}</p>
                                <p></p>
                                <p>{section.paragraph4X}</p>
                                <p></p>
                                <h1>The Opportunity</h1>
                                <p></p>
                                <p>{section.paragraph4Y}</p>
                                <p></p>
                                <p>{section.paragraph4Z}</p>
                                <p></p>
                                <p>{section.paragraph5A}</p>
                                <p></p>
                                <p>{section.paragraph5B}</p>
                                <p></p>
                                <p>{section.paragraph5C}</p>
                                <p></p>
                                <h1>Recent Developments</h1>
                                <p></p>
                                <p>{section.paragraph5D}</p>
                                <p></p>
                                {section.bulletPoints27 && (
                                    <ul>
                                        {section.bulletPoints27.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph5E}</p>
                                <p></p>
                                <h1>Foreign Investment in Indian Print Media - Role of Government</h1>
                                <p></p>
                                <p>{section.paragraph5F}</p>
                                <p></p>
                                <p>{section.paragraph5G}</p>
                                <p></p>
                                <h1>Advertisement Revenue</h1>
                                <h4>Breakdown by Region</h4>
                                <p></p>
                                {section.bulletPoints28 && (
                                    <ul>
                                        {section.bulletPoints28.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>{section.paragraph5H}</p>
                                <h3>Ad Industry Size in India</h3>
                                <h6>Year 2006</h6>
                                <h1>Key Players</h1>
                                <h3>Top 25 English Magazines in India</h3>
                                <p></p>
                                {section.bulletPoints29 && (
                                    <ul>
                                        {section.bulletPoints29.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <h3>Top English Magazines by Segment</h3>
                                <p>Current Affairs, Culture & Politics</p>
                                <p></p>
                                {section.bulletPoints30 && (
                                    <ul>
                                        {section.bulletPoints30.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Society & Women</p>
                                <p></p>
                                {section.bulletPoints31 && (
                                    <ul>
                                        {section.bulletPoints31.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Entertainment</p>
                                <p></p>
                                {section.bulletPoints32 && (
                                    <ul>
                                        {section.bulletPoints32.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Sports</p>
                                <p></p>
                                {section.bulletPoints33 && (
                                    <ul>
                                        {section.bulletPoints33.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Fashion</p>
                                <p></p>
                                {section.bulletPoints34 && (
                                    <ul>
                                        {section.bulletPoints34.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Business & Financial</p>
                                <p></p>
                                {section.bulletPoints35 && (
                                    <ul>
                                        {section.bulletPoints35.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Computer & Electronics</p>
                                <p></p>
                                {section.bulletPoints36 && (
                                    <ul>
                                        {section.bulletPoints36.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Travel & Leisure</p>
                                <p></p>
                                {section.bulletPoints37 && (
                                    <ul>
                                        {section.bulletPoints37.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Children</p>
                                <p></p>
                                {section.bulletPoints38 && (
                                    <ul>
                                        {section.bulletPoints38.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Fashion & Lifestyle
                                </p>
                                <p></p>
                                {section.bulletPoints39 && (
                                    <ul>
                                        {section.bulletPoints39.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>Literature</p>
                                <p></p>
                                {section.bulletPoints40 && (
                                    <ul>
                                        {section.bulletPoints40.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <h1>Average Issue Readership (AIR) Analysis (2008 vs. 2009)
                                </h1>
                                <p></p>
                                <p>{section.paragraph5I}</p>
                                <p></p>
                                {section.bulletPoints41 && (
                                    <ul>
                                        {section.bulletPoints41.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p></p>
                                <p>References</p>
                                <p>

                                </p>
                                {section.bulletPoints42 && (
                                    <ul>
                                        {section.bulletPoints42.map((point, bulletIndex) => (
                                            <li key={bulletIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
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
export default Blog32
