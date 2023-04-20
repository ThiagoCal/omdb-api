import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import Home from './Components/Home';
import Movie from './Components/Movie';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
library.add( faCheckSquare, faCoffee)

// http://www.omdbapi.com/?i=tt3896198&apikey=ec141c61
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Home/><Footer/></>}></Route>
          {/* <Route path='/about' element={<><Navbar/><About/></>}></Route> */}
          {/* <Route path="/contact" element={<><Navbar/><Contact/></>}></Route> */}
          <Route path='/:id' element={<><Navbar/><Movie/><Footer/></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
