import React from 'react'
import imagePaths from './imagePath';
import { Link } from "react-router-dom";
import "./Blog_view.css";

function Blog_view() {
    return (
        <div className='blogView-container' data-testid="blogView-container">
            <article data-testid="article-element">
                <section className='blogView-section1' data-testid="blogView-section1">
                    <div className='blogViw-content1' data-testid="blogViw-content1">
                    </div>
                </section>

                <section className='blogView-section2'>
                    <div className='blogView-div2'>
                        <div className='blogView'>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog1'>
                                        <div className='blogView-div'>
                                            <img className='blog-image' src={imagePaths.imageBlog1} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                           
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog2'>
                                        <div className='blogView-div'>
                                            <img className='blog-image' src={imagePaths.imageBlog2} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                           
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog3'>
                                        <div className='blogView-div'>
                                            <img className='blog-image' src={imagePaths.imageBlog3} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                           
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog4'>
                                        <div className='blogView-div'>
                                            <img className='blog-image' src={imagePaths.blog3} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog5'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog4} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog6'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog5} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog7'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog6} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog8'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog7} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog9'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog8} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog10'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog9} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog11'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog10} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog12'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog11} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog13'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog12} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog14'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog13} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog15'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog14} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog16'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog15} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog17'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog16} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog18'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog17} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog19'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog18} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog20'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog19} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog21'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog20} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog22'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog21} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog23'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog22} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog24'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog23} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog25'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog24} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog26'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog25} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog27'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog26} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog28'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog27} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog29'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog28} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog30'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog29} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog31'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog30} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog32'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog31} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog33'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog32} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog34'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog33} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog35'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog34} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog36'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog35} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog37'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog36} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog38'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog37} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog39'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog38} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog40'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog39} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog41'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog40} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog42'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog41} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog43'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog42} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>
                                                Big Data, IoT and AI – Creating new possibilities in Real Estate and Smart City Development </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </article>
        </div>
    )
}

export default Blog_view
