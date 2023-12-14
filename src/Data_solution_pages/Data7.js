import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";
import imagePaths from '../imagePath';

function Data7() {
  return (
    <div className='data-solution-container'>
      <article>
        <section className='data-solution-section1-6'>
          <div className='data-solution-content1'>
            <h1>Reporting</h1>
            <p></p>
            {data.map((section, index) => (
              <div key={index}>
                <p>{section.data13}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='data-solution-section2-6'>
          <div className='data-solution-content2'>
            <p></p>
            {data.map((section, index) => (
              <div key={index}>
                <p>{section.data14}</p>
                <p></p>
              </div>
            ))}



            <div className='data-solution-content2-6'>'
              <div className='data-solution-div6'>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.dashboard1} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Dashboards</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.dashboard2} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Data pulls</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.dashboard3} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Reoprts</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.dashboard4} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Charts</span>
                  <br></br>
                </div>
                <div className='data-solution-body6'>
                  <br></br>
                  <span className='span-image'>
                    <br></br>
                    <img src={imagePaths.dashboard5} />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='span-text'>Analysis</span>
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

export default Data7
