import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CardsContext from '../contexts/CardsContext';

export default function EditCard({ match }) {
  const [card, setCard] = useState({});
  const context = useContext(CardsContext);
  const history = useHistory();

  const handleChange = (event) => {
    setCard(prevCard => ({ ...prevCard, content: event.target.value }));
  }

  useEffect(() => {
    const findedCard = match.params.id ?
    context.cards.find(o => o.id === Number(match.params.id)) :
      alert('ID not found');
    if (findedCard) {
      setCard(findedCard);
    } else {
      alert('Card not found');
    }
  }, [context, match.params.id]);

  const postCard = () => {
    fetch('https://valerie-sidman-crud-back.herokuapp.com/posts', {
      method: 'POST',
      body: JSON.stringify({ "id": card.id, "content": card.content }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => console.log('Изменили карточку и отправили на сервер'))
      .then(() => context.update())
      .then(() => history.push("/"));
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="content-field" className="form-label">Edit your card</label>
        <input type="text" className="form-control" value={card.content || ''} id="content-field" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-info" onClick={postCard}>Confirm</button>
      <Link to={`/posts/${card.id}`} className="btn btn-secondary">Return</Link>
    </div>
  )
}
