import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "./Navbar.css";
import { Link } from "react-router-dom";
import imagePaths from "./imagePath";
import toggle1 from "./images/align-justify.svg";
import toggle2 from "./images/x.svg";
import cancelIcon from "./images/cancle.png";


function Navbar() {

  const location = useLocation();
  const [isBpoMenuOpen, setIsBpoMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [isInsightMenuOpen, setIsInsightMenuOpen] = useState(false);
  const [isHeaderContentVisible, setIsHeaderContentVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    setIsBpoMenuOpen(true);
    setIsIndustriesMenuOpen(true);
    setIsInsightMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setIsBpoMenuOpen(false);
    setIsIndustriesMenuOpen(false);
    setIsInsightMenuOpen(false);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
    setIsBpoMenuOpen(false);
    setIsIndustriesMenuOpen(false);
    setIsInsightMenuOpen(false);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
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
            <li className={location.pathname === '/' ? 'active' : ''}>
                <NavLink to='/'></NavLink>
              </li>

              <li className={location.pathname === '/about' ? 'active' : ''}>
                <NavLink to='/about'>ABOUT</NavLink>
              </li>

              <li
                className={`bpo-item ${location.pathname === '/view1'  ? 'active' : ''
                }`}
                onMouseEnter={() => handleMouseEnter('bpo')}
              >
                  <NavLink to="/view1">
                  BPO
                  <span className="down-arrow"></span>
                  {activeDropdown === 'bpo' && (
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
                </NavLink>

              </li>


              <li className={location.pathname === '/technology' ? 'active' : ''}>
                <NavLink to='/technology'>TECHNOLOGY</NavLink>
              </li>


                <li
                className={`industries-item ${location.pathname === '/view2'  ? 'active' : ''
                }`}
                onMouseEnter={() => handleMouseEnter('industries')}
              >
                  <NavLink to="/view2">
                  INDUSTRIES
                  <span className="down-arrow"></span>
                  {activeDropdown === 'industries' && (
                    <ul className="industries-dropdown" 
                     onMouseLeave={handleMouseLeave}>
                      <li>
                      <Link to='/Industry1' 
                       onClick={handleLinkClick}>
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
                       onClick={handleLinkClick}>
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
                        onClick={handleLinkClick}>
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
                         onClick={handleLinkClick}>
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
                        onClick={handleLinkClick}>
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
                          onClick={handleLinkClick}>
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
                </NavLink>
              </li>

               <li className={location.pathname === '/clients' ? 'active' : ''}>
                <NavLink to="/clients">CLIENTS</NavLink>
              </li>

              <li className={location.pathname === '/career' ? 'active' : ''}>
                <Link to="/career">CAREERS</Link>
              </li>

              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact">CONTACT</Link>
              </li>

              <li
                className={`insight-item ${location.pathname === '/view3'  ? 'active' : ''
                }`}
                onMouseEnter={() => handleMouseEnter('insight')}
              >
                  <NavLink to="/view3">
                  INSIGHT
                  <span className="down-arrow"></span>
                  {activeDropdown === 'insight' && (
                    <ul className="insight-dropdown"
                    onMouseLeave={handleMouseLeave}>
                      <li>
                      <Link to='/blogView'
                      onClick={handleLinkClick}>
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
                        onClick={handleLinkClick}>
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
                </NavLink>
              </li>

            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
}

export default Navbar;
