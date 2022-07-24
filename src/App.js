import React, { Component } from 'react';
import './App.css';
import {asyncCall} from './api.js'
class App extends Component {
  componentDidMount() {
    const fetchData = async () => {
      const data = await asyncCall();
      console.log(data)
    }
    fetchData()
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Diksha interview boilerplate</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
