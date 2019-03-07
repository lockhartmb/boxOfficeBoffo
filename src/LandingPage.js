import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                {/*link to the gamepage*/}
                <Link to="gamepage">Click to Start</Link>
            </section>
        )
    }
}

export default LandingPage;