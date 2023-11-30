import React from 'react';
import "../bpo_pages/account_outsourcing.css";
import imagePaths from '../imagePath';
import { useEffect } from 'react';

function AccountOutsourcing() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  
  return (
    <div className='account-container'>
      <article>
        <section className='account-section1'>
          <div className='account-content1'>
            <h1>Accounting & Finance Outsourcing Services</h1>
            <p></p>
          </div>
        </section>

        <section className='account-section2'>
          <div className='account-content2'>'
            <div className='account-div'>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account1} />
                  <br></br>
                </span>
                <br></br>
                <span className='span-text'>Invoice Reconciliation & Approval</span>
                <br></br>
              </div>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account2} />
                  <br></br>
                </span>
                <br></br>
                <span className='span-text'>Invoice Creation</span>
                <br></br>
              </div>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account3} />
                  <br></br>
                </span>
                <br></br>
                <span className='span-text'>Bank Statement Reconciliation</span>
                <br></br>
              </div>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account4} />
                  <br></br>
                </span>
                <br></br>
                <span className='span-text'>Vendor Statement Review</span>
                <br></br>
              </div>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account5} />
                  <br></br>
                </span>
                <br></br>
                <span className='span-text'>PO Processing</span>
                <br></br>
              </div>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account6} />
                  <br></br>
                </span >
                <br></br>
                <span className='span-text'>Vendor Onboarding</span>
                <br></br>
              </div>
              <div className='account-body'>
                <br></br>
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.account7} />
                  <br></br>
                </span>
                <br></br>
                <span className='span-text'>Reporting & Analytics</span>
                <br></br>
              </div>
              <br></br>
            </div>
            <br></br>
          </div>
        </section>
      </article>
    </div>
  )
}


export default AccountOutsourcing
