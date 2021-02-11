import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsSeries() {
  return (
    <div className='cards'>
        <h1>NEW IN</h1>
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
        <h2>Already here</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-mandalorian.jpg'
                    text='THE MANDALORIAN'
                    label='Science-fiction'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-witcher.jpg'
                    text='THE WITCHER'
                    label='Adventure'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-100.jpg'
                    text='THE 100'
                    label='Adventure'
                    path='/Series'
                    />
                </ul>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-sherlock.jpg'
                    text='SHERLOCK'
                    label='Detective'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-jeudame.jpg'
                    text="THE QUEEN'S GAMBIT"
                    label='Drama'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-prisonbreak.jpg'
                    text='PRISON BREAK'
                    label='Action'
                    path='/Series'
                    />
                </ul>
                <ul className='cards-items'>
                    <CardItem
                    src='cinemaImages/img-breakingbad.jpg'
                    text='BREAKING BAD'
                    label='Science'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-strangerthings.jpg'
                    text='STRANGER THINGS'
                    label='Horror'
                    path='/Series'
                    />
                    <CardItem
                    src='cinemaImages/img-blackmirror.jpg'
                    text='BLACK MIRROR'
                    label='Horror'
                    path='/Series'
                    />
                </ul>
            </div>
        </div>

    </div>
  );
}

export default CardsSeries;
