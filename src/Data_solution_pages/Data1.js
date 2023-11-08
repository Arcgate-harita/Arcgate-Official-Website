import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";

function Data1() {
  return (
    <div className='data-container'>
    <article>
        <section className='data-section1'>
            <div className='data-content1'>
                <h1>Data Enrichment</h1>
                <p></p>
                {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data1}</p>
                            </div>
                        ))}
            </div>
        </section>

        <section className='data-section2'>
                    <div className='data-content2'>
                        <p></p>
                        {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data2}</p>
                            </div>
                        ))}
                        <p></p>
                    </div>
        </section>
                </article>
                </div>
  )
};

export default Data1