import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <form className="container-fluid justify-content-start">
            <Link to='/home'>
            <button className="btn btn-outline-success me-2" type="button">Home</button>
            </Link>
            <Link to='/new'>
            <button className="btn btn-sm btn-outline-secondary" type="button">Add Post</button>
            </Link>
            </form>
        </nav>
    )
}
