import React from 'react'
import { Link } from 'react-router-dom';

export default function EditCard() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="content-field" className="form-label">Edit your card</label>
        <input type="text" className="form-control" id="content-field"/>
      </div>
      <Link to="/">
        <button type="submit" className="btn btn-info">Confirm</button>
      </Link>
      <Link to="/posts/card">
        <button type="button" className="btn btn-secondary">Return</button>
      </Link>
    </form>
  )
}
