import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { statusUser } from '../../action/actionLogin';
import { useHistory } from 'react-router';
import { getPost } from '../../action/action';

import CardPost from '../CardPost/CardPost';

export default function Home() {
    const userActive = useSelector((state) => state.login.active);
    const dispatch = useDispatch();
    const history = useHistory()
    const allpost = useSelector((state) => state.reducer.post);

// var currentColor = localStorage.getItem('token')
// console.log(currentColor)

    useEffect(() => {
        if(!userActive){
            return history.push('/login')
        }
        // eslint-disable-next-line
    }, [userActive]);
    useEffect(() => {
        dispatch(statusUser())
        dispatch(getPost())
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {
                allpost?.map((e, idx) => 
                <div key={idx}>
                    <CardPost title={e.title} id={e.id}/>
                <hr></hr>
                </div>
                )
            }

        </div>
    )
}
