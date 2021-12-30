import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import history from './history';

function App() {
  return (
    <div className='background'>
      <Router history={history}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
