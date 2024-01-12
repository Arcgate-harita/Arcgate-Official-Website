import React from 'react'
import { Link } from "react-router-dom";
import "./Blog_view.css";
import { useState, useEffect } from 'react';
import goToTop from "./images/goto_top.png";

function Podcast() {

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

      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blogView-container' data-testid="blogView-container">
            <article>
                <section className='blogView-section1'>
                    <div className='blogViw-content1'>
                    </div>
                </section>

                <section className='blogView-section2'>
                    <div className='blogView-div2'>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast1">
                                            <p>Retail Technology has Changed the Experience of Shopping Enormously</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast2">
                                            <p>Meet the team – Episode 2</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast3">
                                            <p>Meet the team – Episode 1</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast4">
                                            <p>Meat Alternatives, Personalized Nutrition and AI for Food Delivery</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast5">
                                            <p>Receipt Data is a Holy Grail For Marketers</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast6">
                                            <p>Real Estate Tech – A Promising Space for Investors and Venture Capitalists in 2018</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast1">
                                            <p>Food tech startups are leveraging artificial intelligence and image recognition</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast2">
                                            <p>Real Estate Tech Space to Witness a Boost in Investments</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast3">
                                            <p>Rewriting the Ecommerce Strategy and Reinventing Retail</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast10">
                                            <p>Real Estate Tech is Building the Industry’s Future</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast11">
                                            <p>Learning Algorithms Need Data to Train On</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast12">
                                            <p>Sharing economy is going sharing-crazy with everything from bikes and spaces</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast13">
                                            <p>Sharing Economy is Showing No Signs of Slowing Down</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast14">
                                            <p>Trends that Will Keep Pushing Advertisers to Reinvent Themselves</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast15">
                                            <p>Adapt Technology to Move Forward or Leave Money on the Table</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='podcast'>
                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast16">
                                            <p>A list of Techstars Austin Alumni which are Significantly Successful</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast17">
                                            <p>Food Industry Needs to Adapt Big Data Analytics and Technology</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast18">
                                            <p>The Shiny New Trends in Real Estate Industry: Technology and Big Data</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='frame-content'>
                                <div className='frame-div'>
                                    <iframe></iframe>
                                    <div className='frame-body'>
                                        <Link to="/podcast18">
                                            <p>A List of Techstars NYC Alumni which are Significantly Successful</p>
                                        </Link>
                                    </div>
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

        </div>
    )
}

export default Podcast
