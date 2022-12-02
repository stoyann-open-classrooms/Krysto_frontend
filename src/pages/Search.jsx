import React from 'react'
import OfferList from '../components/search/OffersList'
import '../components/search/search.css'
import SearchBar from '../components/search/SearchBar/SearchBar'
function Search() {
  return (
    <section className="heading">
    <h1>Que recherchez-vous ?</h1>
    <SearchBar/>
    <div className="cards">
    <OfferList/>
    </div>
  </section>
  )
}

export default Search