import React from 'react'
import './css/Cards.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cards = ({ searchQuery }) => {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        let response;
        if (searchQuery) {
          // response = await axios.get(`http://localhost:5000/api/cards/search?q=${searchQuery}`);
          response = await axios.get(`${apiUrl}/api/cards/search?q=${searchQuery}`);
          setCards(response.data);
        } else {
          // response = await axios.get('http://localhost:5000/api/cards');
          response = await axios.get(`${apiUrl}/api/cards`);

          setCards(response.data);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCards();
  }, [searchQuery , apiUrl]);
  if (loading) {
    return (
      <div className="centered-container">
        <b>Loading...</b>
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered-container">
        <b>Error: {error}</b>
      </div>
    );
  }
  return (
    <div className='cards'>
        <h1>All Articles</h1>

    <div className='cards-container'>
    {cards.length === 0 ? (
      <p>No cards available</p>
    ) : (
      <div className="card-grid">
        {cards.map(card => (
       
          <div className="card" key={card._id}>
               <Link to={`/cards/${card._id}`} key={card._id} className="card-link">
                            <img src={card.url} alt={card.title} className="card-image" />
                            </Link>
            <h6>{card.title || 'No Title'}</h6>
            <hr className="card-separator" />

            <p>{card.description || 'No Description'}</p>
            
          </div>

        ))}
      </div>
    )}
  </div>
    </div>

  )
}

export default Cards


