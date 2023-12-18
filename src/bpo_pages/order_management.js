import React from 'react'
import imagePaths from '../imagePath'
import "../bpo_pages/order_management.css";
import { Link } from 'react-router-dom';

function order_management() {
  return (
    <div className='order-container'>
      <article>
        <section className='order-section1'>
          <div className='order-content1'>
            <h1>Order Management</h1>
            <p></p>
            <h2>Arcgate helps fast growing companies increase revenue with higher order accuracy and shorter order entry and fulfillment times.</h2>
            <p></p>
          </div>
        </section>

        <section className='order-section2'>
          <div className='order-content2'>
            <div className='order-div2'>
              <h2>Using industry best practices, the improved order management processes result in a superior customer experience, better service levels, and cost savings.</h2>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <img src={imagePaths.order1} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Order Entry
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <img src={imagePaths.order2} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Order Fulfillment
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <img src={imagePaths.order3} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Order Tracking
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <img src={imagePaths.order4} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Cancellations
                  </span>
                  <br></br>
                </a>
              </div>
              <div className='order-body2'>
                <a>
                  <br></br>
                  <span className='order-image'>
                    <br></br>
                    <img src={imagePaths.order5} alt='' />
                    <br></br>
                  </span>
                  <br></br>
                  <span className='order-text'>
                    Reporting & Analytics
                  </span>
                  <br></br>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='order-section3'>
          <div className='order-content3'>
            <div className='order-div3'>
              <div className='order-body3'>
                <div className='order-data'>
                  <p>We help clients identify and manage order exceptions and standardize the order management business process. A reduction in on-hold orders results in improved cycle times and revenue recognition.</p>
                  <p></p>
                </div>
                <p></p>
              </div>
              <div className='order-body3'>
                <div className='order-data'>
                  <p>Our project leadership team closely tracks operational efficiency and effectiveness metrics, such as SLAs, Turnaround time (TAT) and transaction accuracy.</p>
                  <p></p>
                </div>
                <p></p>
              </div>
              <div className='order-body3'>
                <div className='order-data'>
                  <p>The result is reduced average cost of order processing and ability to scale up quickly during promotional events and holidays.</p>
                  <p></p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </section>


        <section className='blogView-section2'>
          <div className='blogView-div2'>
            <h6>MORE ARTICLES</h6>
            <div className='blogView'>
              <div className='blogView-container1'>
                <div className='blogView-content2'>
                  <Link to='/blog25'>
                    <div className='blogView-div'>
                      <img src={imagePaths.blog24} alt='' />
                    </div>
                    <div className='thumb-blogView'>
                      <p>Retail in India and Future Trends</p>
                    </div>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>


      </article>
    </div>
  )
}

export default order_management
