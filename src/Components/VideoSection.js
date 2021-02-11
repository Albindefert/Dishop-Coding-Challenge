import React from 'react';
import { Button } from './Button';
import './VideoSection.css';
import '../App.css';

function VideoSection() {
    return (
        <div className='video-container'>
            <video src='/videos/video-cinema2.mp4' autoPlay loop muted />
            <h1>POP CORN IS READY</h1>
            <p>What are you waiting for ?</p>
            <div className='video-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>           
            </div>
        </div>
    );
}

export default VideoSection;
