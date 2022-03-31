import React from 'react';
import Actor from '../Actor'


const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
    <div className='movie'>
      <h2 className='title'>Název filmu: {title}</h2>
      <img className='poster' src={`/assets/${poster}`}/>
      <p className='year'>Rok: {year}</p>
      <p className='rating'>Hodnocení: {rating}</p>
      <p className='director'>Režie: {director}</p>
      <p className='genre'>Žánr: {genre}</p>
      <p>
            {
            cast.map(item => 
            <Actor 
            key={item.name}
            name={item.name}
            as={item.as}
            />
            )
        }
    </p>
    </div>
    </>
  );
}

export default Movie;