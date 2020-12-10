import React from 'react';
import './App.css';
import AppBarStyled from './Components/AppBar.js'
import Project from './Pages/project';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';


function App() {
  return  (
    <Router>
      <Helmet><title>Shlok Patel</title></Helmet>
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