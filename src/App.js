// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarvelCharacters from './components/MarvelCharacters';
import MarvelComics from './components/MarvelComics';
import MarvelCreators from './components/MarvelCreators';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarvelEvents from './components/MarvelEvents';
import MarvelSeries from './components/MarvelSeries';
import MarvelStories from './components/MarvelStories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<MarvelCharacters />} />
        <Route path="/comics" element={<MarvelComics />} />
        <Route path="/creators" element={<MarvelCreators />} />
        <Route path="/events" element={<MarvelEvents />} />
        <Route path="/series" element={<MarvelSeries />} />
        <Route path="/stories" element={<MarvelStories />} />

      </Routes>
    </Router>
  );
}

export default App;
