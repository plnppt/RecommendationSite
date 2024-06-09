import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProfilePage from './pages/ProfilePage';
import './styles/App.css';

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;