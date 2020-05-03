import React from 'react';
import './App.css';
import {Main} from "./models/main/Main";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/create" component={Main}/>
                    <Route exact path="/join" component={Main}/>
                    <Route exact path="/about" component={Main}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
