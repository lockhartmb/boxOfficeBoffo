import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from './firebase';
import "./Global.css";
import "./CompletedLists.css";
import "./Modal.css";
import swal from 'sweetalert';
import Modal from './Modal.js';;

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

            // for each node in the firebase object, we want to get the userName and that user's list and save them as variables
            for (let key in dataFromFirebase) {
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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this list!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dbRef.remove();
                    swal("Poof! Your list has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your list is safe!");
                }
            });
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

            <div className="completedLists">
                <div>
                    {this.state.isShowing ?
                        <div onClick={this.closeModalHandler} className="backDrop"></div> :
                        null}

                    <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}>
                        Need some more info?
                        </Modal>
                </div>
                <h2 className="completedListsTitle">Compare your Predictions!</h2>
                {/* ul of alllll the lists */}
                <ul className="clearfix userLists">
                    {
                        // for each user, print the userName as a title
                        this.state.newStateAllTheMovieInfo.map((user, index) => {
                            return (
                                <li key={index} id={user.key} className="listBox">
                                    <h3 className="listName">{user.userName}</h3>
                                    <ol className="olContainer">
                                        {
                                            // for each user, print all that user's movies
                                            user.userList.map((movie, index) => {
                                                return (
                                                    <li key={index} className="moviesList"><span>{movie.title}</span></li>
                                                )
                                            })
                                        }
                                    </ol>
                                    <button className="deleteList" onClick={() => this.handleDelete(user.key)}>
                                        <i className="fas fa-minus-circle delete"></i>
                                        <span className="visuallyHidden">Click to delete entire list</span>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>

                <footer className="landingFooter clearfix">
                    <Link to="/" className="homeButton">
                        <i className="fas fa-home"></i>
                        <p>Home</p>
                        <span className="visuallyHidden">Home Icon</span>
                    </Link>
                    <Link to="/completedLists" className="allListsButton homeButton">
                        <i className="fas fa-list-ul"></i>
                        <p>Completed Lists</p>
                        <span className="visuallyHidden">Completed Lists</span>
                    </Link>
                    <button className="helpButton homeButton" onClick={this.openModalHandler}>
                        <i className="fas fa-question"></i>
                        <p>How to play</p>
                        <span className="visuallyHidden">How to play</span>
                    </button>
                </footer>

            </div>
        )
    }
}

export default CompletedLists;