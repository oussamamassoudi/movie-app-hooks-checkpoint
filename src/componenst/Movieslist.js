import React from 'react'
import Moviecard from './Moviecard'
import Addmovie from './Addmovie'

function Movieslist({movies, setmovies, text, rate}) {
  return (
    <>
    <div className='add'>
      <Addmovie movies={movies} setmovies={setmovies}/>
    </div>
  <div className='m-container'>
    {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate).map((el)=>(<Moviecard movie={el}/>)).reverse()}
  </div>
  </>
  )
}

export default Movieslist