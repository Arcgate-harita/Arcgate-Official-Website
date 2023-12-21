import React from 'react';
import imagePaths from '../imagePath';
import "../Industry_pages/Industry.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function Industry2() {

    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
  
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
  
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    
    return (
        <div className='industry-container'>
            <article>
                <section className='industry-section1-a'>
                    <div className='industry-content1'>
                        <h1>Food Tech</h1>
                        <p></p>
                        <center>
                            <h2>We have years of deep experience helping successful food tech startups ensure they have the most comprehensive and accurate data on menus and restaurants.</h2>
                        </center>
                        <p></p>
                    </div>
                </section>

                <section className='industry-section2'>
                    <div className='industry-content2'>
                        <div className='industry-div2'>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting6} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Menu Creation
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting7} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                        Menu Updates
                                    </span>
                                    <br></br>
                                </a>
                            </div>
                            <div className='industry-body2'>
                                <a>
                                    <br></br>
                                    <span className='industry-image'>
                                        <br></br>
                                        <img src={imagePaths.reporting8} alt='' />
                                        <br></br>
                                    </span>
                                    <br></br>
                                    <span className='industry-text'>
                                    Business Profile Setup 
                                    </span>
                                    <br></br>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>





                <section className='blogView-section2'>
                    <div className='blogView-div2'>
                        <h6>INSIGHTS</h6>
                        <div className='blogView'>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog11'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog10} alt='' />
                                        </div>
                                        <div className='thumb-blogView'>
                                            <p>Retail in India and Future Trends</p>
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
                                                Artificial Intelligence – The Exciting Future </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='blogView-container1'>
                                <div className='blogView-content2'>
                                    <Link to='/blog4'>
                                        <div className='blogView-div'>
                                            <img src={imagePaths.blog3} alt='' />
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


                        </div>


                    </div>
                </section>


            </article>

            {isVisible && (
                <>
                    <div className="top-btn" onClick={goToBtn}>
                        <img src={goToTop} className="top-btn--icon" />
                    </div>
                    <div className='icon-text'>
                        BACK TO TOP
                    </div>
                </>
            )}

        </div >
    )
}


export default Industry2
