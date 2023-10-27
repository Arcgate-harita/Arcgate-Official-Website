import React from 'react'
import "../components/Contact.css";
import imagePaths from '../imagePath';
function Contact() {
    return (
        <div className='contact-container'>
            <article>
                <section className='contact-section1'>
                    <div className='contact-content1'>
                        <h1>Explore how we can help your startup accelerate</h1>
                        <p></p>
                        <center>
                            <p></p>
                            <p>We would love to hear from you.</p>
                            <p></p>
                        </center>
                    </div>
                </section>

                <section className='contact-section2'>
                    <div className='contact-content2'>
                        <div className='contact-div1'>
                            <div className='contact-body1'>
                                <div className='contact-form'></div>
                                <form name='contact-form'>
                                    <p>
                                        <span className='relative'>
                                            <img src={imagePaths.name} alt='' />
                                            <input type='text' name='name' placeholder='Name'></input>
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.number} alt='' />
                                            <input type='text' name='number' placeholder='Phone'></input>
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.email} alt='' />
                                            <input type='text' name='email' placeholder='Email'></input>
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <textarea type='text' name='message' placeholder='Message'></textarea>
                                        </span>
                                    </p>
                                    <div className='contact-button'>
                                        <div className='contact-button-link'>
                                            <div className='submit-btn'>
                                            </div>
                                        </div>
                                        <input type='submit' value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='address'>
                            <h4>
                                Arcgate Technologies LLP
                                <br></br>
                                G1-11, I.T. Park, M.T.A. (Extn.)
                                <br></br>
                                Udaipur - 313003
                                <br></br>
                                Rjasthan, India
                                <br></br>
                                +91 77420 92382
                            </h4>
                            <p></p>
                        </div>
                        <p></p>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Contact
