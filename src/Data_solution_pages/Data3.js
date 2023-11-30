import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";

function Data3() {
  return (
    <div className='data-solution-container'>
    <article>
        <section className='data-solution-section1-2'>
            <div className='data-solution-content1'>
                <h1>Data Collection</h1>
                <p></p>
                {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data5}</p>
                            </div>
                        ))}
            </div>
        </section>

        <section className='data-solution-section2'>
                    <div className='data-solution-content2'>
                        <p></p>
                        {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data6}</p>
                            </div>
                        ))}
                        <p></p>
                    </div>
        </section>
                </article>
                </div>
  )
};

export default Data3
