import React ,{useState}from 'react';
import './App.css';

import Auth from './components/JS/Auth'
import Button from '@material-ui/core/Button';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/JS/Home'


function App() {
  const [collapsed,setCollapse]=useState(true);

    const changeCollapse = ()=>{
        setCollapse(!collapsed)
    }
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
