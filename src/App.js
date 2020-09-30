import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import { Route, Link, Switch } from "react-router-dom";
import data from "./data";

export default function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Nick's Trinkets</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>
      {/* Rendered by Route components 👇 */}
      <Switch>
        <Route path="/shop/:itemId/valueterm/:moreInfo">
          <Item items={products} />
        </Route>
        <Route path="/shop/:itemId">
          <Item items={products} />
        </Route>
        <Route
          path="/shop"
          render={(props) => <Shop history={props.history} items={products} />}
        />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
