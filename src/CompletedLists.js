import React, { Component, Fragment } from 'react';
import firebase from './firebase';
import "./Global.css";

class CompletedLists extends Component {
    constructor() {
        super();
        this.state = {
            newStateAllTheMovieInfo: []
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

            // for each node in the firebase object, we want to get the userName and that user's list and save them as variables
            for (let key in dataFromFirebase) {
                let userName = dataFromFirebase[key].userName;
                let userList = dataFromFirebase[key].list;

                // we then push that information to the empty array that we set up earlier
                newStateAllTheMovieInfo.push({
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

    render() {
        return (

            <Fragment className="completedLists">
                <h2>All the completed lists</h2>
                {/* ul of alllll the lists */}
                <ul className="allTheLists">
                    {
                        // for each user, print the userName as a title
                        this.state.newStateAllTheMovieInfo.map((user, index) => {
                            return (
                                <li key={index}>
                                    <h3>{user.userName}</h3>
                                    <ol>
                                        {
                                            // for each user, print all that user's movies
                                            user.userList.map((movie, index) => {
                                                return (
                                                    <li key={index}>{movie.title}</li>
                                                )
                                            })
                                        }
                                    </ol>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}


export default CompletedLists;