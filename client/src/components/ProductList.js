import React from "react";
import Product from "./Product";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {this.props.products.map((product) => {
          return (
            <Product
              key={product._id}
              product={product}
              onDeleteClick={this.props.deleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
