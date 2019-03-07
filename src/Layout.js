import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Logo from './Logo.js';
import GamePage from './GamePage.js';


class Layout extends Component {


    render() {
        return (
            <Router>
                <section>
                    <Logo />
                    {/*url path to go to the gamepage*/}
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/gamepage' component={GamePage} />
                </section>
            </Router>

        )
    }
}

export default Layout;