import React from 'react'
import imagePaths from '../imagePath';
import "../bpo_pages/ai_data.css";

function data() {
  return (
    <div className='data-container'>
      <article>
        <section className="data-section1">
          <div className="wrapper">
            <div className="div-left">
              <h1>Big Data and Artificial Intelligence (AI) Challenge</h1>
              <h2>The harsh reality of Big Data and AI is that
                <span className="orange">90% of time is spent preparing data</span>
                before it can be useful. Data extraction, annotation, cleansing and enrichment is difficult, time consuming and repetitive.</h2>
              <h2>Engineering and data scientist experts spend time doing
                <span className="orange">data cleansing.</span></h2>
              <p></p>
            </div>
            <div className="div-right">
              <p></p>
              <img src={imagePaths.agFront} alt='' />
              <p></p>
            </div>
            <p></p>
          </div>
        </section>


        <section className="data-section2">
          <div className="wrapper2">
            <div className="data-content2">
              <h1>The Pain in the Market Today</h1>
              <h2>Crowdsourced solutions come with
                <span className="orng">data and intellectual property (IP) security risk.</span>
              </h2>
              <div className="market-today">
                <div className="div-left1">
                  <h3>Your data is sitting on an unknown person’s desktop in an unknown country.</h3>
                  <h3>Lack of true accountability and low specialized skills.</h3>
                  <p></p>
                </div>
                <div className="div-right2">
                  <h3>No formal resource onboarding, ongoing training or management.</h3>
                  <h3>Workflow not customized to your unique needs.</h3>
                  <p></p>
                </div>
                <h2>In-house solutions to get the data ready is cumbersome, expensive and time-consuming.
                </h2>
                <p></p>
              </div>
              <p></p>
            </div>
          </div>
        </section>


        <section></section>

        <section></section>

      </article>
    </div>

  )
}

export default data
