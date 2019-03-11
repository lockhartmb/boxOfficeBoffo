import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import GamePage from './GamePage.js';
import CompletedLists from './CompletedLists.js';
import "./Global.css";
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      alertParagraph: ''
    }
  }

  // this function will detect when something is being typed in text input and when a change is made, set it in state. it is sent to LandingPage.js below to be used on the user's name input
  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })

    if (this.state.userName === '') {
      // show alert that username is required
    }

    if (this.state.userName !== '') {
      const dbRef = firebase.database().ref('LockedLists');

      dbRef.once('value').then(response => {
        let firebaseData = response.val();
        let duplicate = false;

        for (let key in firebaseData) {
          if (this.state.userName === firebaseData[key].userName) {
            //alert user if the list name already exists
            duplicate = true;

            this.setState({
              alertParagraph: 'you need to pick a new name'
            })
          }
        }
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* URL path to go to the landing page. This route is also sending the handleChange method and the userName state to the LandingPage component*/}
          <Route exact path='/' render={() => {
            return <LandingPage handleChange={this.handleChange} alertParagraph={this.state.alertParagraph} userName={this.state.userName} />
          }
          } />
          {/* URL path to go to the game page. This route is also sending the userName state to the GamePage component*/}
          <Route path='/gamepage' render={() => {
            return <GamePage userName={this.state.userName} />
          }
          } />
          <Route path='/completedlists' component={CompletedLists} />
        </div>
      </Router>

    )
  }
}

export default App;
// render(<SortableComponent />, document.getElementById('root'));
