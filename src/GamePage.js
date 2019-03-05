import React, { Component } from 'react';
import Logo from './Logo';

class GamePage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <section>
                <h1>Box Office Boffo</h1>
                <select><option></option></select>
                {/**/}

            </section>
        )
    }
}

export default GamePage;
//user click on a movie to add to his list
//find a way to limit to 10 movies choices for each list
    //send error message "you already choose 10 MOVIES"