import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CardsContext from '../contexts/CardsContext';

export default function NewCard() {
  const [value, setValue] = useState('');
  const history = useHistory();
  const context = useContext(CardsContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const postCard = () => {
    fetch('http://localhost:7777/posts', {
      method: 'POST',
      body: JSON.stringify({ "id": 0, "content": value }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => console.log('Отправили новую карточку на сервер'))
      .then(() => context.update())
      .then(() => history.push("/"));
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="newcard-field" className="form-label">What's new?</label>
        <input type="text" className="form-control" id="newcard-field" value={value} onChange={handleChange} />
      </div>
      <button className="btn btn-success" onClick={postCard}>Add</button>
      <Link to="/" className="btn btn-secondary">Return</Link>
    </div>
  )
}
