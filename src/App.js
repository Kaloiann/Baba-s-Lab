import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from "./components/Menu";



function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
    </div>
      <Switch>
        <Route path='/menu' component={Menu}>
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
