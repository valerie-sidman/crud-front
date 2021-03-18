import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Card({ match }) {
  const [card, setCard] = useState({});

  useEffect(() => {
    const getList = async () => {
      const response = await fetch('http://localhost:7777/posts', {
        method: 'GET'
      });
      const responseList = await response.json();
      const findedCard = match.params.id ?
        responseList.find(o => o.id === Number(match.params.id)) :
        alert('ID not found');
      if (findedCard) {
        setCard(findedCard);
      } else {
        alert('Card not found');
      }

      console.log('Запросили список карточек на сервере');
    }

    getList();
  }, []);

  return (
    <div className="card">
      <div className="card-header">Date: {card.created}</div>
      <div className="card-body">
        <h5 className="card-title">ID: {card.id}</h5>
        <p className="card-text">Content: {card.content}</p>
        <Link to="/posts/card/edit" className="btn btn-warning">Edit</Link>
        <Link to="/" className="btn btn-danger">Delete</Link>
      </div>
    </div>
  )
}
