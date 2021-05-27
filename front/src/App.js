import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Artboards from './pages/Artboards'
import Home from './pages/Home'

import { Provider } from 'react-redux';
import store from './store'

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/artboards' component={Artboards}/>
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        </>
    );
}

export default App;