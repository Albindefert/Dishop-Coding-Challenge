import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsMovies() {
  return (
    <div className='cards'>
        <h1>NEW IN</h1>
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
        <h2>Already here</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-tarzan.jpg'
                    text='TARZAN'
                    label='Science-fiction'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-greatestshowman.jpg'
                    text='THE GREATEST SHOWMAN '
                    label='Comedy'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-hungergame.jpg'
                    text='HUNGER GAMES'
                    label='Adventure'
                    path='/Movies'
                    />                    
                </ul>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-divergente.jpg'
                    text='DIVERGENTE'
                    label='Adventure'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-oss117.jpg'
                    text='OSS 117'
                    label='Comedy'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-hobbit.jpg'
                    text='THE HOBBIT'
                    label='Adventure'
                    path='/Movies'
                    />
                </ul>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-insaisissable.jpg'
                    text='INSAISISSABLE '
                    label='Action'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-taken.jpg'
                    text='TAKEN'
                    label='Action'
                    path='/Movies'
                    />
                    <CardItem
                    src='cinemaImages/img-topgun.jpg'
                    text='TOP GUN'
                    label='Adrenaline'
                    path='/Movies'
                    />
                </ul>                
            </div>
        </div>

    </div>
  );
}

export default CardsMovies;
