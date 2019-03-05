import React, { Component } from 'react';
import './App.css';
import Layout from './Layout.js';

class App extends Component {
  constructor() {
    super();
    this.state={

    }
  }
  render() {
    return (
      <div className="App">        
        <Layout />
      </div>
    );
  }
}

export default App;
