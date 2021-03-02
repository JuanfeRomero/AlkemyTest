import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './ui-components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Movements from './pages/Movements';

function App() {
    let isLogged = true;

    return (
        <Router>
            <div className="navbar">
                <Header isLogged={isLogged} />
            </div>
            <Route exact path="/">
                {isLogged ? (
                    <Redirect to="/movements" />
                ) : (
                    <Redirect to="/login" />
                )}
            </Route>
            <Route path="/movements">
                {isLogged ? <Movements /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
                {isLogged ? <Redirect to="/movements" /> : <Login />}
            </Route>
            <Route path="/signup">
                {isLogged ? <Redirect to="/movements" /> : <Signup />}
            </Route>
        </Router>
    );
}

export default App;
