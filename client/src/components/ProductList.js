import React from "react";
import Product from "./Product";
import store from "../lib/store.js";

class ProductList extends React.Component {
  componentDidMount() {
    fetch("/api/products", { mode: "cors" })
      .then((response) => response.json())
      .then((products) => {
        store.dispatch({
          type: 'RECEIVE_ALL_PRODUCTS',
          payload: { products }
        })
      });
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {store.getState().products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
