import React, { Component } from "react";
import firebase from "./firebase";
import "./Global.css";

class CompletedLists extends Component {
    constructor() {
        super();
        this.state = {
            something: false,
            displayList: [],
            usersLists: []
        };
    }

    // getListData = () => {

    //     const movies = [];
    //     this.state.displayList.map(listDetails => {
    //         movies.push( 
    //                 {
    //                     [listDetails.user.userName]: listDetails.userlist
    //                 } 
    //             )  
    //     })
    //     console.log(movies);
    // }

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
        // console.log(dbRef)
        dbRef.on('value', listObject => {
            const moviesFromFirebase = listObject.val()
            for (let key in moviesFromFirebase) {
                listArray.push({
                    key: moviesFromFirebase[key]
                });
            }
            console.log(listArray)
            this.setState({
                userList: listArray
            })
            // this.getListData()
            // console.log('after state',this.state.displayList);
        })
        // console.log(listArray) 


    }
}
export default CompletedLists