import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/CardDetail.css'; // Add styling for the card detail page
import Navbar from './Navbar'

const CardDetail = () => {
  const { id } = useParams(); // Retrieve the card ID from the URL
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`https://artist-blog-backend.vercel.app/api/cards/${id}`);
        setCard(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="detail">
    <Navbar/>
    <div className="card-detail">
     
      <img src={card.url} alt={card.title} className="card-detail-image" />
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
    </div>
  );
};

export default CardDetail;
