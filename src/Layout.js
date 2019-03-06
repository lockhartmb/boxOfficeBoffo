import React, { Component } from 'react';
import LandingPage from './LandingPage.js';
import Logo from './Logo.js';
import GamePage from './GamePage.js';

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            clickToStart: null
        }
    }

    handleStart = (e) => {
        e.preventDefault();
        this.setState({
            clickToStart: 'clicked'
        })
    }

    
    
    render() {
        return(
            <section>
                <Logo />
                {/* if the clickToStart state is "truthy", then user will move to GamePage, if not, stays on LandingPage */}
                {this.state.clickToStart ? <GamePage /> : <LandingPage handleStart={this.handleStart}/> }
            </section>

        )
    }
}

export default Layout;