const initState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
}

const reducer = (state = initState, action={}) =>{
  switch (action.type) {
    case 'SEARCH':
      return {...state, text: action.payload}
    case 'FETCH_MOVIES':
      return {...state, movies: [action.payload]}
    case 'FETCH_MOVIE':
      return {...state, movie: [action.payload]}
    case 'LOADING':
      return {...state, loading: true}
    default:
      return {...state}
  }
}

export default reducer