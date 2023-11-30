import React from 'react';
import "../technology_pages/QualityTesting.css";
import imagePaths from "../imagePath";
import { Link } from 'react-router-dom';
import TechnologyPara from './technology_para';

function QualityTesting() {
    return (
        <div className='quality-container'>
            <article>
                <section className='quality-section1'>
                    <div className='quality-content1'>
                        <h2>Quality Assurance (QA) & Testing Outsourcing</h2>
                        <p></p>
                        {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph1}</p>
                                <p></p>
                            </div>
                        ))}
                        <p></p>
                    </div>
                </section>

                <section className='quality-section2'>
                    <div className='quality-content2'>
                        <h2>Our Quality Assurance Outsourced Services</h2>
                        <p></p>
                        {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph2}</p>
                                <p></p>
                            </div>
                        ))}
                        <p></p>

                        <div className='quality-div2'>
                            <div className='row-a'>
                            <div className='quality-body2'>
                                <Link to="/quality1">
                                    <span className='quality-image'>
                                        <img src={imagePaths.testing1} alt='' />
                                    </span>

                                    <br></br>

                                    <span className='quality-text'>Manual Testing</span>
                                </Link>
                            </div>
                            <div className='quality-body2'>
                            <Link to="/quality2">
                                    <span className='quality-image'>
                                        <img src={imagePaths.testing2} alt='' />
                                    </span>

                                    <br></br>

                                    <span className='quality-text'>Automated Testing</span>
                                    </Link>
                            </div>
                            <div className='quality-body2'>
                            <Link to="/quality3">
                                    <span className='quality-image'>
                                        <img src={imagePaths.testing3} alt='' />
                                    </span>

                                    <br></br>

                                    <span className='quality-text'>API Testing</span>
                                    </Link>
                            </div>
                            </div>
                            <div className='row-b'>
                            <div className='quality-body2'>
                            <Link to="/quality4">
                                    <span className='quality-image'>
                                        <img src={imagePaths.testing4} alt='' />
                                    </span>

                                    <br></br>

                                    <span className='quality-text'>Performance Testing</span>
                                    </Link>
                            </div>
                            <div className='quality-body2'>
                            <Link to="/quality5">
                                    <span className='quality-image'>
                                        <img src={imagePaths.testing5} alt='' />
                                    </span>

                                    <br></br>

                                    <span className='quality-text'>Accessbilty Testing</span>
                                    </Link>
                            </div>
                            <div className='quality-body2'>
                            <Link to="/quality6">
                                    <span className='quality-image'>
                                        <img src={imagePaths.testing6} alt='' />
                                    </span>

                                    <br></br>

                                    <span className='quality-text'>Salesforce Testing</span>
                                    </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                

             


             <section className='app-section4'>
                <div className='app-content4'>
                    <h1>Technology Expertise</h1>
                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Back-End Development</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.NetLogo} alt='' className='image1'/>
                                </div>
                                <div>
                                <img src={imagePaths.JavaLogo} alt='' className='image2' />
                                </div>
                                <div>
                                <img src={imagePaths.PyhtonLogo} alt='' className='image3' />
                                </div>
                                <div>
                                <img src={imagePaths.PhpLogo} alt='' className='image4' />
                                </div>
                            </div>

                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.NodeLogo} alt='' className='image5'/>
                                </div>
                                <div>
                                <img src={imagePaths.DjangoLogo} alt=''className='image6' />
                                </div>
                                <div>
                                <img src={imagePaths.FlaskLogo} alt='' className='image7'/>
                                </div>
                                <div>
                                <img src={imagePaths.LarvelLogo} alt=''className='image8' />
                                </div>
                            </div>

                           </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Front-End Development</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.ReactLogo} alt=''className='image9' />
                                </div>
                                <div>
                                <img src={imagePaths.HtmlLogo} alt='' className='image10' />
                                </div>
                                <div>
                                <img src={imagePaths.VuejsLogo} alt='' className='image11'/>
                                </div>
                                <div>
                                <img src={imagePaths.CSSLogo} alt='' className='image12'/>
                                </div>
                            </div>

                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.AngularLogo} alt='' className='image13'/>
                                </div>
                                <div>
                                <img src={imagePaths.NextLogo} alt='' className='image14'/>
                                </div>
                                <div>
                                <img src={imagePaths.jsLogo} alt=''className='image15' />
                                </div>
                            </div>
                            
                           </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Mobile Development</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.iosLogo} alt='' className='image16'/>
                                </div>
                                <div>
                                <img src={imagePaths.AndroidLogo} alt='' className='image17' />
                                </div>
                                <div>
                                <img src={imagePaths.ReactNativeLogo} alt='' className='image18' />
                                </div>
                                <div>
                                <img src={imagePaths.xamarinLOgo} alt='' className='image19'/>
                                </div>
                            </div>                            
                           </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>DataBase</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.MysqlLogo} alt='' className='image20'/>
                                </div>
                                <div>
                                <img src={imagePaths.RedisLogo} alt='' className='image21'/>
                                </div>
                                <div>
                                <img src={imagePaths.PostLogo} alt='' className='image22'/>
                                </div>
                                
                            </div>
                           </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>Continous Intregration Tools</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.JenkinsLogo} alt='' className='image23'/>
                                </div>
                                <div>
                                <img src={imagePaths.GItLogo} alt='' className='image24' />
                                </div>
                                <div>
                                <img src={imagePaths.BitbucketLogo} alt='' className='image25' />
                                </div>
                                <div>
                                <img src={imagePaths.CircleLogo} alt='' className='image26'/>
                                </div>
                            </div>                            
                           </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>DevOps</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.AwsLogo} alt='' className='image27'/>
                                </div>
                                <div>
                                <img src={imagePaths.DockerLogo} alt='' className='image28'/>
                                </div>
                                <div>
                                <img src={imagePaths.AnsibleLogo} alt='' className='image29'/>
                                </div>
                                <div>
                                <img src={imagePaths.terraForm} alt=''className='image30' />
                                </div>
                            </div>                           
                           </div>
                        </div>

                        <div className='app-div4'>
                            <div className='app-body4' >
                                <h6>API Testing Tools</h6>
                            </div>
                           <div className='app-logs'>
                            <div className='app-images'>
                                <div>
                                <img src={imagePaths.PostLogo} alt='' className='image31'/>
                                </div>
                                <div>
                                <img src={imagePaths.SoapuiLogo} alt='' className='image32' />
                                </div>
                                <div>
                                <img src={imagePaths.JmeterLogo} alt='' className='image33'/>
                                </div>
                                <div>
                                <img src={imagePaths.FastapiLogo} alt='' className='image34'/>
                                </div>
                            </div>                            
                           </div>
                        </div>

                </div>
            </section>

            <section className='quality-section3'>
                    <div className='quality-content3'>
                        <div className='quality-div3'>
                            <h1>Why Arcgate for Quality Assurance & Testing?</h1>
                           
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.FunctionalTesting} alt='' />
                                    </div>
                                    <h2>Experience</h2>
                                    {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph3}</p>
                                <p></p>
                            </div>
                        ))}
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.UserTesting} alt='' />
                                    </div>
                                    <h2>Cost</h2>
                                    {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph4}</p>
                                <p></p>
                            </div>
                        ))}
                                </div>
                            </div>
                        </div>
                        <div className='quality-body3'>
                            <div className='quality-left'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.ZendeskTesting} alt='' />
                                    </div>
                                    <h2>Flexibility</h2>
                                    {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph5}</p>
                                <p></p>
                            </div>
                        ))}
                                </div>
                            </div>
                            <div className='quality-right'>
                                <div className='quality-element3'>
                                    <div className='quality-icon'>
                                        <img src={imagePaths.AccountTesting} alt='' />
                                    </div>
                                    <h2>Speed</h2>
                                    {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph6}</p>
                                <p></p>
                            </div>
                        ))}
                                </div>
                            </div>
                        </div>
                        <p></p>
                        {TechnologyPara.map((section, index) => (
                            <div key={index}>
                                <p>{section.paragraph7}</p>
                                <p></p>
                            </div>
                        ))}
                    </div>
                </section>
                

            </article>
        </div>
    )
}

export default QualityTesting