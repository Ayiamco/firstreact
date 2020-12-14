import React from 'react'
import {Link} from  "react-router-dom"
import logo from "../logo.svg"
import '../css/HomePage.css'

const HomePage = () => { 
    return (
        <div className="home-container">
            <header>
                <h1>React Projects</h1>
            </header>

            <h2>Basic Projects</h2>

            <Link to="/Exercise1" className="exercise-card">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise1"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 1</p>
                </div>
                
            </Link>
            <Link to="/Exercise1" className="exercise-card">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise2"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 1</p>
                </div>
            </Link>
            <Link to="/Exercise1" className="exercise-card">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise3"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 1</p>
                </div>
            </Link>
        </div>
    )
}


export default HomePage;