import React, { Component } from 'react';


class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            // clickToStart: null
        }
    }



    render() {
        return (
            <section>

                <h1>Box Office Boffo</h1>
                <p>Some description of the app</p>
                {/* handleStart function is in Layout component and is passed to the LandingPage component as prop. Clicking the button runs that function, which sets the state of Layout to "clicked" */}
                <button onClick={this.props.handleStart}>Click to Start</button>
                {/*add input to get name of user*/}
                {/* { this.state.clickToStart ? <GamePage /> :  } */}


            </section>
        )
    }
}

export default LandingPage;