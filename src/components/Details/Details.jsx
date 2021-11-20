import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
    let result = useSelector((state) => state.reducer.details)
    const {userId, title, body} = result
    console.log(result)
    return (
        <div className='container'>
            <div className="raw">
                <h3>{title}</h3>
                <h5>UserId: {userId}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}
