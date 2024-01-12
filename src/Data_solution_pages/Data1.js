import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";
import { useEffect } from 'react';

function Data1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='data-solution-container'>
            <article>
                <section className='data-solution-section1'>
                    <div className='data-solution-content1'>
                        <h1>Data Enrichment</h1>
                        <p></p>
                        {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data1}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='data-solution-section2'>
                    <div className='data-solution-content2'>
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
