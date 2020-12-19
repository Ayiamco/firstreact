import React from 'react'
import {browserHistory} from "react-router";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


import HomePage from "./js/HomePage"
import Exercise1 from "./js/Exercise1";
import Exercise2 from "./js/Exercise2";
import Exercise3 from "./js/Exercise3";
import Exercise4 from "./js/Exercise4";


const App = () => {
    
    return (
            <Router>
                <Switch>
                    <Route exact path ="/" >
                        <HomePage></HomePage>
                    </Route>
                    <Route exact path="/Exercise1" history={browserHistory}>
                        <Exercise1></Exercise1>
                    </Route>
                    <Route exact path ="#/Exercise2">
                        <Exercise2></Exercise2>
                    </Route>
                    <Route exact path ="/#/Exercise3">
                            <Exercise3></Exercise3>
                    </Route>
                    <Route exact path ="/Exercise4">
                            <Exercise4></Exercise4>
                    </Route>
                    <Route path="/*" component={HomePage}></Route>
                    </Switch>
                
                
            </Router>
      
    )
}

export default App

