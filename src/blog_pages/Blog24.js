import React from 'react';
import "../blog_pages/Blog_comman.css";
import { Link } from "react-router-dom";
import imagePaths from '../imagePath';
import paragraphs from '../blog_pages/Paragraph';
import { useEffect } from 'react';

function Blog24() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='blog-container'>
      <article>
        <section className='blog-section1'>
          <div className='blog-content1'>
            <h2>Big Data – Big Opportunity</h2>
          </div>
        </section>

        <section className='blog-section2'>
          <div className='blog-content2'>
            <p></p>
            {paragraphs.map((section, index) => (
              <div key={index}>
                <p>{section.paragraph2H}</p>
                <p></p>
                <p>{section.paragraph2I}</p>
                <p></p>
                <p>{section.paragraph2J}</p>
                <p></p>
                <p>{section.paragraph2K}</p>
                <p></p>
                <p>{section.paragraph2L}</p>
                <p></p>
                <p>{section.paragraph2M}</p>
                <p></p>
                <p>{section.paragraph2N}</p>
                <p></p>
                <p><span>Datafication - </span>{section.paragraph2O}</p>
                <p></p>
                <p><span>Prediction - </span> {section.paragraph2P}</p>
                <p></p>
                <p><span>Correlatiobs and Causations -  </span>{section.paragraph2Q}</p>
                <p></p>
                <p><span>Decision-making -  </span>{section.paragraph2R}</p>
                <p></p>
                <p>{section.paragraph2S}</p>
                <p></p>
                <p>{section.paragraph2T}</p>
                <p></p>
                <p>{section.paragraph2U}</p>
                <p></p>
                {section.bulletPoints7 && (
                  <ul>
                    {section.bulletPoints7.map((point, bulletIndex) => (
                      <li key={bulletIndex}>{point}</li>
                    ))}
                  </ul>
                )}
                <p>{section.paragraph2V}</p>
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
export default Blog24
