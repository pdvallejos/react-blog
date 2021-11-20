import axios from 'axios'

export function getPost(){
    return async function(dispatch){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return dispatch({
            type: 'GET_POST',
            payload: res.data
        })
    }
};

export function getDetails(id){
    return async function(dispatch){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return dispatch({
            type: 'GET_DETAILS',
            payload: res.data
        })
    }
};

export function removePost(id){
    return async function(dispatch){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return dispatch({
            type: 'REMOVE',
            payload: res.data
        })
    }
}