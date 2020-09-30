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
    fetch("/api/products", { mode: "cors" })
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
  }

  addToCart = (product) => {
    let cart = this.state.cart.slice();
    const index = cart.findIndex(
      (cartProduct) => cartProduct._id === product._id
    );
    const products = this.state.products.map((storeProduct) => {
      if (storeProduct._id === product._id) storeProduct.quantity -= 1;
      return storeProduct;
    });

    if (index >= 0) {
      product = cart[index];
      cart[index] = Object.assign({}, product, {
        quantity: product.quantity + 1,
      });
    } else {
      product = Object.assign({}, product, { quantity: 1 });
      cart = this.state.cart.concat(product);
    }

    this.setState({
      products,
      cart,
    });
  };

  handleCheckout = (e) => {
    e.preventDefault();
    this.setState({
      cart: [],
    });
  };

  handleAddClick = (product) => {
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((product) => {
        this.setState({
          products: this.state.products.concat(product),
        });
      });
  };

  handleEditClick = (updatedProduct, productId) => {
    fetch(`/api/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((product) => {
        const newProducts = this.state.products.map((prod) => {
          return prod._id === productId ? product : prod;
        });
        const newCart = this.state.cart.map((cartProd) => {
          if (cartProd._id === productId) {
            return Object.assign({}, product, { quantity: cartProd.quantity });
          } else {
            return cartProd;
          }
        });
        this.setState({
          products: newProducts,
          cart: newCart,
        });
      });
  };

  handleDeleteClick = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: "DELETE",
    }).then(() => {
      const newProducts = this.state.products.filter(
        (prod) => prod._id !== productId
      );
      this.setState({
        products: newProducts,
      });
    });
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCart
            cart={this.state.cart}
            onCheckout={this.handleCheckout}
          />
        </header>

        <main>
          <ProductList
            products={this.state.products}
            onCartClick={this.addToCart}
            onEditClick={this.handleEditClick}
            onDeleteClick={this.handleDeleteClick}
          />
          <ToggleableForm onAddClick={this.handleAddClick} />
        </main>
      </div>
    );
  }
}

export default App;
