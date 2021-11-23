import React from 'react'
import { Link } from 'react-router-dom'
import { getDetails, removePost } from '../../action/action';
import { useDispatch } from 'react-redux';

export default function CardPost({title, id}) {
    const dispatch = useDispatch();

    function handlesubmit(){
      dispatch(removePost(id))
      

    }
    return (
        <div className="border" style={{display: "inline-flex"}}>
        <Link onClick={() => dispatch(getDetails(id))} to={`/details/${id}`}>
            <h3>{title}</h3>
        </Link>
        <div style={{paddingLeft: "50px"}}>
        <button className="btn btn-danger" onClick={() => {handlesubmit()}}><i className="fa fa-trash"></i></button>
        <Link to={`/edit/${id}`}>
            <button className="btn btn-success mr-2"><i className="fa fa-pencil"></i></button>
        </Link>
        </div>
        </div>
    )
}
