import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from './firebase';
import "./Global.css";
import "./CompletedLists.css"

class CompletedLists extends Component {
    constructor() {
        super();
        this.state = {
            newStateAllTheMovieInfo: [],
            keys: []
        };
    }

    // we want all the lists people have ever made to be on the page when we get there
    componentDidMount() {

        // end point that we get the lists from is 'LockedLists'
        const dbRef = firebase.database().ref('LockedLists');

        dbRef.on('value', response => {
            const dataFromFirebase = response.val();
            // making an empty array to store all of our Firebase info in, because it originally comes back to us as an object
            const newStateAllTheMovieInfo = [];

            //     // for each node in the firebase object, we want to get the userName and that user's list and save them as variables
            for (let key in dataFromFirebase) {
                let keys = dataFromFirebase[key];
                let userName = dataFromFirebase[key].userName;
                let userList = dataFromFirebase[key].list;

                // we then push that information to the empty array that we set up earlier
                newStateAllTheMovieInfo.push({
                    key: key,
                    userName: userName,
                    userList: userList
                })
            }

            // we then want to set the state to that new array so we can map over it on page load
            this.setState({
                newStateAllTheMovieInfo: newStateAllTheMovieInfo
            })
        })
    }

    handleDelete = (key) => {

        const dbRef = firebase.database().ref('LockedLists').child(key);
        dbRef.remove();
        // console.log(dbRef);
    }

    render() {

        return (

            <div className="completedLists">

                <h2 className="completedListsTitle">Compare your Predictions!</h2>

                {/* ul of alllll the lists */}
                <ul className="clearfix" className="userLists">
                    {


                        // for each user, print the userName as a title
                        this.state.newStateAllTheMovieInfo.map((user, index) => {

                            // console.log(user.keys);
                            return (

                                <li key={index} id={user.key} className="listBox">

                                    <h3 className="listName">{user.userName}</h3>

                                    <ol>
                                        {
                                            // for each user, print all that user's movies
                                            user.userList.map((movie, index) => {
                                                return (
                                                    <li key={index} className="moviesList"><span>{movie.title}</span></li>
                                                )
                                            })
                                        }
                                    </ol>

                                    <button onClick={() => this.handleDelete(user.key)}>Delete List</button>

                                </li>
                            )
                        })
                    }
                </ul>

                <footer className="listsFooter">
                    <Link to="/" className="homeButton">
                        <i class="fas fa-home"></i>
                        <span className="visuallyHidden">Home Icon</span>
                    </Link>
                </footer>

            </div>
        )
    }
}

export default CompletedLists;