import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import ToggleableForm from "./ToggleableForm";
import store from "../lib/store.js";

class App extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCart />
        </header>

        <main>
          <ProductList />
          <ToggleableForm />
        </main>
      </div>
    );
  }
}

export default App;
