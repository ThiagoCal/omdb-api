import React from 'react'
import { useState, useEffect } from 'react';
import { getQuery, fetchMovies } from '../Redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(props) {
  const[title, setTitle] = useState('')
  // const [movie, setMovieArr] = useState('')
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getQuery(title))
  },[dispatch, title])

  const movieTitle = useSelector(state => {
    return state.text
  }); 
  
  const searchMovie = (e) => {
    e.preventDefault()
    dispatch(fetchMovies(movieTitle))
  }
  
  const arrMovies = useSelector(state => {
    return state.movies && state.movies.length > 0 && state.movies[0]['Search'];
  } )
  
  console.log(arrMovies)

  return (
    <div className='container'>
      <div className='search-box'>
        <span className='search-title'>Search for a movie, TV series..</span>
        <form onSubmit={(e) => searchMovie(e)}>
          <input className='inputSearch' type="text" onChange={(e)=>setTitle(e.target.value)}></input><br/>
          <button className='btn-search' type="submit">Search</button>
        </form>
      </div>
     
      <div className='movie-list'>
      { arrMovies && arrMovies.length > 0 ? arrMovies.map((movie) => {
            return(
              <div className='movie-card' key={movie.imdbID}>
                <div className='movie-poster'>
                  <img src={movie.Poster} alt={movie.title} style={{height:"300px", width:"200px"}} />
                </div>
                <div className='title'>
                  <h4>{movie.Title}</h4>
                </div>
                <button className='btn-details'><Link to={`/${movie.imdbID}`}>More Details</Link></button>
              </div>
            )
          }) : <h1>No movies</h1>
      } 
      </div>
    </div>
    )
}


// const[movies, setAllMovies] = useState([])

  // const searchMovie = async() =>{
  //   if(title.length > 2){
  //     try{
  //       let res = await fetch(`http://www.omdbapi.com/?s=${title}&type=movie&apikey=ec141c61`)
  //       let data = await res.json()
  //       console.log(data)
  //       setAllMovies(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   else{
  //     throw new Error('invalid search. Quere has to be longer than 2 characters')
  //   }
  // }

    // useEffect(()=>{
  //     dispatch(fetchMovies(movieTitle))
  // }, [dispatch])
  // console.log('array',robots)