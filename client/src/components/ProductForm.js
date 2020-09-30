import React from "react";

class ProductForm extends React.Component {
  state = {
    title: "",
    price: "",
    quantity: "",
    fieldErrors: [],
  };

  componentDidMount() {
    if (this.props.product) {
      const { title, price, quantity } = this.props.product;
      this.setState({ title, price, quantity });
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    const fieldErrors = this.validate(this.state);
    this.setState({ fieldErrors });

    if (Object.keys(fieldErrors).length) return;

    if (this.props.product) {
      this.props.onEditClick(this.state, this.props.product._id);
    } else {
      this.props.onAddClick(this.state);
    }
    this.props.toggleForm();
  };

  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  validate = (product) => {
    const errors = {};
    if (!product.title || product.title.length < 4)
      errors.title = "Title required";
    if (!/^\d+\.?\d{0,2}$/.test(product.price))
      errors.price = "Please enter valid price";
    if (!/^\d+$/.test(product.quantity))
      errors.quantity = "Please enter valid quantity";

    return errors;
  };

  render() {
    return (
      <div className="edit-form">
        <h3>{this.props.product ? "Edit Product" : "Add Product"}</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              name="title"
              value={this.state.title}
              onChange={this.onInputChange}
            />{" "}
            <span style={{ color: "red" }}>{this.state.fieldErrors.title}</span>
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              name="price"
              value={this.state.price}
              onChange={this.onInputChange}
            />
            <span style={{ color: "red" }}>{this.state.fieldErrors.price}</span>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.onInputChange}
            />
            <span style={{ color: "red" }}>
              {this.state.fieldErrors.quantity}
            </span>
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleClick}>
              {this.props.product ? "Update" : "Add"}
            </a>
            <a className="button" onClick={this.props.toggleForm}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
