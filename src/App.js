import React from 'react';

import {HashRouter as Router,Route,Switch} from "react-router-dom"


import HomePage from "./Pages/HomePage"
import Exercise1 from "./Pages/Exercise1";
import Exercise2 from "./Pages/Exercise2";
import Exercise3 from "./Pages/Exercise3";


const App = () => {
    
    return (
            <Router >
                <Switch>
                    <Route exact path ="/" >
                        <HomePage></HomePage>
                    </Route>
                    <Route exact path="/Exercise1" >
                        <Exercise1></Exercise1>
                    </Route>
                    <Route exact path ="/Exercise2">
                        <Exercise2></Exercise2>
                    </Route>
                    <Route exact path ="/Exercise3">
                            <Exercise3></Exercise3>
                    </Route>
                    <Route path="/*" component={HomePage}></Route>
                    </Switch>
            </Router>
      
    )
}

export default App

