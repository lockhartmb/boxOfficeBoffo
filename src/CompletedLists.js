import React, { Component } from "react";
import firebase from "./firebase";
import "./Global.css";

class CompletedLists extends Component {
    constructor() {
        super();
        this.state = {
            displayList: [],
            userLists: []
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
    
        let dbRef = firebase.database().ref('LockedLists')
        let listArray = []
        // console.log(dbRef)
        dbRef.on('value', listObject => {
            const moviesFromFirebase = listObject.val()
            for (let key in moviesFromFirebase) {
                listArray.push({
                    FinalList: moviesFromFirebase[key]
                });
            }
            // this.setState({
                //     userLists: listArray
                // })
                
                // this.getListData()
                // console.log('after state',this.state.userLists);
            })
            listArray.map()
        // console.log(listArray) 


    }
}
export default CompletedLists