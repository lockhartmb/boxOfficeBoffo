import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import boffoLogo from './assets/boffoLogo.svg';
import './LandingPage.css'
import './Global.css'
import Modal from './Modal.js';

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <section className="landingPage">
                <div className="contentContainer">
                    <div className="logo">
                        <img src={boffoLogo} className="logo" alt="" />
                    </div>
                    <h1 >Welcome to Box Office Boffo!</h1>
                    <p>Make a list of what you predict will be the top 10 grossing summer blockbusters and see how you match up!</p>
                    {/*link to the gamepage*/}
                    <label htmlFor="name" className="visuallyHidden">Name</label>
                    <input className="inputName" type="text" placeholder="Give your list a unique name" htmlFor="name" name="name" onChange={this.props.handleChange} value={this.props.userName} id="name" required />
                    <p>{this.props.duplicateError}</p>
                    <p>{this.props.nothingError}</p>
                    <Link to="gamepage" className={this.props.class}>Play</Link>
                </div>
                <footer className="landingFooter clearfix">
                    <Link to="/" className="homeButton">
                        <i class="fas fa-home"></i>
                        <p>Home</p>
                        <span className="visuallyHidden">Home Icon</span>
                    </Link>
                    <Link to="/completedLists" className="allListsButton homeButton">
                        <i class="fas fa-list-ul"></i>
                        <p>Completed Lists</p>
                        <span className="visuallyHidden">Completed Lists</span>
                    </Link>
                    {/* <Link to="/help" className="helpButton homeButton">
                        
                    </Link> */}
                    <div>
                        {this.state.isShowing ? 
                        <div onClick={this.closeModalHandler} className="back-drop"></div> : 
                        null}

                        <button className="helpButton homeButton" onClick={this.openModalHandler}>
                            <i class="fas fa-question"></i>
                            <p>Help</p>
                            <span className="visuallyHidden">More info</span>
                        </button>

                        <Modal
                            className="modal"
                            show={this.state.isShowing}
                            close={this.closeModalHandler}>
                            Need some more info?
                        </Modal>
                    </div>
                </footer>
            </section>
        )
    }
}

export default LandingPage;