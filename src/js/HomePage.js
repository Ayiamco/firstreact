import React from 'react';
import {Link} from  "react-router-dom"

import logo from "../logo.svg"
import Exercise1Icon from  "../images/Exercise1Icon.png"
import Exercise2Icon from  "../images/Exercise2Icon.jpg"

import '../css/HomePage.css'

const HomePage = () => { 

    return (
        <div className="home-container">
            <header>
                <h1>React Projects</h1>
            </header>

            <h2>Basic Projects</h2>
            <div id="home-half-border"></div>

            <Link to="/Exercise1" className="exercise-card" target="_blank"
            >
                <div className="exercise-card-img-container">
                    <img src={Exercise1Icon} alt="Exercise1"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 1 (Birthday)</p>
                </div>
                
            </Link>
            <Link to="/Exercise2" className="exercise-card" target="_blank">
                <div className="exercise-card-img-container">
                    <img src={Exercise2Icon} alt="Exercise2"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 2 (Github Api)</p>
                </div>
            </Link>
            <Link to="/Exercise3" className="exercise-card" target="_blank">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise3"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 3 (Form submission)</p>
                </div>
            </Link>
            <Link to="/Exercise4" className="exercise-card" target="_blank">
                <div className="exercise-card-img-container">
                    <img src={logo} alt="Exercise4"></img>
                </div>
                <div className="exercise-card-title-container">
                    <p>Exercise 4 (Weather forecast)</p>
                </div>
            </Link>
        </div>
    )
}


export default HomePage;