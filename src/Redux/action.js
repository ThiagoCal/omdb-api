export const getQuery = (data) => (dispatch) =>{
  dispatch({
      type: 'SEARCH',
      payload: data
  })
}

export const fetchMovies = (movie) =>(dispatch, getState) =>{
  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=ec141c61&`)
  .then(res => res.json())
  .then(data => {
    dispatch(
      {
        type: 'FETCH_MOVIES',
        payload: data
      }
    )
  })
}

export const fetchMovie = (id) =>(dispatch, getState) =>{
  console.log('id fetch', id)
  fetch(`http://www.omdbapi.com/?&i=${id}&apikey=ec141c61&`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    dispatch(
      {
        type: 'FETCH_MOVIE',
        payload: data
      }
    )
  })
}


// https://www.omdbapi.com/?apikey=${APIKey}&i=${id}