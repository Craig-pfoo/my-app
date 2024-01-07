import React, { Component } from "react";
import Table from "./table";

class CartTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "description", label: "Description" },
    { path: "price", label: "Price" },
    { path: "quantity", label: "Quantity" },
    { path: "image", label: "Image" },
  ];
  render() {
    const { products, onSort, sortColumn } = this.props;
    console.log("Products", products);
    return (
      <Table
        columns={this.columns}
        data={products}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CartTable;
