import React from 'react';
import "../Podcast_pages/Podcast.css";
import PodcastPara from './Podcast_para';

function Podcast1() {
    
    return (
        <div className='podcast-container'>
            <article>
                <section className='podcast-section1'>
                    <div className='podcast-content1'>
                        <center>
                            <h2>The Arcgate Podcast: Retail Technology has Changed the Experience of Shopping Enormously</h2>
                        </center>
                    </div>
                </section>

                <section className='podcast-section2'>
                    <div className='podcast-content2'>
                        <p></p>
                        <center>
                            {PodcastPara.map((section, index) => (
                                <div key={index}>
                                    <p>{section.paragraph1}</p>
                                    <p></p>
                                    <p>{section.paragraph2}</p>
                                    <p></p>
                                </div>
                            ))}
                        </center>
                        <p></p>
                    </div>
                </section>
            </article>
        </div>
    )
};

export default Podcast1
