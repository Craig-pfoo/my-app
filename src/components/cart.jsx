import React, { Component } from "react";
import CartTable from "./common/cartTable";

class Cart extends Component {
  handleOrderCheckout = () => {
    alert("Order has been submitted");
  };
  render() {
    const { cartItems } = this.props.location.state || { cartItems: [] };
    return (
      <div>
        <h2>Shopping Cart</h2>
        <CartTable products={cartItems} />
        <button className="btn btn-success" onClick={this.handleOrderCheckout}>
          Checkout
        </button>
      </div>
    );
  }
}

export default Cart;
