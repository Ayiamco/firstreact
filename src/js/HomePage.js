import React from 'react';
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

            <div className="flex-container">

                {/* Exercise 1 */}
                <div  className="exercise-card">
                    <div className="exercise-card-img-container">
                        <img src={logo} alt="Exercise5"></img>
                    </div>
                    <div className="adv-link-container">
                        <a href="https://github.com/Ayiamco/kiosktemplate" target="_blank" rel="noreferrer"> 
                            <i class="fas fa-link"> Github Repo</i>
                        </a>
                        <Link to="/Exercise1"  target="_blank">
                            <i class="fas fa-link"> Birthday</i>
                        </Link>
                    </div>
                </div>

                {/* Exercise 2 */}
               <div  className="exercise-card">
                    <div className="exercise-card-img-container">
                        <img src={logo} alt="Exercise5"></img>
                    </div>
                    <div className="adv-link-container">
                        <a href="https://github.com/Ayiamco/kiosktemplate" target="_blank" rel="noreferrer"> 
                            <i class="fas fa-link"> Github Repo</i>
                        </a>
                        <Link to="/Exercise2"  target="_blank">
                            <i class="fas fa-link"> Github Api</i>
                        </Link>
                    </div>
                </div>

                {/* Exercise 3 */}
                <div  className="exercise-card">
                    <div className="exercise-card-img-container">
                        <img src={logo} alt="Exercise5"></img>
                    </div>
                    <div className="adv-link-container">
                        <a href="https://github.com/Ayiamco/kiosktemplate" target="_blank" rel="noreferrer"> 
                            <i class="fas fa-link"> Github Repo</i>
                        </a>
                        <Link to="/Exercise3"  target="_blank">
                            <i class="fas fa-link"> Form Submission</i>
                        </Link>
                    </div>
                </div>

                {/* Exercise 4 */}
                <div  className="exercise-card">
                    <div className="exercise-card-img-container">
                        <img src={logo} alt="Exercise5"></img>
                    </div>
                    <div className="adv-link-container">
                        <a href="https://github.com/Ayiamco/kiosktemplate" target="_blank" rel="noreferrer"> 
                            <i class="fas fa-link"> Github Repo</i>
                        </a>
                        <Link to="/Exercise4"  target="_blank">
                            <i class="fas fa-link"> Weather Forcast</i>
                        </Link>
                    </div>
                </div>
                
            </div>
            
            <h2>Advanced Projects</h2>
            <div id="home-half-border"></div>

            <div className="flex-container">


                {/* Exercise 6 */}
                <div  className="exercise-card">
                    <div className="exercise-card-img-container">
                        <img src={logo} alt="Exercise5"></img>
                    </div>
                    <div className="adv-link-container">
                        <a href="https://github.com/Ayiamco/kiosktemplate" target="_blank" rel="noreferrer"> 
                            <i class="fas fa-link"> Github Repo</i>
                        </a>
                        <a href="http://joekiosk.netlify.com/"  target="_blank" rel="noreferrer">
                              <i class="fas fa-link"> Online Kiosk</i>
                        </a>
                    </div>
                </div>

                {/* Exercise 7 */}
                <div  className="exercise-card">
                    <div className="exercise-card-img-container">
                        <img src={logo} alt="Exercise5"></img>
                    </div>
                    <div className="adv-link-container">
                        <a href="https://github.com/Ayiamco/LaundryManagerClient" target="_blank" rel="noreferrer">
                             <i class="fas fa-link"> Github Repo</i> 
                        </a>
                        <a href="http://joekiosk.netlify.com/"  target="_blank" rel="noreferrer">
                              <i class="fas fa-link"> Laundry Manager Client</i>
                        </a>
                    </div>
                </div>
            </div>
        
            <footer>
                <p>UI Design  gotten from <br/> <a href="https://react-projects.netlify.app/">John Smillga React Site</a> </p>
                <p>Code by <a href="https://react-projects.netlify.app/">Joseph Achonu</a></p>
                <div >
                    <a href="https://react-projects.netlify.app/"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://react-projects.netlify.app/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://react-projects.netlify.app/"><i class="fab fa-facebook-square"></i></a>
                </div>
            </footer>
        </div>
    )
}


export default HomePage;