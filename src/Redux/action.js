export const getQuery = (data) => (dispatch) => {
  dispatch({
    type: "SEARCH",
    payload: data,
  });
};

export const fetchMovies = (movie) => (dispatch, getState) => {
  fetch(
    `https://www.omdbapi.com/?s=${movie}&apikey=${process.env.REACT_APP_APIKEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_MOVIES",
        payload: data,
      });
    });
};

export const fetchMovie = (id) => (dispatch, getState) => {
  console.log("id fetch", id);
  fetch(
    `https://www.omdbapi.com/?&i=${id}&apikey=${process.env.REACT_APP_APIKEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "FETCH_MOVIE",
        payload: data,
      });
    });
};

// https://www.omdbapi.com/?apikey=${APIKey}&i=${id}
