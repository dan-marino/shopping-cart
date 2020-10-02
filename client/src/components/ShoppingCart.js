import React from "react";
import total from "../lib/helpers";

function ShoppingCart({ cart, onCheckout }) {
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cart.map((product) => {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            );
          })}

          <tr>
            <td colspan="3" class="total">
              Total: ${total(cart)}
            </td>
          </tr>
        </table>
        <a class="button checkout" onClick={onCheckout}>
          Checkout
        </a>
      </div>
    );
  }
}

export default ShoppingCart;
