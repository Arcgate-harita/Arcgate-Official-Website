import React from 'react'
import "../jobs_pages/research_analyst.css";
import ArcgateLogo from "../images/arcgateLogo.svg";
import closeIcon from "../images/cancleIccon.png";

function AccountExecutive() {
  return (
    <div className='research-container'>
        <article>
            <section>
              <div className='header-logo'>
                <img src={ArcgateLogo}></img>
                <p></p>
                <div className='close'>
                <a href='/career'>
                <img src={closeIcon}></img>
                </a>
              </div>
              </div>
              
                <div className='research-content'>
                    <h1>Accounts Executive</h1>
                    <ol>
                      <li>Proven working experience as Accounts Payable Clerk.</li>
                      <li>Solid understanding of basic bookkeeping and accounts payable principles.</li>
                      <li>NetSuite and Coupa experience is preferred.</li>
                      <li>Proficiency in English and in MS Excel.</li>
                      <li>High degree of accuracy and attention to detail.</li>

                      <li>Data entry skills along with a knack for numbers.</li>
                      <li>Proven ability to calculate, post and manage accounting figures and financial records.</li>
                      <li>Hands-on experience with spreadsheets and proprietary software.</li>
                      <li>Booking of the day-to-day Invoice doing proper Quality check-in line with the set parameters.</li>
                      <li>Facilitate payment of invoices due by sending bill reminders and contacting clients.</li>
                      <li>Understand expense accounts and cost centers.</li>
                      <li>Keeping track of all payments and expenditures, including payroll, purchase orders, invoices, statements, etc.</li>
                    </ol>
                </div>

                <div className='research-button'>
                <a href='/apply'>
                  <button>APPLY</button>
                  </a>
                </div>
            </section>
        </article>
    </div>
  )
}

export default AccountExecutive