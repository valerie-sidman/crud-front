import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NewCard() {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const postCard = async () => {
    console.log('click');
    await fetch('http://localhost:7777/posts', {
      method: 'POST',
      body: JSON.stringify({"id": 0, "content": value}), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Отправили новую карточку на сервер');
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">What's new?</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={value} onChange={handleChange}/>
      </div>
      <Link to="/" className="btn btn-success" onClick={postCard}>Add</Link>
      <Link to="/" className="btn btn-secondary">Return</Link>
    </div>
  )
}
