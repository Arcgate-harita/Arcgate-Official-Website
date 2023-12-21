import React, { useState, useEffect } from "react";
import "../components/Client.css";
import imagePaths from "../imagePath";
import goToTop from "../images/goto_top.png";
function Clients() {

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
        <div className='clients-container'>
            <article>
                <section className='clients-section1'>
                    <div className='clients-content1'>
                        <h1>Trusted by the most disruptive companies</h1>
                        <p></p>
                        <center></center>
                        <p></p>
                        <p>We work with incredibly exciting startups and high growth companies who dream big and move fast. Our relationship with our clients is a partnership – we bring our experience, best practices and tools to apply to our customer’s unique requirements.</p>
                        <br></br>
                        <p>Our customers include the top leaders in Real Estate Tech, Food Tech, Sharing Economy, Ecommerce, Fintech and Consumer Internet. We value their trust deeply and take the responsibility very seriously.</p>
                        <p></p>
                    </div>
                </section>

                <section className='clients-section2'>
                    <div className='clients-content2'>
                        <h2>Case Studies</h2>
                        <h3>Multi-Year Engagements</h3>
                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon1} alt="" />
                                <p></p>
                                <h6>Oil &
                                    <br></br>
                                    Energy</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo1} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>Helped a large Oil & Energy Analytics company
                                    <span>collect, standardize and map data from 2 million public filings</span>
                                    to enable making real-time trading decisions.
                                </p>
                                <p></p>
                            </div>
                        </div>

                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon2} alt="" />
                                <p></p>
                                <h6>Security
                                    <br></br>
                                    Software</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo2} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>
                                    Classified and analyzed top
                                    <span>5 million websites for spam, viruses and malware</span>for a publicly traded Security Software Vendor using proprietary algorithms.
                                </p>
                                <p></p>
                            </div>
                        </div>
                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon3} alt="" />
                                <p></p>
                                <h6>Media</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo3} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>Trained photo, video and content matching algorithms for a large media company using
                                    <span>human scoring, tagging and categorization.</span>
                                </p>
                                <p></p>
                            </div>
                        </div>

                        <div className='clients-div1'>
                            <div className='clients-body1'>
                                <img src={imagePaths.clientIcon4} alt="" />
                                <p></p>
                                <h6>Food
                                    <br></br>
                                    Tech</h6>
                                <p></p>
                            </div>
                            <div className='clients-body2'>
                                <img src={imagePaths.clientLogo4} alt="" />
                            </div>
                            <div className='clients-body3'>
                                <p>Collected and annotated business listings,
                                    <span>photos and food menu data </span>for a market leader in the on-demand delivery space.
                                </p>
                                <p></p>
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

export default Clients
