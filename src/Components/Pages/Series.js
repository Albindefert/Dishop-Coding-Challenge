import React from 'react';
import '../../App.css';
import CardsM from '../CardsMovies';
import CardsSeries from '../CardsSeries';
import Footer from '../Footer';

function Series() {
    return (
        <>
            <h1 className='Series'>
                SERIES
            </h1>
            <CardsSeries/>
            <Footer/>
        </>
    );
}

export default Series

