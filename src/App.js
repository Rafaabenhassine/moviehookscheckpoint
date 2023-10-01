import { useState } from 'react';
import './App.css';
import moviesData from './Data';
import MovieList from './Components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './Components/NavB';
import AddMovie from './Components/AddMovie';
import Home from './Components/Home';



function App() {
  const [movies, setMovies]=useState(moviesData)
  const [inputSearch,setInputSearch]=useState("")
  const [inputStars,setInputStars]=useState(0)
  console.log(inputStars)
  
  return (
    <div className='App'>
      <NavB setInputSearch={setInputSearch} setInputStars={setInputStars} />
      <Home />
      <AddMovie />
      <MovieList movies={movies} inputSearch={inputSearch} inputStars={inputStars}  />
      
    </div>
  );
}

export default App;
