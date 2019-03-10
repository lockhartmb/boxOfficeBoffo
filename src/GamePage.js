import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Qs from 'qs';
import firebase from './firebase';
import './GamePage.css';
import './Global.css';
import CurrentList from './CurrentList.js';


const apiUrl = 'https://api.themoviedb.org/3/discover/movie/'
const apiKey = '9ce0982a9b86c5a78ad6ab14e214b652'

// GamePage component has a state of year (which is 2019 to start)
class GamePage extends Component {
    constructor() {
        super();
        this.state = {
            year: "2019",
            results: [],
            clickedMovie: '',
            chosenMovies: [],


        }
    }
    // we're making fetchData it's own function that gets the currentYear from GamePage through props. Then fetchData can be called many times depending on situation
    // used props to get the year from GamePage and saved as variable. Variable is used in search parameters to make that dynamic


    // when component mounts, it will fetchData which is with the year 2019 as default
    componentDidMount() {
        this.fetchData();
    }

    // if the component updates (ie, if the currentYear changes), then it will fetchData again
    componentDidUpdate(prevProps, prevState) {
        if (this.state.year !== prevState.year) {
            /*  console.log('year', this.state.year, 'prev', prevProps.year, prevState.year) */
            this.fetchData();
        }
    }

    fetchData = async () => {
        let { year } = this.state;
        // console.log('fetchData')

        await axios({
            method: 'GET',
            url: 'http://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: apiUrl,
                params: {
                    api_key: apiKey,
                    format: 'json',
                    language: 'en-US',
                    'primary_release_date.gte': `${year}-05-01`,
                    'primary_release_date.lte': `${year}-09-04`,
                    region: 'US',
                    page: 1,
                    sort_by: 'revenue.desc',
                    sort_by: 'popularity.desc'
                },
                proxyHeaders: {
                    'some_header': 'lfkjg'
                },
                xmlToJson: false,
            }
            // .then() and this.setState() will wait until the axios call is done because it has "await" on it
        }).then(response => {
            const results = response.data.results;
            this.setState({ results });
        })
    }


    // handleYear is always looking for the chosen year, so if a new year is chosen in the dropdown, GamePage will know about it (it's state is updated)
    handleYear = (event) => {
        event.preventDefault();
        this.setState({
            year: event.target.value
        })
    }

    addCurrentMovie = async (event) => {
        event.preventDefault();
        let numberOfMovies = this.state.chosenMovies.length;
        const canAddMovies = numberOfMovies < 10;
        // console.log(canAddMovies)
        if (canAddMovies) {
            const dbRef = firebase.database().ref(this.props.userName);
            const data = event.target.value;

            dbRef.push(data);
            // we get this informations from the click and set the state of that clicked movie
            await this.setState({
                clickedMovie: data
            })
            // console.log('data after clicking', data)
            //once that state is set (await) we duplicate the chosen movie state and push the clickedMovie to the newMovieArray
            dbRef.on('value', response => {
                const moviesFromFirebase = response.val();
                const getMoviesBack = []
                // console.log(moviesFromFirebase)
                // console.log('Key in Data Value', dataVal.key)
                for (let key in moviesFromFirebase) {
                    getMoviesBack.push({
                        key: key,
                        title: moviesFromFirebase[key]
                    });
                }
                // console.log(getMoviesBack);
                this.setState({
                    chosenMovies: getMoviesBack
                })
            })
        }
    }


    /* renderButton = (event) => {

        
        else
    } */


    render() {
        return (
            <Fragment>
                <section className="gamePage">
                    <select className="yearDropDown" onChange={this.handleYear}>
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


                    <div className="movieCatalogue clearfix">
                        {this.state.results.filter(movie => {
                            return movie.poster_path !== null;
                        }).map(movie => {

                            return (
                                <div key={movie.id} className="movieCatalogueMovie">
                                    {/* a link to a URL that doesn't exist yet, but when it does, it will be the ID of the movie I click on */}

                                    <img className="movieImage" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.title}`} />
                                    <div className="overlay">
                                        <p>{movie.title}</p>
                                    </div>
                                    <button className="addMovie" value={movie.title} onClick={this.addCurrentMovie} >
                                        <i className="fas fa-plus"></i>
                                        <span className="visuallyHidden">Add movie to list</span>
                                    </button>

                                </div>
                            )
                        })
                        }
                    </div>
                    {/* we give the chosenMovies to CurrentList Component as a props */}

                </section>
                <CurrentList chosenMovies={this.state.chosenMovies} userName={this.props.userName} />
            </Fragment>

        )
    }

}
export default GamePage;
//user click on a movie to add to his list
//find a way to limit to 10 movies choices for each list
    //send error message "you already choose 10 MOVIES"