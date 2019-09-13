import React, { Component } from 'react';
/*
import logo from './logo.svg';
*/
import './App.css';
import './components/style.css'
/*
import First from'./components/First.js'
import Second from './components/Second';
import FirstClass from './components/FirstClass';
import View from './components/View';
*/

import articles from './fixtures/articles'
import ArticlesList from './components/ArticlesList'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
        <div className="App">
      {/* 

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <First />
        <Second />
        <FirstClass />
        <View />
  */} 
      <div className="container">
        <div className="jumbotron">
          <h2 className="display-3">Application</h2>
        </div>
        <ArticlesList articles={articles} />
      </div>
    </div>
    );
  }
}

export default App;
