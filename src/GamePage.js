import React, { Component } from 'react';
import Logo from './Logo';
import Axios from './Axios';


// GamePage component has a state of year (which is 2019 to start)
class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            year: 2019,
        }
    }

    render() {
        return (
            <section>
                <h1>Box Office Boffo</h1>
                <select><option></option></select>
                {/* We pass the state of year to the Axios component to modify the search parameters */}
                <Axios currentYear={this.state.year}/>
            </section>
        )
    }
}

export default GamePage;
//user click on a movie to add to his list
//find a way to limit to 10 movies choices for each list
    //send error message "you already choose 10 MOVIES"