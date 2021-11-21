import axios from 'axios'
import { createDispatchHook } from 'react-redux'


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
        const res = await axios.get(`https://jsonplaceholder.typicode.com'/posts/${id}`)
        return dispatch({
            type: 'GET_DETAILS',
            payload: res.data
        })
    }
};
export function deleted(id){
    return{
        type: "REMOVE_POST",
        payload: {
            id: id,
        }
    }
}
export function removePost(id){
    return function(dispatch){
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {dispatch(deleted(id))
        }).catch((e) => console.log(e))
    }
}
var idx = 100

export function created(data){
    return{
        type: 'ADD_POST',
        payload: data
    }
}
export function createPost(posted){
    console.log(posted)
    const data = {
        title: posted.title,
        body: posted.body
    }
    console.log(data)
    return (dispatch) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            const id = response.data

            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response =>{
                dispatch(createPost(response.data))
            }).catch( (e) => console.log(e))
      
        }).catch((e) => console.log(e))
    }
}