import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import imagePaths from "./imagePath";
// import {toggle1, toggle2 } from "./imagePath";
import toggle1 from "./images/align-justify.svg";
import toggle2 from "./images/x.svg";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  const [isBpoDropdownOpen, setIsBpoDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isInsightDropdownOpen, setIsInsightDropdownOpen] = useState(false);


  const closeBpoDropdown = () => {
    setIsBpoDropdownOpen(false);
  };

  const closeIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(false);
  };

  const closeInsightDropdown = () => {
    setIsInsightDropdownOpen(false);
  };


  const openBpoDropdown = () => {
    setIsBpoDropdownOpen(true);
  };


  const openIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(true);
  };


  const openInsightDropdown = () => {
    setIsInsightDropdownOpen(true);
  };



  const handleDropdownLinkClick = () => {
    closeBpoDropdown();
    closeIndustriesDropdown();
    closeInsightDropdown();
    closeDropdownAndToggle();
  };

  const closeDropdownAndToggle = () => {
    closeBpoDropdown();
    closeIndustriesDropdown();  
    closeInsightDropdown();
    setIsOpen(false); 
    };
    
     
    

  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <p>
            <strong className="strong-word">We are hiring!</strong>
            <span>
              Become an Arcgatian. Join our team and deliver outsourcing services to the most innovative companies in the world.
            </span>
          </p>
          <a className="current-link" href="career#current-openings">
            See Current Openings
          </a>
        </div>
      <section className={`navbar ${isOpen ? 'open' : ''}`} >
        <div className="arcgate-logo">
        <Link to="/"> 
        </Link>
        </div>
     
        <button className="toggle-button" 
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <img src={toggle2} alt="Times Icon" /> : <img src={toggle1} alt="Bars Icon" />}
      </button>
 
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/"  onClick={closeDropdownAndToggle} >Home</Link>
            </li>

            <li>
              <Link to="/about"  onClick={closeDropdownAndToggle} >About</Link>
            </li>

            <li className="bpo-item"
              onMouseEnter={openBpoDropdown}
              onMouseLeave={closeBpoDropdown} >
              <a href="#" onClick={openBpoDropdown}>
                BPO
                <span className="down-arrow"></span>
              </a>
              {isBpoDropdownOpen && (
                <div className="bpo-dropdown" onMouseEnter={openBpoDropdown} onMouseLeave={closeBpoDropdown}>

                  <div className='row1'>
                    <div className='data-process-type1'>
                      <Link to="/accounting_outsourcing"  data-testid="accounting-outsourcing-link" onClick={handleDropdownLinkClick} >
                        <span className='data-process-image'>

                          <img src={imagePaths.bpoImage} alt='' />

                        </span>
                        <span className='data-process-text1'>
                          Accounting Outsourcing
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/ai-data-preparation' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.image1} alt='' />
                        </span>
                        <span className='data-process-text'>
                          AI Data Preparation
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/data-solution' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.image2} alt='' />
                        </span>
                        <span className='data-process-text'>
                          Data Solutions
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className='row2'>
                    <div className='data-process-type1'>
                      <Link to='/customer-onboarding-support' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.image3} alt='' />
                        </span>
                        <span className='data-process-text2'>
                          customer Onboarding & support
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/order-management' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.image4} alt='' />
                        </span>
                        <span className='data-process-text'>
                          Order Management
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/transcription' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.image5} alt='' />
                        </span>
                        <span className='data-process-text'>
                          Transcription
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="nav-button">
                    <center>
                      <Link to="/view1" onClick={handleDropdownLinkClick}>
                        <button>View More</button>
                      </Link>
                    </center>
                  </div>
                </div>
              )}
            </li>


            <li>
              <Link to="/technology"  onClick={closeDropdownAndToggle}>TECHNOLOGY</Link>
            </li>
            <li className="industries-item"
              onMouseEnter={openIndustriesDropdown}
              onMouseLeave={closeIndustriesDropdown} >
              <a href="#" onClick={openIndustriesDropdown}>
                INDUSTRIES
                <span className="down-arrow"></span>
              </a>
              {isIndustriesDropdownOpen && (
                <div className="industries-dropdown" onMouseEnter={openIndustriesDropdown} onMouseLeave={closeIndustriesDropdown}>

                  <div className='row1'>
                    <div className='data-process-type1'>
                      <Link to="/industry1" onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.tech1} alt='' />
                        </span>
                        <span className='data-process-text1'>
                          ADTECH
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/industry2' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image' >
                          <img src={imagePaths.tech2} alt='' />
                        </span>
                        <span className='data-process-text'>
                          FOOD TECH
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/industry3' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.tech3} alt='' />
                        </span>
                        <span className='data-process-text'>
                          REAL ESTATE TECH
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className='row2'>
                    <div className='data-process-type1'>
                      <Link to='/industry4' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.tech4} alt='' />
                        </span>
                        <span className='data-process-text2'>
                          Oil & Energy
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/industry5' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.tech5} alt='' />
                        </span>
                        <span className='data-process-text'>
                          Sharing Economy
                        </span>
                      </Link>
                    </div>

                    <div className='data-process-type1'>
                      <Link to='/industry6' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image'>
                          <img src={imagePaths.tech6} alt='' />
                        </span>
                        <span className='data-process-text'>
                          MARKETPLACE & ECOMMERCE
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="industries-button">
                    <center>
                      <Link to="/view2" onClick={handleDropdownLinkClick}>
                        <button>View More</button>
                      </Link>
                    </center>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/clients"  onClick={closeDropdownAndToggle} >CLIENTS</Link>
            </li>
            <li>
              <Link to="/career"  onClick={closeDropdownAndToggle} >CAREERS</Link>
            </li>
            <li>
              <Link to="/contact"  onClick={closeDropdownAndToggle} >CONTACT</Link>
            </li>
            <li
              className="insight-item"
              onMouseEnter={openInsightDropdown}
              onMouseLeave={closeInsightDropdown} >
              <a href="#" onClick={openInsightDropdown}>
                INSIGHTS
              </a>
              <span className="down-arrow"></span>
              {isInsightDropdownOpen && (
                <div className="insight-dropdown" onMouseEnter={openInsightDropdown} onMouseLeave={closeIndustriesDropdown}>

                  <div className="row1">
                    <div className='data-process-type1'>
                      <Link to='/blogView' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image' >
                          <img src={imagePaths.tech2} alt='' />
                        </span>
                        <span className='data-process-text1'>
                          Blogs
                        </span>
                      </Link>
                    </div>
                    <div className='data-process-type1'>
                      <Link to='/podcast' onClick={handleDropdownLinkClick}>
                        <span className='data-process-image' >
                          <img src={imagePaths.tech2} alt='' />
                        </span>
                        <span className='data-process-text'>
                          Podcasts
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="insight-button">
                    <center>
                      <Link to="/view3" onClick={handleDropdownLinkClick}>
                        <button>View More</button>
                      </Link>
                    </center>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </section>
</div>
    </header>
  );
}

export default Navbar;
