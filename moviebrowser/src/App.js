import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Routes, Route } from 'react-router-dom';
import SearchView from './components/SearchView';
import { useEffect, useState } from 'react';
import MovieView from './components/MovieView';
import PageNotFound from './components/PageNotFound';




function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the search text")
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=53bc57827eea68547de5bc7f75ca86e7&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }

  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/moviebrowser" element={<Home />}></Route>

        <Route path="/about" element={<AboutView />} />

        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />

        <Route path="/movies/:id" element = {<MovieView/>} />

        <Route path="*" element ={<PageNotFound/>}/>
      </Routes>

    </div>

  );
}

export default App;
