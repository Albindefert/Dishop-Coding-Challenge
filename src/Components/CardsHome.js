import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC New In !</h1>
        <h2>Movies</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-starwars.jpeg'
                    text="STAR-WARS"
                    label='Science-fiction'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-everest.jpg'
                    text='EVEREST'
                    label='History'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-endgame.jpg'
                    text='AVENGERS'
                    label='Science-fiction'
                    path='/Movies'
                    />
                </ul>
            </div>
        </div>

        <h2>Series</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-viking.jpg'
                    text='VIKING'
                    label='History'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-lupin.jpg'
                    text='LUPIN'
                    label='Adventure'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-got.jpg'
                    text='GAME OF THRONE'
                    label='Science-fiction'
                    path='/Series'
                    />
                </ul>
            </div>
        </div>

    </div>
  );
}

export default Cards;
