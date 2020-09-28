import React from "react";

function ShoppingCart({ products, cart }) {
  if (Object.keys(cart).length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div>
    );
  } else {
    const productsArray = Object.keys(cart).map((id) =>
      products.find((prod) => prod.id === +id)
    );

    const total = productsArray.reduce((total, product) => {
      return (total += product.price * cart[product.id]);
    }, 0);
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {productsArray.map((product) => {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{cart[product.id]}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}

          <tr>
            <td colspan="3" class="total">
              Total: ${total}
            </td>
          </tr>
        </table>
        <a class="button checkout">Checkout</a>
      </div>
    );
  }
}

export default ShoppingCart;
