import React from 'react'
import { Link } from 'react-router-dom'
import { getDetails, getPost, removePost } from '../../action/action';
import { useDispatch } from 'react-redux';

export default function CardPost({title, id}) {
    const dispatch = useDispatch();

    function handlesubmit(){
      dispatch(removePost(id))
      

    }
    return (
        <div>
        <Link onClick={() => dispatch(getDetails(id))} to={`/details/${id}`}>
        <h3>{title}</h3>
        </Link>
        <button className="btn btn-danger" onClick={() => {handlesubmit()}}><i className="fa fa-trash"></i></button>
        </div>
    )
}
