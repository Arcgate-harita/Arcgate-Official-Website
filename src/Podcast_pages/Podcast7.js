import React from 'react';
import "../Podcast_pages/Podcast.css";
import PodcastPara from './Podcast_para';

function Podcast7() {
  return (
    <div className='podcast-container'>
    <article>
        <section className='podcast-section1'>
            <div className='podcast-content1'>
            {PodcastPara.map((section, index) => (
                            <div key={index}>
                                <h2>{section.heading4}</h2>
                            </div>
                        ))}
            </div>
        </section>

        <section className='podcast-section2'>
                    <div className='podcast-content2'>
                        <p></p>
                        {PodcastPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph7}</p>
                                <p></p>
                                <p>{section.paragraph2}</p>
                                <p></p>
                            </div>
                        ))}
5

                        <p></p>
                    </div>
        </section>
                </article>
                </div>
  )
};

export default Podcast7