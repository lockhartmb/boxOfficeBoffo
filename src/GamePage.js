import React, { Component } from 'react';
import Axios from './Axios';
import firebase from './firebase'



// GamePage component has a state of year (which is 2019 to start)
class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            year: 2019,
            results: []
        }
    }

    getResults = (movieResult) => {
        this.setState({
            results: movieResult
        })
        console.log(this.state.results);
    }

    // handleYear is always looking for the chosen year, so if a new year is chosen in the dropdown, GamePage will know about it (it's state is updated)
    handleYear = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        const test = "testingg firebase"
        dbRef.push(test)

        this.setState({
            year: event.target.value
        })

    }

    render() {
        return (
            <section>
                <h1>Box Office Boffo</h1>
                <select onChange={this.handleYear}>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                </select>
                {/* We pass the state of year to the Axios component to modify the search parameters */}

                <Axios
                    currentYear={this.state.year}
                    getResults={this.getResults}
                    // handleYear={this.handleYear}
                />

                <div className="movieCatalogue">
                    {this.state.results.map(movie => {
                        return (
                            <div key={movie.id} className="movieCatalogue__movie">
                                {/* a link to a URL that doesn't exist yet, but when it does, it will be the ID of the movie I click on */}

                                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.title}`} />

                            </div>
                        )
                    })
                    }
                </div>
            </section>
        )
    }
}

export default GamePage;
//user click on a movie to add to his list
//find a way to limit to 10 movies choices for each list
    //send error message "you already choose 10 MOVIES"