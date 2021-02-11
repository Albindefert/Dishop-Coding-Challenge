import React from 'react';
import '../../App.css'
import CardsHome from '../CardsHome';
import Footer from '../Footer';
import VideoSection from '../VideoSection'

function Home(){
    return(
        <>
            <VideoSection/>
            <CardsHome/>
            <Footer/>
        </>
    )
}

export default Home