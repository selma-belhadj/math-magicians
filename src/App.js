import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Calculator">
          <Calculator />
        </Route>
        <Route exact path="/Quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
