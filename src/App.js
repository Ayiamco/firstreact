import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import Exercise1 from "./js/Exercise1"
import Exercise2 from "./js/Exercise2"
import Exercise3 from "./js/Exercise3"




const App = () => {
    
    return (
        <Router>
            <Route exact path ="/">
                <Exercise1></Exercise1>
            </Route>
            <Route exact path ="/Exercise2">
                <Exercise2></Exercise2>
            </Route>
            <Route exact path ="/Exercise3">
                <Exercise3></Exercise3>
            </Route>
            
        </Router>
    )
}

export default App

