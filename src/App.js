import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from "./components/Menu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import MealsListing from "./components/MealsListing";
import CartProvider from "./store/CartProvider";
import data from "./api/menu.json"
import Footer from "./components/Footer";
import Places from "./components/Places";
import ForBaba from "./components/ForBaba";



function App() {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <div className="page">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/places'>
                <Places />
              </Route>
              <Route path='/info'>
                <ForBaba />
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
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
