import React from 'react'
import { Link } from 'react-router-dom'
import { getDetails, removePost } from '../../action/action';
import { useDispatch } from 'react-redux';

export default function CardPost({title, id}) {
    const dispatch = useDispatch();
    return (
        <div>
        <Link onClick={() => dispatch(getDetails(id))} to={`/details/${id}`}>
        <h3>{title}</h3>
        </Link>
        <button onClick={() => dispatch(removePost(id))}>Remove</button>
        </div>
    )
}
