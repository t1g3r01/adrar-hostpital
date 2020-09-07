import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/JS/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        {/* <Route path="/ads">
          <Nav />
          <Ads></Ads>
        </Route> */}
        <Route path="/">
          {/* <Nav />
          <Auth></Auth> */}
          <Home></Home>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
