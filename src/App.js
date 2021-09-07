import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/about' component={About} />
          <Route path='/menu' component={Menu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
