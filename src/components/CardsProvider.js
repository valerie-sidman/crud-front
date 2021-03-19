import React, { useState, useEffect } from 'react';
import CardsContext from '../contexts/CardsContext';

export default function CardsProvider(props) {
  const [cards, setList] = useState([]);

  const getList = async () => {
    const response = await fetch('http://localhost:7777/posts', {
      method: 'GET'
    });
    const responseList = await response.json();
    setList(responseList);

    console.log('Запросили список карточек на сервере');
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <CardsContext.Provider value={{ cards: cards, update: getList}}>
      {props.children}
    </CardsContext.Provider>
  )
}