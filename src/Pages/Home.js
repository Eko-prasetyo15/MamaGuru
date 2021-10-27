import React from "react"
import { Link } from "react-router-dom"
import '../index.css'
const Home = () => {
    return (
        <div className="Home">
            <div className="content">
                <h1>Mamaguru</h1>
                <p className="text-muted">Mamaguru Co-Teaching Network</p>
                <div className="pt-3">
                    <Link to="/login">
                        <button className="btn btn-info btn-lg mr-3">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home