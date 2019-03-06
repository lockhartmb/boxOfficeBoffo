import React, { Component } from 'react';
import Logo from './Logo';
import Axios from './Axios';


// GamePage component has a state of year (which is 2019 to start)
class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            year: 2019,
            results: [],
        }
    }

    getResults = (movieResult) => {
        this.setState({
            results: movieResult
        })
        console.log(this.state.results);
    }

    render() {
        return (
            <section>
                <h1>Box Office Boffo</h1>
                <select><option></option></select>
                {/* We pass the state of year to the Axios component to modify the search parameters */}
                <Axios 
                currentYear={this.state.year}
                getResults={this.getResults}
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