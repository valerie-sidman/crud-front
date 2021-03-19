import React, { useContext } from 'react';
import ListItem from './ListItem';
import CardsContext from '../contexts/CardsContext';
import { Link } from 'react-router-dom';

export default function CardList() {
  const context = useContext(CardsContext);

  return (
    <div className="cardlist-container">
      <Link to="/posts/new">
        <button type="submit" className="btn btn-primary">New card</button>
      </Link>
      <div className="list-group">
        {
          context.cards.map((item) => <ListItem key={item.id} id={item.id} created={item.created} content={item.content} />)
        }
      </div>
    </div>
  )
}