import React, { useState } from 'react'
import { createPost } from '../../action/action';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router';

// function validate(form){
//     let error ={};
//     if(!form.title){
//         error.title = "title is required";
//     } else if (!form.body){
//         error.body = "body is required";
//     } 
//     return error;
// }

export default function CreatePostForm() {
    const allpost = useSelector(state => state.login.post)
    const [error, setError] = useState({})
    const dispatch = useDispatch();
    const history = useHistory()
    const [form, setForm] = useState({
        id: 0,
        title:"",
        body:""
    })
    console.log(form)
    function handleChange(e){
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            
        })
        // setError(validate({
        //     ...form,
        //     [e.target.title]: e.target.value,
  
        // }))
        // console.log(e)
    }

    // function handlechange(e){
    //     e.preventDefault()
    //     setForm({
    //         ...form,
    //         [e.target.body]: e.target.value,
  
    //     })
    //     setError(validate({
    //         ...form,
    //         [e.target.body]: e.target.value,
    //     }))
        
    // }

    function handleSubmit(e){
        e.preventDefault()
        // axios.post('https://jsonplaceholder.typicode.com/posts', form)
        // .then(response =>{
            dispatch(createPost(form))
            setForm({})
            history.push('/home')
        // }).catch(e => console.log(e))
    }

    return (
        <div>
            <form >
                <div>
                    <input type="text"
                    name="title"
                    placeholder="Enter Title"
                    onChange={(e) => handleChange(e)}
                     />
                </div>
                        {/* {error.title &&(
                            <p >{error.title}</p>
                        )} */}
                <div>
                    <input type="text"
                    name="body"
                    placeholder="Enter body"
                    onChange={(e) => handleChange(e)}
                     />
                         {/* {error.body &&(
                            <p >{error.body}</p>
                        )} */}
                </div>
                <div>
                    <button  onSubmit={e => handleSubmit(e)} type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
