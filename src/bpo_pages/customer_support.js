import React from 'react'
import "../bpo_pages/customer_support.css";
import imagePaths from '../imagePath';

function customer_support() {
  return (
    <div className='customer-container'>
      <article>
        <section className='customer-section1'>
          <div className='customer-content1'>
            <h1>Customer Onboarding & Support</h1>
            <p></p>
            <h2>When you outsource new customer onboarding and support to Arcgate, you ensure high quality, flexibility, scalability, and a commitment to excellence in service.</h2>
            <p></p>
          </div>
        </section>

        <section className='customer-section2'>
          <div className='customer-content2'>
            <div className='customer-div2'>
              <h2>In today’s highly competitive marketplace, you need to work harder to attract and retain every single customer. Your customers expect consistent, timely and personalized service.
                <br></br>
              </h2>

              <h2>Work with Arcgate to engage with your customers and make sure they have the best possible experience right from initial set up to ongoing technical and general support.</h2>

              <div className='customer-body2'>
                <a href=''>
                  <span>
                    <img src={imagePaths.customer1} alt='' />
                  </span>
                  <br></br>
                  <span>Customer Onboarding</span>
                  <br></br>
                  <span>
                    <p></p>
                    <p>We help set up every new customer on your platform – the result is a seamless new customer onboarding process.</p>
                  </span>
                </a>
              </div>

              <div className='customer-body2'>
                <a href=''>
                  <span>
                    <img src={imagePaths.customer2} alt='' />
                  </span>
                  <br></br>
                  <span>Customer Care & Help Desk</span>
                  <br></br>
                  <span>
                    <p></p>
                    <p>Fanatical service request management to ensure high customer satisfaction.</p>
                  </span>
                </a>
              </div>


            </div>
          </div>
        </section>

        <section className='solution-section4'>
          <div className='solution-content4'>
            <h6>Insights</h6>
            <div className='solution-div4'>
              <div className='solution-body4'>
                <div className='insight-card'>
                  <div className='tag'>
                    <img src={imagePaths.imageBlog1} alt='' />
                  </div>
                  <p>
                    <a href=''></a>
                  </p>
                  <a>
                    <h2></h2>
                  </a>
                  <p>
                    <a href=''></a>
                  </p>
                </div>
                <p></p>
              </div>
              <p></p>
              <div className='solution-body4'>
                <div className='insight-card'>
                  <div className='tag'>
                    <img src={imagePaths.imageBlog1} alt='' />
                  </div>
                  <p>
                    <a href=''></a>
                  </p>
                  <a>
                    <h2></h2>
                  </a>
                  <p>
                    <a href=''></a>
                  </p>
                </div>
                <p></p>
              </div>
              <p></p>
              <div className='solution-body4'>
                <div className='insight-card'>
                  <div className='tag'>
                    <img src={imagePaths.imageBlog1} alt='' />
                  </div>
                  <p>
                    <a href=''></a>
                  </p>
                  <a>
                    <h2></h2>
                  </a>
                  <p>
                    <a href=''></a>
                  </p>
                </div>
                <p></p>
              </div>
              <p></p>
              <div className='solution-body4'>
                <div className='insight-card'>
                  <div className='tag'>
                    <img src={imagePaths.imageBlog1} alt='' />
                  </div>
                  <p>
                    <a href=''></a>
                  </p>
                  <a>
                    <h2></h2>
                  </a>
                  <p>
                    <a href=''></a>
                  </p>
                </div>
                <p></p>
              </div>
              <p></p>
            </div>
          </div>
        </section>

      </article>
    </div>
  )
}

export default customer_support
