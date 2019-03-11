import React, { Component } from "react";
import firebase from "./firebase";
import "./Global.css";

class FinalLists extends Component {
    constructor() {
        super();
        this.state = {
            something: false,
            displayList: [],
            usersLists: []
        };
    }

    getListData = () => {

        const movies = [];
        this.state.displayList.map(listDetails => {
            movies.push( 
                    {
                        [listDetails.user.userName]: listDetails.userlist
                    } 
                )  
        })
        console.log(movies);
    }

    render() {
        return (
            <div>
                <p>FML</p>
            </div>
        )
    }




componentDidMount() {
    
        const dbRef = firebase.database().ref('LockedLists')
        const listArray = []
        dbRef.on('value', listObject => {
            const moviesFromFirebase = listObject.val()
            for (let key in moviesFromFirebase) {
                listArray.push({
                    key: key,
                    user: moviesFromFirebase[key]
                });
            }
            this.setState({
                userList: listArray
            })
            this.getListData()
            // console.log('after state',this.state.displayList);
        })
        // console.log(listArray) 


    }
}
export default FinalLists