import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from "./components/Menu";
import Home from "./components/Home";



function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
    </div>
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
        <Route path='/menu' component={Menu}>
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
