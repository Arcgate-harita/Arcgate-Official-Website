import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Link } from "react-router-dom";
import imagePaths from "./imagePath";
import toggle1 from "./images/align-justify.svg";
import toggle2 from "./images/x.svg";

import cancelIcon from "./images/cancleIccon.png";

import podcastLogo from "./images/logo_podcasts.png";


import blogLogo from "./images/logo_arcgate_blog.png";

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const [isBpoMenuOpen, setIsBpoMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [isInsightMenuOpen, setIsInsightMenuOpen] = useState(false);
  const [isHeaderContentVisible, setIsHeaderContentVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [logo, setLogo] = useState("arcgate"); 
 

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
  }

  const handleCancelClick = () => {
    setIsOpen(false);
    setIsHeaderContentVisible(!isHeaderContentVisible);
  };

   // Function to set the podcast logo
   const setPodcastLogo = () => {
    setLogo("podcast");
  };

  // Function to set the blog logo
  const setBlogLogo = () => {
    setLogo("blog");
  };

  useEffect(() => {
    if (location.pathname.includes("/podcast")) {
      setPodcastLogo();
    } else if (location.pathname.includes("/blog")) {
      setBlogLogo();
    } else {
      setLogo("arcgate");
    }
  }, [location.pathname]);


  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } 

    else if (location.pathname === '/about') {
      window.location.reload();
    }

    else if (location.pathname === '/technology') {
      window.location.reload();
    }

    else if (location.pathname === '/clients') {
      window.location.reload();
    }

    else if (location.pathname === '/career') {
      window.location.reload();
    }

    else if (location.pathname === '/contact') {
      window.location.reload();
    }
    
     else {
      setActiveDropdown(null);
      setIsOpen(false);
      setIsBpoMenuOpen(false);
      setIsIndustriesMenuOpen(false);
      setIsInsightMenuOpen(false);
      handleLinkClick();
      navigate('/');
    }
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
            <a className="current-link" href="/about">
              See Current Openings
            </a>
            <button id="cancelButton" onClick={handleCancelClick}>
              <img src={cancelIcon} alt="Cancel Icon" />
            </button>
          </div>
        )}
        <section className={`navbar ${isOpen ? 'open' : ''}`} >

          <div className="arcgate-logo" onClick={handleLogoClick} style={{ display: logo === "arcgate" ? 'block' : 'none' }}>
            <Link to="/"></Link>
          </div>
          <div className="podcast-logo" style={{ display: logo === "podcast" ? 'block' : 'none' }}>
            <img src={podcastLogo} alt="Podcast Logo" onClick={handleLinkClick} />
          </div>
          <div className="blog-logo" style={{ display: logo === "blog" ? 'block' : 'none' }}>
            <img src={blogLogo} alt="Blog Logo" onClick={handleLinkClick} />
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

              {logo === "podcast" && (
                <div className="home-logo">
                  <NavLink to='/'>HOME</NavLink>
                </div>
              )}
              {logo === "blog" && (
                <div className="home-logo">
                  <NavLink to='/'>HOME</NavLink>
                </div>
              )}

              <li className={location.pathname === '/about' ? 'active' : ''} onClick={handleLogoClick} >
                <NavLink to='/about'>ABOUT</NavLink>
              </li>

              <li
                className={`bpo-item ${location.pathname === '/view1' ? 'active' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter('bpo')}
              >
                <a>
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
                          <span className='data-process-image1'>
                            <img src={imagePaths.customerImage} alt='' />
                          </span>
                          <br></br>
                          <span className='data-process-text'>
                            CUSTOMER ONBOARDING & SUPPORT
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/order-management'
                          onClick={handleLinkClick}>
                          <span className='data-process-image2'>
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
                          <span className='data-process-image3'>
                            <img src={imagePaths.transImage} alt='' />
                          </span>
                          <span className='data-process-text'>
                            TRANSCRIPTION
                          </span>
                        </Link>
                      </li>
                      <div className="nav-button">
                        <center>
                          <Link to="/view1"
                            onClick={handleLinkClick}>
                            <button>View More</button>
                          </Link>
                        </center>
                      </div>

                    </ul>

                  )}
                </a>

              </li>


              <li className={location.pathname === '/technology' ? 'active' : ''} onClick={handleLogoClick}>
                <NavLink to='/technology'>TECHNOLOGY</NavLink>
              </li>


              <li
                className={`industries-item ${location.pathname === '/view2' ? 'active' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter('industries')}
              >
                <a>
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
                            ADTECH
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
                          <span className='data-process-image1'>
                            <img src={imagePaths.tech4} alt='' />
                          </span>
                          <p></p>
                          <span className='data-process-text'>
                            OIL & ENERGY
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/Industry5'
                          onClick={handleLinkClick}>
                          <span className='data-process-image2'>
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
                          <span className='data-process-image3'>
                            <img src={imagePaths.tech6} alt='' />
                          </span>
                          <span className='data-process-text'>
                            MARKETPLACES & ECOMMERCE
                          </span>
                        </Link>
                      </li>
                      <div className="nav-button">
                        <center>
                          <Link to="/view2"
                            onClick={handleLinkClick} >
                            <button>View More</button>
                          </Link>
                        </center>
                      </div>
                    </ul>
                  )}
                </a>
              </li>

              <li className={location.pathname === '/clients' ? 'active' : ''} onClick={handleLogoClick}>
                <NavLink to="/clients">CLIENTS</NavLink>
              </li>

              <li className={location.pathname === '/career' ? 'active' : ''} onClick={handleLogoClick}>
                <Link to="/career">CAREERS</Link>
              </li>

              <li className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLogoClick}>
                <Link to="/contact">CONTACT</Link>
              </li>

              <li
                className={`insight-item ${location.pathname === '/view3' ? 'active' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter('insight')}
              >
               <a>
                  INSIGHT
                  <span className="down-arrow"></span>
                  {activeDropdown === 'insight' && (
                    <ul className="insight-dropdown"
                      onMouseLeave={handleMouseLeave}>
                      <li>

                      <Link to='/blogView' onClick={() => { handleLinkClick(); setBlogLogo(); }}>
                         <span className='data-process-image' >

                            <img src={imagePaths.blogIcon} alt='' />
                          </span>
                          <span className='data-process-text1'>
                            BLOGS
                          </span>
                        </Link>
                      </li>
                      <li>

                      <Link to='/podcast' onClick={() => { handleLinkClick(); setPodcastLogo(); }}>
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
                          <Link to="/view3"
                            onClick={handleLinkClick} >
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
