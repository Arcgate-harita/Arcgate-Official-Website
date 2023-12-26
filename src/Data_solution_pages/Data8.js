import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";
import imagePaths from '../imagePath';

function Data8() {
  return (
    <div className='data-solution-container'>
      <article>
        <section className='data-solution-section1-7'>
          <div className='data-solution-content1'>
            <h1>Analytics</h1>
            <p></p>
            {data.map((section, index) => (
              <div key={index}>
                <p>{section.data15}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='data-solution-section2-7'>
          <div className='data-solution-content2'>
            <p></p>
            {data.map((section, index) => (
              <div key={index}>
                <p>{section.data16}</p>
                <p></p>
              </div>
            ))}


            <div className='data-solution-content2-7'>
              <div className='data-solution-div6'>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.analysis1} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Customer and Marketing Analytics</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.analysis2} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Fraud and Risk Analytics</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.analysis3} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Human Capital Analytics</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.analysis4} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Operations Analytics
                  </span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.analysis5} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Sales and Customer Services Analytics</span>
                  <br></br>
                </div>
                <br></br>
              </div>
            </div>
            <p></p>
          </div>
        </section>
      </article>
    </div>
  )
};

export default Data8
