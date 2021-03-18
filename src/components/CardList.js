import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

export default function CardList({ location }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await fetch('http://localhost:7777/posts', {
        method: 'GET'
      });
      const responseList = await response.json();
      setList(responseList);

      console.log('Запросили список карточек на сервере');
      console.log(location);
    }

    getList();
  }, [location]);

  return (
    <div className="cardlist-container">
      <Link to="/posts/new">
        <button type="submit" className="btn btn-primary">New card</button>
      </Link>
      <div className="list-group">
        {
          list.map((item) => <ListItem key={item.id} id={item.id} date={item.created} content={item.content} />)
        }
      </div>
    </div>
  )
}