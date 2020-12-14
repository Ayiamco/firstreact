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
            <div id="home-half-border"></div>

            <Link to="/Exercise1" className="exercise-card">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise1"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 1 (Birthday)</p>
                </div>
                
            </Link>
            <Link to="/Exercise1" className="exercise-card">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise2"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 2 (Github Api)</p>
                </div>
            </Link>
            <Link to="/Exercise1" className="exercise-card">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise3"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 3 (Form submission)</p>
                </div>
            </Link>
        </div>
    )
}


export default HomePage;