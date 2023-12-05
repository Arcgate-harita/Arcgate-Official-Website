import React from 'react'
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

    const [formErrors, setFormErrors] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newFormErrors = { ...formErrors };

        if (!formData.name.trim()) {
            isValid = false;
            newFormErrors.name = 'Name is required';
        } else {
            newFormErrors.name = '';
        }

        if (!formData.email.trim()) {
            isValid = false;
            newFormErrors.email = 'Email is required';
        } else {
            newFormErrors.email = '';
        }


        if (!formData.number.trim()) {
            isValid = false;
            newFormErrors.number = 'Number is required';
        } else {
            newFormErrors.number = '';
        }


        if (!formData.message.trim()) {
            isValid = false;
            newFormErrors.message = 'Message is required';
        } else {
            newFormErrors.message = '';
        }

        setFormErrors(newFormErrors);
        return isValid;
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
                                                onChange={handleInputChange}
                                            ></input>
                                            {formErrors.name && <p className='error-message'>{formErrors.name}</p>}
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.number} alt='' />
                                            <input
                                                type='text'
                                                name='number'
                                                placeholder='Phone'
                                                value={formData.number}
                                                onChange={handleInputChange}
                                            ></input>
                                            {formErrors.number && <p className='error-message'>{formErrors.number}</p>}
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <img src={imagePaths.email} alt='' />
                                            <input
                                                type='text'
                                                name='email'
                                                placeholder='Email'
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            ></input>
                                            {formErrors.email && <p className='error-message'>{formErrors.email}</p>}
                                        </span>
                                        <br></br>
                                        <span className='relative'>
                                            <textarea
                                                type='text'
                                                name='message'
                                                placeholder='Message'
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            ></textarea>
                                            {formErrors.message && <p className='error-message'>{formErrors.message}</p>}
                                        </span>
                                    </p>
                                    <div className='contact-button'>
                                        <div className='contact-button-link'>
                                            <div className='submit-btn'>
                                            </div>
                                        </div>
                                        <input type='submit' value="Submit" />
                                    </div>
                                    {formSubmitted && <p className='success-message'>Form submitted successfully!</p>}
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
