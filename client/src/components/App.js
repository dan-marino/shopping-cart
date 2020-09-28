import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import products from "../lib/data";

class App extends React.Component {
  state = {
    products: [],
    cart: {},
  };

  componentDidMount() {
    this.setState( { products })
    this.setState({ cart: { 1: 2, 2: 1 } }); 
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCart products={this.state.products} cart={this.state.cart} />
        </header>

        <main>
          <ProductList products={this.state.products} />
          <AddProductForm />
        </main>
      </div>
    );
  }
}

export default App;
