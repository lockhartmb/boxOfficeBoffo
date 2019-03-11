import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'
import './Global.css'


class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            
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
                    <input className="inputName" type="text" placeholder="Enter your name" htmlFor="name" name="name" onChange={this.props.handleChange} value={this.props.userName} id="name" required/>
                    <Link to="gamepage" className="startButton">Play</Link>
                </div>
                <footer className="landingFooter clearfix">
                    <Link to="/" className="homeButton">
                        <i class="fas fa-home"></i>
                        <p>Home</p>
                        <span className="visuallyHidden">Home Icon</span>
                    </Link>
                    <Link to="/" className="homeButton">
                        <i className="fas fa-plus"></i>
                        <p>New list</p>
                        <span className="visuallyHidden">Add new list</span>
                    </Link>
                    
                    <Link to="/completedLists" className="allListsButton">
                        <i class="fas fa-list-ul"></i>
                        <p>Completed Lists</p>
                        <span className="visuallyHidden">Completed Lists</span>
                    </Link>
                </footer>
            </section>
        )
    }
}

export default LandingPage;