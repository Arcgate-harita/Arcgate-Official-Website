import React from 'react';
import "../Podcast_pages/Podcast.css";
import paragraphs from '../blog_pages/Paragraph';

function Podcast1() {
  return (
    <div className='podcast-container'>
    <article>
        <section className='podcast-section1'>
            <div className='podcast-content1'>
                <h2>The Arcgate Podcast: Food Tech Startups are Leveraging Artificial Intelligence and Image Recognition</h2>
            </div>
        </section>

        <section className='podcast-section2'>
                    <div className='podcast-content2'>
                        <p></p>
                        {paragraphs.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph8C}</p>
                                <p></p>
                                <p>{section.paragraph8D}</p>
                                <p></p>
                            </div>
                        ))}


                        <p></p>
                    </div>
        </section>
                </article>
                </div>
  )
};

export default Podcast1