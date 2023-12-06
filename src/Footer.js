import React from 'react'
import "../src/Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <section>
                <aside>
                    <div className='footer-logo'>
                        <Link to="/">
                        </Link>
                    </div>
                    <nav>
                        <ul className='menu'>
                            <li><a href='about'>ABOUT</a></li>
                            <li><a href='view1'>SERVICES</a></li>
                            <li><a href='technology'>TECHNOLOGY</a></li>
                            <li><a href='view2'>INDUSTRIES</a></li>
                        </ul>

                        <ul className='second-menu'>
                            <li><a href='clients'>CLIENTS</a></li>
                            <li><a href='career'>CAREERS</a></li>
                            <li><a href='contact'>CONTACT</a></li>
                            <li><a href='blogView'>BLOG</a></li>
                        </ul>

                        <ul className='second-menu'>
                            <li><a href='terms'>TERMS OF USE</a></li>
                            <li><a href='privacy'>PRIVACY POLICY</a></li>
                        </ul>
                    </nav>
                </aside>

                <div className='footer-social hidden'>
                    <a href='' target='_blank' className='fb-icon'></a>
                    <a href='' target='_blank' className='twitter-icon'></a>
                    <a href='' target='_blank' className='linkedin-icon'></a>
                    <p className='copyright'>"Copyright © 2005 - 2023. All rights reserved. Built By Arcgate Technologies LLP. Designed by" <a href='' target='_blank'>superstudio.in</a></p>
                </div>
                <div className='footer-social-links'>
                    <ul>
                        <li><a href='' target='_blank' className='fb-icon' ></a></li>
                        <li><a href='' target='_blank' className='twitter-icon' ></a></li>
                        <li> <a href='' className='linkedin-icon'></a></li>
                        <li><a href='' target='_blank' className='youtube-icon'></a></li>
                        <li><a href='' target='_blank' className='cloud-icon'></a></li>
                        <li><a href='' target='_blank' className='insta-icon'></a></li>
                    </ul>

                </div>
                <div className='footer-copyright'>
                    <p className='copyright'>"Copyright © 2005 - 2023. All rights reserved. Built By Arcgate Technologies LLP. Designed by" <a href='' target='_blank'>superstudio.in</a></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
