import React from 'react';
import "../Data_solution_pages/Data.css";
import data from "../Data_solution_pages/data_para";
import { useEffect } from 'react';

function Data4() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='data-solution-container'>
            <article>
                <section className='data-solution-section1-3'>
                    <div className='data-solution-content1'>
                        <h1>Data Categorization</h1>
                        <p></p>
                        {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data7}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='data-solution-section2-3'>
                    <div className='data-solution-content2'>
                        <p></p>
                        {data.map((section, index) => (
                            <div key={index}>
                                <p>{section.data8}</p>
                                <br></br>
                                <br></br>
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
