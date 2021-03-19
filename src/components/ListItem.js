import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function ListItem(props) {
  return (
    <Link to={`/posts/${props.id}`} className="list-group-item list-group-item-action" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">ID:{props.id}</h5>
      </div>
      <p className="mb-1">Content: {props.content}</p>
      <small>Created: {moment(new Date(props.created)).fromNow()}</small>
    </Link>
  )
}
