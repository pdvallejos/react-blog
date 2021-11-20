import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-success me-2" type="button">Main button</button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
            </form>
        </nav>
    )
}
