import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CardsContext from '../contexts/CardsContext';
import moment from 'moment';

export default function Card({ match }) {
  const [card, setCard] = useState({});
  const context = useContext(CardsContext);
  const history = useHistory();

  useEffect(() => {
    const findedCard = match.params.id ?
    context.cards.find(o => o.id === Number(match.params.id)) :
      alert('ID not found');
    if (findedCard) {
      setCard(findedCard);
    }
  }, [context, match.params.id]);

  const deleteCard = () => {
    fetch(`https://valerie-sidman-crud-back.herokuapp.com/posts/${card.id}`, {
      method: 'DELETE',
    }).then(() => console.log('Удалили карточку'))
      .then(() => context.update())
      .then(() => history.push("/"));
  }

  return (
    <div className="card">
      <div className="card-header">Created: {moment(new Date(card.created)).fromNow()}</div>
      <div className="card-body">
        <h5 className="card-title">ID: {card.id}</h5>
        <p className="card-text">Content: {card.content}</p>
        <Link to={`/posts/${card.id}/edit`} className="btn btn-warning">Edit</Link>
        <button className="btn btn-danger" onClick={deleteCard}>Delete</button>
        <Link to="/" className="btn btn-secondary">Return</Link>
      </div>
    </div>
  )
}
