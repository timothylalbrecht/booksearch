import React from 'react';
// import components from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import components and pages to use
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
