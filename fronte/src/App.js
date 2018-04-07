import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import Carlist from './components/Carlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <BrowserRouter>
            <div>
        <Link to="/">Frontpage</Link>{' '}
        <Link to="/home">Home</Link>{' '}
        <Link to="/cars">Cars</Link>{' '}
        
        <Switch>
        <Route exact path="/" render={() => <h1>Front page</h1>}/>
        <Route path="/home" component={Home}/>
        <Route path="/cars" component={Carlist}/>
        </Switch>
      
      </div>
      </BrowserRouter>
      
    
      </div>
    );
  }
}

export default App;
