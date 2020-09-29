import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import ToggleableForm from "./ToggleableForm";

class App extends React.Component {
  state = {
    products: [],
    cart: [],
  };

  componentDidMount() {
    fetch("/api/products", {mode: 'cors'})
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  addToCart = (product) => {
    let cart = this.state.cart.slice();
    const index = cart.findIndex(cartProduct => cartProduct.id === product.id);
    const products = this.state.products.map(storeProduct => {
      if (storeProduct.id === product.id) storeProduct.quantity -= 1;
      return storeProduct;
    });

    if (index >= 0) {
      product = cart[index];
      cart[index] = Object.assign({}, product, {quantity: product.quantity + 1});
    } else {
      product = Object.assign({}, product, {quantity: 1});
      cart = this.state.cart.concat(product);
    }

    this.setState({
      products,
      cart,
    });
  }

  handleCheckout = (e) => {
    e.preventDefault();
    this.setState({
      cart: [],
    });
  }

  handleAddClick = (product) => {
    fetch("/api/products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product),
    }).then(response => response.json())
      .then(product => {
        this.setState({
          products: this.state.products.concat(product),
        });
      });
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCart cart={this.state.cart} onCheckout={this.handleCheckout} />
        </header>

        <main>
          <ProductList products={this.state.products} onCartClick={this.addToCart} />
          <ToggleableForm onAddClick={this.handleAddClick} />
        </main>
      </div>
    );
  }
}

export default App;
