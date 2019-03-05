import React, { Component } from 'react';
import Logo from './Logo';
import Axios from './Axios';

class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            year: 2019,
            results: []
        }
    }

    render() {
        return (
            <section>
                <h1>Box Office Boffo</h1>
                <select><option></option></select>
                <Axios currentYear={this.state.year}/>

            </section>
        )
    }
}

export default GamePage;
//user click on a movie to add to his list
//find a way to limit to 10 movies choices for each list
    //send error message "you already choose 10 MOVIES"