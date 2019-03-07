import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import GamePage from './GamePage.js';
import CurrentList from './CurrentList.js';



class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/*url path to go to the gamepage*/}
          <Route exact path='/' component={LandingPage} />
          <Route path='/gamepage' component={GamePage} />
          <Route path='/gamepage' component={CurrentList} />
        </div>
      </Router>

    )
  }
}

export default App;
// render(<SortableComponent />, document.getElementById('root'));
