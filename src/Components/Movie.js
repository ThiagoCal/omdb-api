import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import { fetchMovie } from '../Redux/action';

import './Movie.css'

export default function Movie(props) {
  // const[title, setMovies] = useState('')
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  let params = useParams()
  console.log(params.id)
  const movieTitle = useSelector(state => {
    return state.movie[0]
  }); 

   useEffect(()=>{
      dispatch(fetchMovie(params.id))
  }, [dispatch])
  
  let url = `https://imdb.com/title/${params.id}`
  
  if(movieTitle){
    return (
      <>
        <div className="container">
          <div className='movie'>
            <div className='img-movie'>
              <img src={movieTitle.Poster} alt={params.id}/>
            </div>
            <div className='movie-details'>
              <h2 style={{textAlign:"left", marginBottom:"1em"}}>{movieTitle.Title}</h2>
              <table>
                <tbody>
                  <tr><td><strong>Released: </strong> {movieTitle.Released}</td></tr>
                  <tr><td><strong>Genre: </strong>{movieTitle.Genre}</td></tr>
                  <tr><td><strong>Rated: </strong>{movieTitle.Rated}</td></tr>
                  <tr><td><strong>Rating: </strong>{movieTitle.imdbRating}</td></tr>
                  <tr><td><strong>Director: </strong>{movieTitle.Director}</td></tr>
                  <tr><td><strong>Writer: </strong>{movieTitle.Writer}</td></tr>
                  <tr><td><strong>Actors: </strong>{movieTitle.Actors}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='about-movie'>
            <h2>Plot</h2>
            <span>{movieTitle.Plot}</span>
            <div className='actions-movie'>
              <button type="button" className='btn-imdb'><Link to={url}>View on IMDB</Link></button>
              <Link to={`/`}>Go Back to Search</Link>
            </div>
          </div>
        </div>
      </>
    )
  }else{
    return(
      // {
      //   setTimeout(() => {

          
      //   }, 2000);
      // }
      <div> Loading...</div>
    )
  }
}
