import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";
import { useEffect } from 'react';

function NonVoice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='research-container'>
      <article>
        <section>
          <div className='header-logo'>
            <img src={ArcgateLogo}></img>
            <p></p>
            <div className='close'>
              <a href='/career'>
                <img src={closeIcon}></img>
              </a>
            </div>
          </div>

          <div className='research-content'>
            <h1>Non-Voice Customer Support</h1>
            <ol>
              <li>Experience in customer support work via email/chat.</li>
              <li>Zendesk and Salesforce experience is preferred.</li>
              <li>Excellent written communication skills.</li>
              <li>Able to work in flexible shifts.</li>
              <li>Review, analyze and respond to customers’ billing inquiries.</li>
              <li>Able to interpret customer emails and reply in a creative and personalized manner.</li>
              <li>Solid computer skills, including typing and navigation.</li>
            </ol>
          </div>

          <div className='research-button'>
            <a href='/apply'>
              <button>APPLY</button>
            </a>
          </div>
        </section>
      </article>
    </div>
  )
}

export default NonVoice
