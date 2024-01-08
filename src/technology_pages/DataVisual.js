import React from 'react';
import imagePaths from "../imagePath";
import "../technology_pages/ApplicationDevelopment.css";
import { useState, useEffect } from 'react';
import goToTop from "../images/goto_top.png";

function DataVisual() {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
  
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
  
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
    return (
        <div className='app-container'>
            <section className='app-section1'>
                <div className='app-content1'>
                    <h1>Data Visualization & Reporting Outsourcing</h1>
                    <p></p>
                    <h2>We provide data visualization implementation and support services in Tableau and Power BI tools to help transform large and complex datasets into dashboards to answer specific business questions and provide insights. Our team of data experts uses these tools to create custom visualizations that are tailored to the specific needs of our clients. We provide interactive and dynamic visualizations that are both beautiful and informative.</h2>
                </div>
            </section>

            <section className='app-section2'>
                <div className='app-content2'>
                    <div className='app-div2'>
                        <h1>Our Data Visualization & Reporting Outsourced Services</h1>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk1} alt='' />
                                </div>
                                <h2>Data Analysis</h2>
                                <h3>We begin by understanding the business needs and the data available. We analyze the data to find trends, patterns, and insights that can be used to make informed business decisions.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk2} alt='' />
                                </div>
                                <h2>Dashboard and Report Design</h2>
                                <h3>We design custom dashboards and reports that meet the client's specific requirements. We use a variety of visualizations such as bar charts, pie charts, line charts, heat maps, and geographic maps to present the data in a clear and intuitive way.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='app-body2'>
                        <div className='app-left'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk3} alt='' />
                                </div>
                                <h2>Interactive Data Visualization
                                </h2>
                                <h3>We create interactive data visualization that allows users to explore the data and gain insights. We use filters, drill-downs, and other interactive features to help users identify trends and outliers.</h3>
                            </div>
                        </div>
                        <div className='app-right'>
                            <div className='app-element'>
                                <div className='app-icon'>
                                    <img src={imagePaths.zendesk4} alt='' />
                                </div>
                                <h2>Data Sources Integration</h2>
                                <h3>We can integrate data from multiple sources, such as Excel, SQL Server, Oracle, and cloud-based services, into a single dashboard or report. This helps to create a unified view of the data, making it easier to analyze and draw insights.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='quality-section3-1'>
                <div className='quality-content3'>
                    <div className='quality-div3'>
                        <h1>Technology Expertise</h1>
                    </div>
                    <div className='quality-body3'>
                        <div className='quality-left'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.tableuIcon} alt='' />
                                </div>
                                <h2>Tableau
                                </h2>
                            </div>
                            <div className='quality-list'>
                                <ul>
                                    <li>Connect and extract data from various data sources including Presto, MySQL, Google Analytics, Hadoop, and Snowflake.</li>
                                    <li>Clean, modify and filter data to ensure accuracy and prepare it for analysis and reporting.</li>
                                    <li>Perform field actions like renaming, removing, modifying, splitting, and creating calculated fields to refine the data.</li>
                                    <li>Aggregate and join additional data to enhance analysis.</li>
                                    <li>Union additional data to create a comprehensive dataset for analysis.</li>
                                    <li>Work with live and in-memory data to enable real-time analysis.</li>
                                    <li>Create advanced visualizations, especially with map data, to enhance data analysis and improve data insights.</li>
                                    <li>Optimize mobile view to ensure the data is easily accessible on mobile devices.</li>
                                    <li>Work with revision history of workbooks to track changes and ensure data accuracy.</li>
                                    <li>Refresh ETL (extract, transform, load) processes to ensure that the data is up-to-date and ready for analysis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='quality-right'>
                            <div className='quality-element3'>
                                <div className='quality-icon'>
                                    <img src={imagePaths.powerBiIcon} alt='' />
                                </div>
                                <h2>Power BI</h2>
                            </div>

                            <div className='quality-list'>
                                <ul>
                                    <li>Extract data from various sources such as SQL, Snowflake, OracleDB, PostgreSQL, CSV, XML, pdf etc.</li>
                                    <li>Connect to data sources using VertiPaq or Direct Query model to access data in real-time</li>
                                    <li>Transform data by changing types, extracting datetime, merging and appending queries, and removing rows to prepare for analysis.</li>
                                    <li>Create interactive reports with functionalities like drill-through, bookmarks, error bands, and cut-off date functionalities.</li>
                                    <li>Utilize inbuilt and custom visuals such as Infographic designer, Microsoft charticulator, Power KPI, and Divergent stacked Bar chart</li>
                                    <li>Design interactive dashboards with advanced slicers/filters and KPI cards implementation.</li>
                                    <li>Utilize complex DAX queries and extensive functions to analyze and manipulate data</li>
                                    <li>Implement Row Level Security to restrict report view and ensure data privacy and confidentiality</li>
                                    <li>Create and manage Power BI Apps for better collaboration and sharing of data insights.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isVisible && (
                <>
                    <div className="top-btn" onClick={goToBtn}>
                        <img src={goToTop} className="top-btn--icon" />
                    </div>
                    <div className='icon-text'>
                        BACK TO TOP
                    </div>
                </>
            )}

        </div>
    )
}

export default DataVisual
