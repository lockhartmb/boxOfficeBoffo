import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import './Global.css'


class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            // clickToStart: null
        }
    }

    render() {
        return (
            <section className="landingPage">
                <div className="contentContainer">
                    <div className="logo">
                        {/* <img src="logo.svg" className="logo"alt=""/> */}
                    </div>
                    <h1 >Welcome to Box Office Boffo!</h1>
                    <p>Predict the top grossing summer blockbusters and see how you match up!</p>
                 {/*link to the gamepage*/}
                    <label htmlFor="name" className="visuallyHidden">Name</label>
                    <input className="inputName" type="text" placeholder="Enter your name" htmlFor="name" name="name" id="name" required/>
                    <Link to="gamepage" className="startButton">Play</Link>
                </div>
            </section>
        )
    }
}

export default LandingPage;