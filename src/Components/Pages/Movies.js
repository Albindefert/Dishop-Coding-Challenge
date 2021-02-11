import React from 'react';
import '../../App.css';
import CardsMovies from '../CardsMovies';
import Footer from '../Footer';

function Movies() {
    return (
        <>
            <h1 className='Movies'>
                MOVIES
            </h1>
            <CardsMovies/>
            <Footer/>
        </>
    );
}

export default Movies
