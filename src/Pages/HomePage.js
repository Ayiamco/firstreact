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
                 <div className="external-card">
                    <figure className="external-card-img-container">
                        <img src={logo} alt="Birthday Display"></img>
                        <figcaption> Birthday Counter</figcaption>
                    </figure>
                    <div className="external-card-bt">
                        <Link to="/Exercise1"  target="_blank">
                            <i className="fas fa-link"> Live Site</i>
                        </Link>
                        <a href="https://github.com/Ayiamco/firstreact/blob/master/src/js/Exercise1.js" target="_blank" rel="noreferrer">
                            <i className="fas fa-link"> GitHub Repo</i>
                         </a>
                         
                    </div>
                </div> 
                

                {/* Exercise 2 */}
                 <div className="external-card">
                    <figure className="external-card-img-container">
                        <img src={logo} alt="Github Users"></img>
                        <figcaption> GitHub Users</figcaption>
                    </figure>
                    <div className="external-card-bt">
                         <Link to="/Exercise2"  target="_blank">
                            <i className="fas fa-link"> Live Site</i>
                        </Link>
                        <a href="https://github.com/Ayiamco/firstreact/blob/master/src/js/Exercise2.js" target="_blank" rel="noreferrer">
                             <i className="fas fa-link"> GitHub Repo</i>
                         </a>
                        
                        
                    </div>
                </div> 
              

                {/* Exercise 3 */}
                 <div className="external-card">
                    <figure className="external-card-img-container">
                        <img src={logo} alt="Form Submission"></img>
                        <figcaption> Form Submission</figcaption>
                    </figure>
                    <div className="external-card-bt">
                        <Link to="/Exercise3"  target="_blank">
                            <i className="fas fa-link"> Live Site </i>
                        </Link>
                        <a href="https://github.com/Ayiamco/firstreact/blob/master/src/js/Exercise3.js" target="_blank" rel="noreferrer">
                             <i className="fas fa-link"> GitHub Repo</i>
                         </a>
                        
                    </div>
                </div> 
               

                {/* Exercise 4 */}
                <div className="external-card">
                    <figure className="external-card-img-container">
                        <img src={logo} alt="Bookmark Manager"></img>
                        <figcaption>Weather ForeCast</figcaption>
                    </figure>
                    <div className="external-card-bt">
                        <a href="https://ayiamco.github.io/inspark/" target="_blank" rel="noreferrer">
                            <i className="fas fa-link">  Live Site</i>
                         </a>
                        <a href="https://ayiamco.github.io/inspark/"> Github Repo <i className="fas fa-link"></i></a>
                    </div>
                </div> 
                
            </div>
            
            <h2>Advanced Projects</h2>
            <div id="home-half-border"></div>

            <div className="flex-container">


                {/* Exercise 6 */}
                <div className="external-card">
                    <figure className="external-card-img-container">
                        <img src={logo} alt="online kiosk"></img>
                        <figcaption> Online Kiosk</figcaption>
                    </figure>
                    <div className="external-card-bt">
                        <a href="https://github.com/Ayiamco/kiosktemplate" target="_blank" rel="noreferrer">
                             <i className="fas fa-link"> Live Site</i>
                         </a>
                        <a href="https://ayiamco.github.io/kiosktemplate/"> <i className="fas fa-link"> Github Repo</i></a>
                    </div>
                </div> 
                

                {/* Exercise 7 */}
                <div className="external-card">
                    <figure className="external-card-img-container">
                        <img src={logo} alt="Laundry Manager Web Client"></img>
                        <figcaption>Laundry Manager Web Client</figcaption>
                    </figure>
                    <div className="external-card-bt">
                        <a href="https://github.com/Ayiamco/LaundryManagerClient" target="_blank" rel="noreferrer">
                             <i className="fas fa-link"> Live Site</i>
                         </a>
                        <a href="https://ayiamco.github.io/kiosktemplate/"><i className="fas fa-link"> Github Repo</i></a>
                    </div>
                </div> 
                
            </div>
        
            <footer>
                <p>UI Design  gotten from <br/> <a href="https://react-projects.netlify.app/">John Smillga React Site</a> </p>
                <p>Code by <a href="https://react-projects.netlify.app/">Joseph Achonu</a></p>
                <div >
                    <a href="https://react-projects.netlify.app/"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://react-projects.netlify.app/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://react-projects.netlify.app/"><i className="fab fa-facebook-square"></i></a>
                </div>
            </footer>
        </div>
    )
}


export default HomePage;