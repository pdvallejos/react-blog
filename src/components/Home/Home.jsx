import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { statusUser } from '../../action/actionLogin';
import { useHistory } from 'react-router';

export default function Home() {
    const userActive = useSelector((state) => state.login.active);
    const dispatch = useDispatch();
    const history = useHistory()
console.log(userActive)
// var currentColor = localStorage.getItem('token')
// console.log(currentColor)

    useEffect(() => {
        if(!userActive){
            return history.push('/login')
        }
    }, [userActive]);

    useEffect(() => {
        dispatch(statusUser())
    }, [])
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
