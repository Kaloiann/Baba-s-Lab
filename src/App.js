import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from "./components/Menu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import MealsListing from "./components/MealsListing";
import CartProvider from "./components/store/CartProvider";
import data from "./api/menu.json"
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Navigation />
      <div className="page">
        <CartProvider>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/menu'>
              <Menu data={data.Menu} />
            </Route>
            <Route path='/meals/category/:category'>
              <MealsListing/>
            </Route>
            <Route path='/meals/subcategory/:subcategory'>
              <MealsListing/>
            </Route>
          </Switch>
        </CartProvider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
