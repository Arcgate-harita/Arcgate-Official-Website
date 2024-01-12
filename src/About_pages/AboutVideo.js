import React, { useState } from 'react';
import imagePaths from '../imagePath';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css'; // Import the CSS directly
import '../About_pages/AboutVideo.css';
import { useEffect } from 'react';

function AboutVideo() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const openModal = (id) => {
        setIsOpen(true);
        setVideoId(id);
    };

    const closeModal = () => {
        setIsOpen(false);
        setVideoId(null);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div data-testid="about-video-container">
            <article>
                <section className='body-section5'>
                    <div className='arcgate-content'>
                        <div className='video-content'>
                            <div className='video-list'>
                                <div className='video-div' onClick={() => openModal('rn1v6nod--E')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.imageVideo1} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Dun & Bradstreet Special Recognition Award 2019 - SME</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('9JF7rnMgKKg')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.imageVideo2} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>CNBC-TV18 highlights the story of Arcgate in “The Leap Takers” show</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('rEJ1V48lrc0')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.imageVideo3} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>ET Now business News channel covers Arcgate in the “Emerging SME” series</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('bxVOaa7FZVM')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.arcgateVideo3} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Hear our startup story from our founder</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('ux_FiVC4eVM')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.image15} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>One on One With Shubham from Arcgate</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('O97QHjU-i-Y')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.image17} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>One on One with Shekhar from Arcgate</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('B_wmuOK9NZ0')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage3} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>One on One with Ritu from Arcgate</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('4l36HmlPrUU')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage1} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>One on One with Aziz from Arcgate</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('Xsvj1YFPYg4')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage4} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>One on One with Santosh from Arcgate

                                        </p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('eVC9LsUCCXM')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage5} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Arcgate Today and its Early Years - with Aziz and Shekhar</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('0dEGFOtAsZs')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.image16} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>What Makes Us Click - Anant and Shekhar from Arcgate</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('SDN1cLIJlCo')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage6} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>What Makes Us Click - Shubham and Shekhar from Arcgate</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('9KIWw_V29-U')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage7} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Nidhi, the Trendsetter - First One to Work in the Family #Arcgatian</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('i5PKsHW7FvQ')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage8} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Dashing Deepshika and Her Take on Why Women Should Work #Arcgatian</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('7H6Z4htFduw')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage9} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Spotlight on: Bhagyashree, A Modern Woman #Arcgatians</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('2CUsuWaMQ4w')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage10} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Anshul - A Passionate Engineer, Data Lover and a Great Communicator #Arcgatian</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('NDsdWC-BS4E')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage11} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Prashant Kumar - Leading the Pack by Staying Calm and Collected #Arcgatian</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('UWrjv2Unn1Y')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage12} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Amatullah - Self Improver and a Constant Learner #Arcgatian</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('bMafgtEWs84')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage13} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Ashaar - A Pitch Perfect Combo of Music and Engineering</p>
                                    </div>
                                </div>
                                <div className='video-div' onClick={() => openModal('0bFo55iDnbQ')}>
                                    <div className='video-body'>
                                        <div className='video-image'>
                                            <div data-aos="fade-up">
                                                <img src={imagePaths.videoImage5} alt='' />
                                                <span className='btn-video'>
                                                    <img src={imagePaths.image18} alt='' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='video-text'>
                                        <p>Mitul - A Mother, a Wife and a Career Woman #Arcgatians</p>
                                    </div>
                                </div>
                            </div>
                            <ModalVideo
                                channel='youtube'
                                isOpen={isOpen}
                                videoId={videoId}
                                onClose={closeModal}
                            />
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default AboutVideo;
