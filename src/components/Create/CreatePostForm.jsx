import React, { useState } from 'react'
import { createPost } from '../../action/action';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

function validate(form){
    let error ={};
    if(!form.title){
        error.title = "title is required";
    } else if (!form.body){
        error.body = "body is required";
    } 
    return error;
}

export default function CreatePostForm() {

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
        setError(validate({
            ...form,
            [e.target.name]: e.target.value,
  
        }))
        console.log(e)
    }



    function handleSubmit(e){
        e.preventDefault()
            dispatch(createPost(form))
            setForm({})
            history.push('/home')
    }

    return (
        <div className="border" style={{width:"100%", padding:"2rem"}}>
            <form className="mb-3" controlId="formBasicEmail">
                <div >
                    <input type="text"
                    name="title"
                    placeholder="Enter Title"
                    onChange={(e) => handleChange(e)}
                    style={{width:"100%", padding:"2rem"}}
                     />
                </div>
                        {error.title &&(
                            <p >{error.title}</p>
                        )}
                <div>
                    <input type="text"
                    name="body"
                    placeholder="Enter body"
                    onChange={(e) => handleChange(e)}
                    style={{width:"100%", padding:"2rem"}}
                     />
                         {error.body &&(
                            <p >{error.body}</p>
                        )}
                </div>
                <div style={{marginLeft: "40%", padding:"2rem"}}>
                    <button className="btn btn-primary" style={{width:"100px"}} onSubmit={e => handleSubmit(e)} type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
