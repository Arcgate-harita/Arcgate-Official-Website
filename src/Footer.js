import React from 'react'
import "../src/Footer.css";

function Footer() {
    return (
        <footer>
            <section>
                <aside>
                    <div className='footer-logo'>
                        <a href=''></a>
                    </div>
                    <nav>
                        <ul className='menu'>
                            <li><a href='about'>ABOUT</a></li>
                            <li><a href='bpo'>SERVICES</a></li>
                            <li><a href='technology'>TECHNOLOGY</a></li>
                            <li><a href='industries'>INDUSTRIES</a></li>
                        </ul>

                        <ul className='second-menu'>
                            <li><a href='clients'>CLIENTS</a></li>
                            <li><a href='careers'>CAREERS</a></li>
                            <li><a href='contact'>CONTACT</a></li>
                            <li><a href='blog'>BLOG</a></li>
                        </ul>

                        <ul className='second-menu'>
                            <li><a href='terms-of-use'>TERMS OF USE</a></li>
                            <li><a href='privacy-policy'>PRIVACY POLICY</a></li>
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
                        <li><a href='' target='_blank' className='fb-icon' ><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href='' target='_blank' className='twitter-icon' ><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li> <a href='' className='linkedin-icon'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href='' target='_blank' className='youtube-icon'><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        <li><a href='' target='_blank' className='cloud-icon'><i class="fa fa-cloud" aria-hidden="true"></i></a></li>
                        <li><a href='' target='_blank' className='insta-icon'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                    <p className='copyright'>"Copyright © 2005 - 2023. All rights reserved. Built By Arcgate Technologies LLP. Designed by" <a href='' target='_blank'>superstudio.in</a></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
