import React, { Component } from 'react';
import './GamePage.css';
import './Global.css';
import './CurrentList.css';
import firebase from 'firebase';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'addMovie',
            chosenMovies: []
        }
    }

    handleClick = () => {
        this.setState({
            class: 'hide'
        })

    }

    // addCurrentMovie = async (event) => {
    //     event.preventDefault();
    //     console.log("hi")

    //     this.setState({
    //         class: 'hide'
    //     })
    //     let numberOfMovies = this.state.chosenMovies.length;
    //     const canAddMovies = numberOfMovies < 10;
    //     // console.log(canAddMovies)
    //     if (canAddMovies) {
    //         const dbRef = firebase.database().ref(this.props.userName);
    //         const data = event.target.value;

    //         dbRef.push(data);
    //         // we get this informations from the click and set the state of that clicked movie
    //         await this.setState({
    //             clickedMovie: data
    //         })
    //         //once that state is set (await) we duplicate the chosen movie state and push the clickedMovie to the newMovieArray
    //         dbRef.on('value', response => {
    //             const moviesFromFirebase = response.val();
    //             const getMoviesBack = []
    //             // console.log(moviesFromFirebase)
    //             // console.log('Key in Data Value', dataVal.key)
    //             for (let key in moviesFromFirebase) {
    //                 getMoviesBack.push({
    //                     key: key,
    //                     title: moviesFromFirebase[key]
    //                 });
    //             }
    //             // console.log(getMoviesBack);
    //             this.setState({
    //                 chosenMovies: getMoviesBack,
    //             })
    //         })
    //     }
    // }

    handleClick = () => {

    }
    
    componentDidMount(){

    }

    
    render(){
        return(
            <div key={this.props.id} className="movieCatalogueMovie">
                {/* a link to a URL that doesn't exist yet, but when it does, it will be the ID of the movie I click on */}
                <img className="movieImage" src={`http://image.tmdb.org/t/p/w500/${this.props.poster}`} alt={`Poster for ${this.props.movieTitle}`} />
                <div className="overlay">
                    <p>{this.props.movieTitle}</p>
                </div>
                <button className={this.state.class} value={this.props.movieTitle} onClick={() => this.props.addCurrentMovie(this.props.movieTitle)}>
                    <i className="fas fa-plus"></i>
                    <span className="visuallyHidden">Add movie to list</span>
                </button>
            </div>
        )
    }

}
export default MovieItem;