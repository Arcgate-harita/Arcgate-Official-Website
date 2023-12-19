import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import imagePaths from "./imagePath";
import toggle1 from "./images/align-justify.svg";
import toggle2 from "./images/x.svg";
import cancelIcon from "./images/cancle.png";


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
    var headerContent = document.querySelector(".header-content");
    var navbar = document.querySelector(".navbar");

    headerContent.style.display = "none";
    navbar.style.top = "0";

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
          <a className="current-link" href="#current-openings">
            See Current Openings
          </a>
          <button id="cancelButton" onClick={closeDropdownAndToggle}>
            <img src={cancelIcon} alt="Cancel Icon" />
          </button>
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
                <Link to="/" onClick={closeDropdownAndToggle} >Home</Link>
              </li>

              <li>
                <Link to="/about" onClick={closeDropdownAndToggle} >About</Link>
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

                    <div className='row1-bpo'>
                      <div className='data-process-type1'>
                        <Link to='/ai-data-preparation' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.bpoImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            ACCOUNTING OUTSOURCING
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/ai-data-preparation' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image6'>
                            <img src={imagePaths.aiImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            AI DATA PREPARATION
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/data-solution' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image3'>
                            <img src={imagePaths.machine2} alt='' />
                          </span>
                          <span className='data-process-text'>
                            DATA SOLUTIONS
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className='row2'>
                      <div className='data-process-type1'>
                        <Link to='/ai-data-preparation' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image2'>
                            <img src={imagePaths.customerImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            CUSTOMER ONBOARDING & SUPPORT
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/order-management' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image5'>
                            <img src={imagePaths.reporting21} alt='' />
                          </span>
                          <span className='data-process-text'>
                            ORDER MANAGEMENT
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/transcription' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image4'>
                            <img src={imagePaths.transImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            TRANSCRIPTION
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
                <Link to="/technology" onClick={closeDropdownAndToggle}>TECHNOLOGY</Link>
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

                    <div className='row1-drop'>
                      <div className='data-process-type1'>
                        <Link to='/Industry1' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image'>
                            <img src={imagePaths.tech1} alt='' />
                          </span>
                          <span className='data-process-text'>
                            AD TECH
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/Industry2' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image2'>
                            <img src={imagePaths.tech2} alt='' />
                          </span>
                          <span className='data-process-text'>
                            FOOD TECH
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/Industry3' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image3'>
                            <img src={imagePaths.tech3} alt='' />
                          </span>
                          <span className='data-process-text'>
                            REAL ESTATE TECH
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className='row2-drop'>
                      <div className='data-process-type1'>
                        <Link to='/Industry4' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image4'>
                            <img src={imagePaths.tech4} alt='' />
                          </span>
                          <span className='data-process-text'>
                            OIL & ENERGY
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/Industry5' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image5'>
                            <img src={imagePaths.tech5} alt='' />
                          </span>
                          <span className='data-process-text'>
                            SHARING ECONOMY
                          </span>
                        </Link>
                      </div>

                      <div className='data-process-type1'>
                        <Link to='/Industry6' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image6'>
                            <img src={imagePaths.tech6} alt='' />
                          </span>
                          <span className='data-process-text'>
                            MARKETPLACES & ECOMMERCE
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="nav-button">
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
                <Link to="/clients" onClick={closeDropdownAndToggle} >CLIENTS</Link>
              </li>
              <li>
                <Link to="/career" onClick={closeDropdownAndToggle} >CAREERS</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeDropdownAndToggle} >CONTACT</Link>
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

                    <div className="row1-blog">
                      <div className='data-process-type1'>
                        <Link to='/blogView' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image2' >
                            <img src={imagePaths.blogIcon} alt='' />
                          </span>
                          <span className='data-process-text1'>
                            BLOGS
                          </span>
                        </Link>
                      </div>
                      <div className='data-process-type1'>
                        <Link to='/podcast' onClick={handleDropdownLinkClick}>
                          <span className='data-process-image3' >
                            <img src={imagePaths.Podcast} alt='' />
                          </span>
                          <span className='data-process-text'>
                            PODCASTS
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="nav-button">
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
