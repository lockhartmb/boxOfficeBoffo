import React, { Component } from 'react';
import GamePage from './GamePage.js'


class LandingPage extends Component {
    constructor() {
        super();
        this.state={
            clickToStart: null
        }
    }

    

    render() {
        return(
            <section>

                <h1>Box Office Boffo</h1>
                <p>Some description of the app</p>
                <button onClick={this.props.handleStart}>Click to Start</button>
                
                {/* { this.state.clickToStart ? <GamePage /> :  } */}
                

            </section>
        )
    }
}

export default LandingPage;