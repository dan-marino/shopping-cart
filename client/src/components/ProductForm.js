import React from "react";

class ProductForm extends React.Component {
  state = {
    title: '',
    price: '',
    quantity: '',
  }

  componentDidMount() {
    if (this.props.product) {
      const { title, price, quantity } = this.props.product;
      this.setState({ title, price, quantity });
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    if (this.props.product) {
      // update
    } else {
      this.props.onAddClick(this.state);
    }
  }

  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="edit-form">
        <h3>{this.props.product ? "Edit Product" : "Add Product"}</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" name="title" value={this.state.title} onChange={this.onInputChange} />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" name="price" value={this.state.price} onChange={this.onInputChange} />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" name="quantity" value={this.state.quantity} onChange={this.onInputChange} />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleClick}>{this.props.product ? "Update" : "Add"}</a>
            <a className="button" onClick={this.props.onCancelClick}>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
