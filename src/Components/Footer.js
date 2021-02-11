import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            
            {/* Creating the subscribe form + button */}
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Newsletter to receive our best new in movies & series
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe any time you like.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            type='email'
                            name='email'
                            placeholder='Your email'                            
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section> 

            {/* Links for the footer */}
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/Sign-Up'>How it works</Link>
                        <Link to='/'>The team</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/*Display App name & logo */}
                    <div>
                        <Link to='/' className='social-logo'> 
                            DISHOP STREAM 
                            <i className='fas fa-couch'/>
                        </Link>
                    </div>
                    <small className='website-right'>Dishop Stream © 2020</small>

                    {/* Display icons associated with Social Media links */}
                    <div className='social-icons'>
                        <Link 
                            to='/' 
                            className='social-icon-link facebook'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link 
                            to='/' 
                            className='social-icon-link instagram'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>  

        </div>
    );
}

export default Footer
