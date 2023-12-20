import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import imagePaths from "./imagePath";
import toggle1 from "./images/align-justify.svg";
import toggle2 from "./images/x.svg";
import cancelIcon from "./images/cancle.png";


function Navbar() {

  const [isBpoMenuOpen, setIsBpoMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [isInsightMenuOpen, setIsInsightMenuOpen] = useState(false);
  const [isHeaderContentVisible, setIsHeaderContentVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  const handleMouseEnter = () => {
    setIsBpoMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsBpoMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsBpoMenuOpen(false);
  };

  const handleMouseEnterIndustries = () => {
    setIsIndustriesMenuOpen(true);
  };

  const handleMouseLeaveIndustries = () => {
    setIsIndustriesMenuOpen(false);
  };

  const handleLinkClickIndustries = () => {
    setIsIndustriesMenuOpen(false);
  };

  const handleMouseEnterInsight = () => {
    setIsInsightMenuOpen(true);
  };

  const handleMouseLeaveInsight = () => {
    setIsInsightMenuOpen(false);
  };

  const handleLinkClickInsight = () => {
    setIsInsightMenuOpen(false);
  };

  const handleCancelClick = () => {
    setIsHeaderContentVisible(!isHeaderContentVisible);
  };

  return (
    <header>
      <div className="header-container">
      {isHeaderContentVisible && (
        <div className="header-content">
          <p>
            <strong className="strong-word">We are hiring!</strong>
            <span>
              Become an Arcgatian. Join our team and deliver outsourcing services to the most innovative companies in the world.
            </span>
          </p>
          <a className="current-link" href="#current-openings">
            See Current Openings
          </a>
          <button id="cancelButton" onClick={handleCancelClick}>
            <img src={cancelIcon} alt="Cancel Icon" />
          </button>
        </div>
)}
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
                <Link to="/" ></Link>
              </li>

              <li>
                <Link to="/about" >ABOUT</Link>
              </li>

              <li className="bpo-item"
                onMouseEnter={handleMouseEnter} >
                <a href="#" >
                  BPO
                  <span className="down-arrow"></span>
                  {isBpoMenuOpen && (
                    <ul className="bpo-dropdown"
                      onMouseLeave={handleMouseLeave}>
                      <li>
                        <Link to='/accounting_outsourcing'
                          onClick={handleLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.bpoImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            ACCOUNTING OUTSOURCING
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/ai-data-preparation'
                          onClick={handleLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.aiImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            AI DATA PREPARATION
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/data-solution'
                          onClick={handleLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.machine2} alt='' />
                          </span>
                          <span className='data-process-text'>
                            DATA SOLUTIONS
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/customer-onboarding-support'
                          onClick={handleLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.customerImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            CUSTOMER ONBOARDING & SUPPORT
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/order-management'
                          onClick={handleLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.reporting21} alt='' />
                          </span>
                          <span className='data-process-text'>
                            ORDER MANAGEMENT
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/transcription'
                          onClick={handleLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.transImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            TRANSCRIPTION
                          </span>
                        </Link>
                      </li>
                      <div className="nav-button">
                        <center>
                          <Link to="/view1" >
                            <button>View More</button>
                          </Link>
                        </center>
                      </div>

                    </ul>

                  )}
                </a>

              </li>

              <li>
                <Link to="/technology">TECHNOLOGY</Link>
              </li>

              <li className="industries-item" onMouseEnter={handleMouseEnterIndustries}>
                <a href="#">
                  INDUSTRIES
                  <span className="down-arrow"></span>
                  {isIndustriesMenuOpen && (
                    <ul className="industries-dropdown" onMouseLeave={handleMouseLeaveIndustries}>
                      <li>
                      <Link to='/Industry1' 
                       onClick={handleLinkClickIndustries}>
                          <span className='data-process-image'>
                            <img src={imagePaths.tech1} alt='' />
                          </span>
                          <span className='data-process-text'>
                            AD TECH
                          </span>
                        </Link>
                      </li>
                      <li>
                      <Link to='/Industry2'
                         onClick={handleLinkClickIndustries}>
                          <span className='data-process-image'>
                            <img src={imagePaths.tech2} alt='' />
                          </span>
                          <span className='data-process-text'>
                            FOOD TECH
                          </span>
                        </Link>
                      </li>
                      <li>
                      <Link to='/Industry3'
                          onClick={handleLinkClickIndustries}>
                           <span className='data-process-image'>
                            <img src={imagePaths.tech3} alt='' />
                          </span>
                          <span className='data-process-text'>
                            REAL ESTATE TECH
                          </span>
                        </Link>
                      </li>
                      <li>
                      <Link to='/Industry4'
                          onClick={handleLinkClickIndustries}>
                         <span className='data-process-image'>
                            <img src={imagePaths.tech4} alt='' />
                          </span>
                          <span className='data-process-text'>
                            OIL & ENERGY
                          </span>
                        </Link>
                      </li>
                      <li>
                      <Link to='/Industry5'
                          onClick={handleLinkClickIndustries}>
                           <span className='data-process-image'>
                            <img src={imagePaths.tech5} alt='' />
                          </span>
                          <span className='data-process-text'>
                            SHARING ECONOMY
                          </span>
                        </Link>
                      </li>
                      <li>
                      <Link to='/Industry6'
                          onClick={handleLinkClickIndustries}>
                        <span className='data-process-image'>
                            <img src={imagePaths.tech6} alt='' />
                          </span>
                          <span className='data-process-text'>
                            MARKETPLACES & ECOMMERCE
                          </span>
                        </Link>
                      </li>
                      <div className="nav-button">
                        <center>
                          <Link to="/view2" >
                            <button>View More</button>
                          </Link>
                        </center>
                      </div>
                    </ul>
                  )}
                </a>
              </li>
              <li>
                <Link to="/clients">CLIENTS</Link>
              </li>
              <li>
                <Link to="/career">CAREERS</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>

              <li className="insight-item" onMouseEnter={handleMouseEnterInsight}>
                <a href="#">
                  INSIGHT
                  <span className="down-arrow"></span>
                  {isInsightMenuOpen && (
                    <ul className="insight-dropdown" onMouseLeave={handleMouseLeaveInsight}>
                      <li>
                      <Link to='/blogView'
                       onClick={handleLinkClickInsight}>
                         <span className='data-process-image' >
                            <img src={imagePaths.blogIcon} alt='' />
                          </span>
                          <span className='data-process-text1'>
                            BLOGS
                          </span>
                        </Link>
                      </li>
                      <li>
                      <Link to='/podcast'
                         onClick={handleLinkClickInsight}>
                            <span className='data-process-image' >
                            <img src={imagePaths.Podcast} alt='' />
                          </span>
                          <span className='data-process-text'>
                            PODCASTS
                          </span>
                        </Link>
                      </li>
                      <li>
                      </li>
                      <div className="nav-button">
                        <center>
                          <Link to="/view3" >
                            <button>View More</button>
                          </Link>
                        </center>
                      </div>
                    </ul>
                  )}
                </a>
              </li>

            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
}

export default Navbar;
