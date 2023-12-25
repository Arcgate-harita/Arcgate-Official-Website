import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import "../components/Contact.css";
import imagePaths from '../imagePath';
function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            alert('Name is required');
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            alert('Invalid Name');
            return false;
        }

        if (!formData.number.trim()) {
            alert('Number is required');
            return false;
        } else if (!/^\d+$/.test(formData.number)) {
            alert('Invalid Number');
            return false;
        }

        if (!formData.email.trim()) {
            alert('Email is required');
            return false;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert('Invalid Email Address');
            return false;
        }

        if (!formData.message.trim()) {
            alert('Message is required');
            return false;
        }
        if (!recaptchaValue) {
            alert('Please complete the reCAPTCHA challenge.');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormData({
                name: '',
                number: '',
                email: '',
                message: '',
            });

            setFormSubmitted(true);

            setTimeout(() => {
                setFormSubmitted(false);
            }, 5000);
        }
    };


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
                                <form name='contact-form' onSubmit={handleSubmit}>
                                    <p>
                                        <span className='relative'>
                                            <img src={imagePaths.name} alt='' />
                                            <input
                                                type='text'
                                                name='name'
                                                placeholder='Name'
                                                value={formData.name}
                                                onChange={handleChange}
                                            ></input>
                                            <span className='error-message'></span>
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.number} alt='' />
                                            <input
                                                type='text'
                                                name='number'
                                                placeholder='Phone'
                                                value={formData.number}
                                                onChange={handleChange}
                                            ></input>
                                            <p className='error-message'></p>
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.email} alt='' />
                                            <input
                                                type='text'
                                                name='email'
                                                placeholder='Email'
                                                value={formData.email}
                                                onChange={handleChange}
                                            ></input>
                                            <p className='error-message'></p>
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.textArea} alt='' />
                                            <input
                                                type='text'
                                                name='message'
                                                placeholder='Message'
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></input>
                                            <p className='error-message'></p>
                                        </span>
                                    </p>

                                    <ReCAPTCHA
                                        sitekey="6Lf-MjcpAAAAAJQKQkI7JUSYfhWvYGl0pdULqPVv"
                                        onChange={handleRecaptchaChange}
                                    />

                                    <div className='contact-button'>
                                        <div className='contact-button-link'>
                                            <div className='submit-btn'>
                                            </div>
                                        </div>
                                        <input type='submit' value="Submit" />
                                    </div>
                                    {formSubmitted && <p className='success-message'>Great! We will be in touch with you shortly.</p>}
                                </form>
                                <p></p>

                            </div>
                        </div>
                        <div className='address'>
                            <h4>
                                Arcgate Technologies LLP
                                <br></br>
                                G1-11, I.T.Park, M.I.A. (Extn.)
                                <br></br>
                                Udaipur – 313003
                                <br></br>
                                Rajasthan, India
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
