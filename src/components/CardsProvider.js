import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardsContext from '../contexts/CardsContext';

export default function CardsProvider(props) {
  const [cards, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {

    const getList = async () => {
      const response = await fetch('http://localhost:7777/posts', {
        method: 'GET'
      });
      const responseList = await response.json();
      setList(responseList);

      console.log('Запросили список карточек на сервере');
      console.log(props);
      console.log(location);
    }

    getList();
  });

  return (
    <CardsContext.Provider value={cards}>
      {props.children}
    </CardsContext.Provider>
  )
}