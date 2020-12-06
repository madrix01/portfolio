import React from 'react';
import './App.css';
import AppBarStyled from './Components/AppBar.js'
import { AppBar, Typography } from '@material-ui/core';
import Project from './Pages/project';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return  (
    <Router>
      <div className="head">
        <AppBarStyled />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/project' component={Project} />
          <Route path='/skills' component={Skills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;