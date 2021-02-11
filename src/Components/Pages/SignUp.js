import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';

function SignUp() {
    return (
        <>
            <div className='Sign-Up-container'>
                <section className='Sign-Up-subscription'>
                    <h1>SIGN UP</h1>
                        <div className='Sign-Up-inputs-area'>
                            <form className='Sign-Up-inputs-form'>
                                <input
                                    className='Sign-Up-input'
                                    type='firstname'
                                    name='firstname'
                                    placeholder='Your first name'                            
                                />                                                                               
                            </form>
                            <form className='Sign-Up-inputs-form'>
                                <input
                                    className='Sign-Up-input'
                                    type='surname'
                                    name='surname'
                                    placeholder='Your surname'                            
                                />                                                
                            </form>
                            <form className='Sign-Up-inputs-form'>
                                <input
                                    className='Sign-Up-input'
                                    type='email'
                                    name='email'
                                    placeholder='Your email'                            
                                />                                                                              
                            </form>
                            <Button buttonStyle='btn--outline'>Sign In</Button>
                        </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default SignUp