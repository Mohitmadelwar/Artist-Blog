import React, { useState } from 'react';
import Navbar from './Navbar'
import './css/Home.css'
import Search from './Search'
import Cards from './Cards'
import Footer from './Footer'
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className='grid-container'> 
      <div className='grid-navbar'>
        <Navbar/>

      </div>

      <div className='grid-search'>
        <Search onSearch={handleSearch} />
      </div>
      
      <div className='grid-cards'>
        <Cards searchQuery={searchQuery} />
      </div>
      <div className='footer-section'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
