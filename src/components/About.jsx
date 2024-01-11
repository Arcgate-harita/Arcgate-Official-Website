import React, { useState, useEffect } from "react";
import arcgateImage from "../images/arcgate-image.png";
import "../components/About.css";
import imagePaths from "../imagePath";
import { Link } from "react-router-dom";
import ImageModal from '../ImageModal';
import goToTop from "../images/goto_top.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({
  offset: 120,
  duration: 500,
  easing: 'ease-in-out',
  once: false,
  anchorPlacement: 'top-bottom bottom-top',
});


const About = () => {


  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };


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


  return (
    <div className="about-container">
      <article>
        <section className="about-section1">
          <div className="about-content">
            <div data-aos="fade-up">
              <img src={arcgateImage} alt=""></img>
            </div>
            <p></p>
            <div className="about-div">
              <h2>Hello</h2>
              <p></p>
              <p>We are Arcgate.</p>
              <p>Dun & Bradstreet ranked us as the Best Small & Medium Enterprise in the IT & ITES sector in India.</p>
              <p>We are a fast growing team of 2000+ highly skilled full-time analysts who have exclusively worked on multi-year engagements for a variety of market leading US customers.</p>
              <p>We work from a highly secure, state-of-the-art 150,000 square feet delivery center with 24×7 operations.</p>
              <p>We help some of the most innovative startups in the world with AI data preparation, data enrichment, search relevance, content moderation, application development and quality engineering. We believe that humans can augment machines to deliver smarter solutions.</p>
              <p>We have worked with leading startups funded by investors like Andreessen Horowitz, Sequoia Capital, SoftBank, Founders Fund, Accel Partners, Battery Ventures and Khosla Ventures.</p>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>

        <section className="about-section2">
          <div className="about-list">
            <div className="about-list1-item">
              <ul>
                <li>
                  <div data-aos="fade-up">
                    <h1>25</h1>
                    <h6>Average age of our amazing Arcgatians</h6>
                  </div>
                </li>
                <li>
                  <div data-aos="fade-up">
                    <h1>75</h1>
                    <h6>Startups accelerated</h6>
                  </div>
                </li>
                <li>
                  <div data-aos="fade-up">
                    <h1>2005</h1>
                    <h6>Year when we were born</h6>
                  </div>
                </li>
                <li>
                  <div data-aos="fade-up">
                    <h1>6</h1>
                    <h6>Unicorn clients</h6>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-list2-item">
              <ul>
                <li>
                  <div data-aos="fade-up">
                    <h1>24</h1>
                    <h6>Arcgatians who have completed 10+ years</h6>
                  </div>
                </li>
                <li>
                  <div data-aos="fade-up">
                    <h1>450</h1>
                    <h6>Women Arcgatians</h6>
                  </div>
                </li>
                <li>
                  <div data-aos="fade-up">
                    <h1>2000</h1>
                    <h6>Arcgatians aboard so far</h6>
                  </div>
                </li>
              </ul>
            </div>
            <p></p>
          </div>
        </section>

        <section className="about-section3">
          <div className="about-content1">
            <h1>Arcgate Delivery Center</h1>
            <p></p>
            <center>
              <p></p>
              <p>State-of-the-art, highly secure 150,000 square feet dedicated delivery center with 2000+ full-time employees. Take a peek into how we work, our people and our diverse culture. </p>
              <p></p>
            </center>
            <p></p>
            <div className="video-bloglist">
              <div className="video-bloglist-content">
                <div className="photos">
                  <div onClick={() => openImage(imagePaths.arcgateImage1)}>
                    <img src={imagePaths.arcgateImage1} alt="" />
                  </div>
                </div>
              </div>
              <p></p>
              <div className="video-bloglist-content">
                <div className="photos">
                  <div onClick={() => openImage(imagePaths.arcgateImage2)}>
                    <img src={imagePaths.arcgateImage2} alt="" />
                  </div>
                </div>
                <p></p>
              </div>
              <div className="video-bloglist-content">
                <div className="photos">
                  <div onClick={() => openImage(imagePaths.arcgateImage3)}>
                    <img src={imagePaths.arcgateImage3} alt="" />
                  </div>

                </div>
                <p></p>
              </div>
            </div>
            <p></p>
          </div>
          <div className="button-div">
            <div className="btn-link">
              <Link to="/aboutImage">VEIW ALL</Link>
            </div>
            <p></p>
          </div>
          <p></p>

        </section>

        <section className='about-section4'>
          <div className='arcgate-content'>
            <div className='video-content'>
              <h1>
                Get an inside peek into Arcgate
              </h1>
              <div className='video-list'>
                <div className='video-div'>
                  <div className='video-body'>
                    <a href='https://www.youtube.com/watch?v=rn1v6nod--E' target='_blank'>
                      <div className='video-image'>
                        <div data-aos="fade-up">
                          <img src={imagePaths.imageVideo3} alt='' />
                          <span className='btn-video'>
                            <img src={imagePaths.image18} alt='' />
                          </span>
                        </div>
                      </div>
                    </a>
                    <div className='video-text'>
                      <p>CNBC-TV18 highlights the story of Arcgate in “The Leap Takers” show</p>
                    </div>
                  </div>
                </div>
                <div className='video-div'>
                  <div className='video-body'>
                    <a href='https://www.youtube.com/watch?v=0dEGFOtAsZs' target='_blank'>
                      <div className='video-image'>
                        <div data-aos="fade-up">
                          <img src={imagePaths.imageVideo2} alt='' />
                          <span className='btn-video'>
                            <img src={imagePaths.image18} alt='' />
                          </span>
                        </div>
                      </div>
                    </a>
                    <div className='video-text'>
                      <p>ET Now business News channel covers Arcgate in the “Emerging SME” series</p>
                    </div>
                  </div>
                </div>
                <div className='video-div'>
                  <div className='video-body'>
                    <a href='https://www.youtube.com/watch?v=O97QHjU-i-Y' target='_blank'>
                      <div className='video-image'>
                        <div data-aos="fade-up">
                          <img src={imagePaths.imageVideo01} alt='' />
                          <span className='btn-video'>
                            <img src={imagePaths.image18} alt='' />
                          </span>
                        </div>
                      </div>
                    </a>
                    <div className='video-text'>
                      <p>Hear our startup story from our founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </section>

        <section className="about-section5">
          <div className="about-content3">
            <h2>Awards & Recognitions</h2>
            <div className="awards-container">
              <div className="awards-content">
              <div data-aos="fade-right">
                <div className="awards-body-row">
                    <div className="heading1">2021</div>
                    <h4>"UDAAN - DARE TO DREAM" Award</h4>
                    <p>Kunal Bagla, Founder of Arcgate was honored by Zee Media for his contribution to the IT sector.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
                    <div className="heading2">2019</div>
                    <h4>SME Business Excellence Award</h4>
                    <p>Dun & Bradstreet & RBL Bank Ltd. recognized Arcgate for growth in the IT & ITeS sector.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content">
              <div data-aos="fade-left">
                <div className="awards-body-row">
                    <div className="heading1">2018</div>
                    <h4>Mewar Entrepreneur Award</h4>
                    <p>Kunal Bagla, Founder of Arcgate was honored with the Mewar Entrepreneur Award by the Udaipur Chamber of Commerce & Industry (UCCI) and DCB Bank, for outstanding work in the field of Information Technology.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
 
                    <div className="heading2">2017</div>
                    <h4>Best Services Exporter (Small) in India</h4>
                    <p>Arcgate won the ECGC Indian Exporters’ Excellence Award. ECGC is a premier export credit agency of the Government of India.</p>
                  </div>
                </div>
              </div>


              <div className="awards-content">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
          
                    <h4>Diversified Staffing Achievement Award</h4>
                    <p>ICICI Rural Self Employment Training Institute under the support of Ministry of Rural Development, Government of India awarded Arcgate.</p>
                  </div>
                </div>
              </div>


              <div className="awards-content">
              <div data-aos="fade-left">
                <div className="awards-body-row">
                 
                    <div className="heading1">2016</div>
                    <h4>Most Promising Brands of Udaipur Award</h4>
                    <p>Economic Times recognized Arcgate for outstanding growth, innovation and entrepreneurship.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
                
                    <div className="heading2">2015</div>
                    <h4>Best IT & ITES SME, India</h4>
                    <p>Dun & Bradstreet and Karur Vysya Bank rated Arcgate as the best SME in the IT & ITES sector in India.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content">
              <div data-aos="fade-left">
                <div className="awards-body-row">
                  
                    <div className="heading1">2014</div>
                    <h4>Best Emerging SME in India</h4>
                    <p>Dun & Bradstreet (D&B), Times Group and Federal Bank rated Arcgate as the best Emerging SME.</p>
                    <div className="timeline-image">
                      <img src={imagePaths.timelineImage1} alt='' />
                    </div>
                  </div>
                  <p></p>
                </div>
                <p></p>
              </div>

              <div className="awards-content-1">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
                
                    <div className="heading2">2013</div>
                    <h4>Best Regional SME, North India</h4>
                    <p>Dun & Bradstreet (D&B), the world’s leading provider of business information, knowledge and insight, rated Arcgate as the best Regional SME.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content-2">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
               
                    <h4>Best Young Entrepreneur in India</h4>
                    <p>Dun & Bradstreet (D&B) rated Kunal Bagla, Founder of Arcgate, as the Best Young Entrepreneur.</p>
                  </div>
                </div>
              </div>

              <div className="awards-content-3">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
                
                    <h4>Most Promising Young Entrepreneur</h4>
                    <p>The Vigyan Samiti Udaipur honored Kunal Bagla for contribution to the growth of technology in the local region.</p>
                    <div className="timeline-image">
                      <img src={imagePaths.timelineImage2} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="awards-content-4">
              <div data-aos="fade-left">
                <div className="awards-body-row">
                 
                    <div className="heading1">2012</div>
                    <h4>Top 20 finalist for fastest growing SME’s</h4>
                    <p>Vodafone ET Now Award</p>
                    <div className="timeline-image">
                      <img src={imagePaths.timelineImage3} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="awards-content-5">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
                 
                    <div className="heading2">2011</div>
                    <h4>Best performance in the IT & ITES</h4>
                    <p>Dainik Bhaskar MSME Award Rajasthan sector</p>
                  </div>
                </div>
              </div>

              <div className="awards-content-6">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
                
                    <h4>Best IT & ITES Micro Enterprise, India</h4>
                    <p>Axis Bank</p>
                  </div>
                </div>
              </div>

              <div className="awards-content-7">
              <div data-aos="fade-right">
                <div className="awards-body-row leftnode">
             
                    <h4>Top 20 finalist
                    </h4>
                    <p>IndiaMart Leaders of Tomorrow Awards</p>
                  </div>
                </div>
              </div>


              <div className="awards-content-8">
              <div data-aos="fade-left">
                <div className="awards-body-row">
                 
                    <h4>Member of the University of Texas</h4>
                    <p>Information Systems Steering Committee.</p>
                  </div>
                </div>
              </div>

            </div>
            <div class="start-year">2010</div>
            <p></p>
          </div>
        </section>

        <section className="about-section6">
          <div className="about-content4" >
            <h2>Experienced Leadership</h2>
            <p></p>
            <center>
              <p></p>
              <p>The Arcgate founding team believes in relentless execution, and has taken companies public, along with management experience at consulting firms like Deloitte.</p>
              <p></p>
            </center>
            <p></p>
            <div className="founder-container">
              <div className="founder-content">
                <img src={imagePaths.ceoImage} alt="" />
              </div>
              <div className="founder-body">
                <h5>Kunal Bagla</h5>
                <h5 className="head-text">CEO</h5>
                <ul>
                  <li>Dun & Bradstreet (D&B) rated Kunal as <span>Best Young Entrepreneur in India.</span>
                  </li>
                  <li>Part of the management team at Deloitte Consulting, Houston prior to founding Arcgate.</li>
                  <li>Member of The University of Texas MIS Steering Committee.</li>
                  <li>Executive Council Member of Seva Mandir, one of India’s leading development nonprofit organizations.</li>
                  <li>Confederation of Indian Industry (CII) Rajasthan State Council Member.</li>
                  <li>BBA degree in Management Information Systems and Business Honors from The University of Texas at Austin.</li>
                </ul>
              </div>
              <p></p>
            </div>
            <div className="founder-container" >
              <div className="founder-content">
                <img src={imagePaths.chairmenImage} alt="" />
              </div>
              <div className="founder-body">
                <h5>Dilip Bagla</h5>
                <h5 className="head-text">Chairman</h5>
                <ul>
                  <li>
                    <span>40+ years experience </span> leading publicly traded companies.
                  </li>
                  <li>Heads the offshore delivery center in India</li>
                  <li>Track record of innovation and creating scalable, profitable companies.</li>
                  <li>Experience taking companies from startup to <span>successful IPO.</span>
                  </li>
                </ul>
              </div>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>

        <section id="why-arcgate" className="about-section7">
          <div className="about-content5">
            <h1>Why Arcgate</h1>
            <p></p>
            <center>
              <p></p>
              <p>Since 2005 we have helped accelerate more than 75 startups. That deep experience helps us understand the needs of high growth companies better than most outsourcing vendors.</p>
              <p></p>
            </center>
            <p></p>
            <div className="list-items">
              <p><strong>Trusted by industry leaders since</strong>
                <span> 2005</span>
              </p>

              <p><strong>ISO 9001:2015</strong>
                <span> certified. </span><strong>Stringent quality controls.</strong>
              </p>
              <p>
                <span> SOC2 </span><strong>security compliant. Fanatical data protection.</strong>
              </p>
              <p>
                <span className="list-content">
                  <img src={imagePaths.image9} alt="" />
                </span>
                <span>Speed</span>
                <br></br>
                Realize measurable benefits in less than 30 days. Move faster by having a large dedicated outsourced team on your project.
              </p>
              <p>
                <span className="list-content">
                  <img src={imagePaths.image10} alt="" />
                </span>
                <span>Management</span>
                <br></br>
                Leverage Arcgate’s proven systems, technologies & methodologies to ensure a successful outsourcing engagement.
              </p>
              <p>
                <span className="list-content">
                  <img src={imagePaths.image11} alt="" />
                </span>
                <span>Cost</span>
                <br></br>
                We offer highly customized cost-effective solutions. Eliminate the costs associated with managing your own temporary workforce.
              </p>
              <p>
                <span className="list-content">
                  <img src={imagePaths.image12} alt="" />
                </span>
                <span>Infrastructure</span>
                <br></br>
                State-of-the-art, highly secure 150,000 square feet delivery center with 2000+ full-time employees; 24×7 operations.
              </p>
              <p>
                <span className="list-content">
                  <img src={imagePaths.image13} alt="" />
                </span>
                <span>Flexibility</span>
                <br></br>
                Work with a highly skilled dedicated team delivering customized solutions. Scale up and down as your needs change.
              </p>
              <p>
                <span className="list-content">
                  <img src={imagePaths.image14} alt="" />
                </span>
                <span>Quality</span>
                <br></br>
                ISO9001:2015 certified firm with high emphasis on quality delivery. If the result is not acceptable, simply let us know and pay nothing.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section8">
          <div className="about-content6">
            <div className="table-row">
              <div className="table-cell">
                <img src={imagePaths.foundationLogo} alt="" />
              </div>
              <div className="table-cell-info">
                <h1>Arcgate Foundation</h1>
                <p>The mission of the Arcgate Foundation is to help improve the local community by creating opportunities through programs in the areas of education, healthcare and rural development. A not-for-profit initiative aimed at improving the future, the Arcgate Foundation will work to support the less privileged sections of the society through various initiatives.</p>
                <div className="table-button">
                  <div className="table-button-link">
                    <a href="https://www.arcgatefoundation.org/" target="_blank" rel="noopener noreferrer">
                      OUR WORK
                    </a>
                  </div>
                </div>
                <p></p>
              </div>
              <p></p>
            </div>
            <p></p>
          </div>
        </section>

      </article>

      {
        selectedImage && (
          <ImageModal imageUrl={selectedImage} onClose={closeImage} />
        )
      }

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
  );
};

export default About;
