import React from 'react'
import Row from './Components/Row'
import requests from './Components/requests'
import Banner from './Components/Banner'
import '../src/App.css'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests. fetchNetflixOriginals} isLargeRow />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrendingMovies}/>
      <Row title = "TopRatingMovies" fetchUrl={requests. fetchTopRatingMovies} />
      <Row title = "ActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "ComedyMovies" fetchUrl={requests. fetchComedyMovies} />
      <Row title = "HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "RomanceMovies" fetchUrl={requests. fetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App