import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Layout from './Layout/index';
import { Home, Demo, Code } from './pages/index';
import createBrowserHistory from 'history/createBrowserHistory';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/demo" component={Demo}/>
          <Route exact path="/code" component={Code}/>
        </Layout>
      </Router>
    );
  }
}

export default App;
