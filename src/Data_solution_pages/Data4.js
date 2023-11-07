import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";

function Data4() {
  return (
    <div className='data-container'>
    <article>
        <section className='data-section1-3'>
            <div className='data-content1'>
                <h1>Data Categorization</h1>
                <p></p>
                {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data7}</p>
                            </div>
                        ))}
            </div>
        </section>

        <section className='data-section2-3'>
                    <div className='data-content2'>
                        <p></p>
                        {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data8}</p>
                                <p></p>
                                <p>{section.data9}</p>
                            </div>
                        ))}
                        <p></p>
                    </div>
        </section>
                </article>
                </div>
  )
};

export default Data4
