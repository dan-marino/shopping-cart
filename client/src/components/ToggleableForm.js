import React from "react";
import ProductForm from "./ProductForm.js";

class ToggleableForm extends React.Component {
  state = {
    isOpen: false,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleCartClick = (e) => {
    e.preventDefault();
    this.props.onCartClick(this.props.product);
  }

  render() {
    if (this.state.isOpen) {
      return <ProductForm product={this.props.product} onCancelClick={this.handleClick} onAddClick={this.props.onAddClick} />;
    } else {
      if (this.props.product?.quantity === 0) {
        return (
          // refactor below:
          <div className="actions product-actions">
            {this.props.product ? <a className="butt1on disabled">Add to Cart</a> : null}
            <a className="button" onClick={this.handleClick}>{this.props.product ? "Edit" : "Add a Product"}</a>
          </div>
        );
      } else {
        return (
          <div className="actions product-actions">
            {this.props.product ? <a className="button" onClick={this.handleCartClick}>Add to Cart</a> : null}
            <a className="button" onClick={this.handleClick}>{this.props.product ? "Edit" : "Add a Product"}</a>
          </div>
        );
      }
    }
  }
}

export default ToggleableForm;