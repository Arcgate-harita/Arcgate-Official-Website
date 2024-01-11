import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,


  offset: 120,
  delay: 0,
  duration: 1000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});

function Data5() {
  return (
    <div className='data-solution-container'>
      <article>
        <section className='data-solution-section1-4'>
          <div className='data-solution-content1'>
            <h1>Data Cleansing</h1>
            <p></p>
            {data.map((section, index) => (
              <div key={index}>
                <p>{section.data10}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='data-solution-section2-4'>
          <div className='data-solution-content2-4'>
            <div className='data-solution-div2'>
              <div className='data-solution-body'>
                <div data-aos="fade-up">
                  <div className='data-solution-data'>
                    <p>Our data experts review your data sets and verify critical facts through various pre-defined data sources. This helps ensure that the data is clean, standardized, accurate and up to date. The result is better decision-making and analysis.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
              <div className='data-solution-body'>
                <div data-aos="fade-up">
                  <div className='data-solution-data'>
                    <p>We identify incomplete, incorrect, inaccurate and irrelevant parts of the data and then replace, modify or delete this bad data.</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
              <div className='data-solution-body'>
                <div data-aos="fade-up">
                  <div className='data-solution-data'>
                    <p>If we determine that the information is incorrect, we will provide the corrected information and the source it came from, letting you update your database with accurate data..</p>
                    <p></p>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
};

export default Data5
