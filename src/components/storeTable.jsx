import React, { Component } from "react";
import Table from "./common/table";

class StoreTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "description", label: "Description" },
    { path: "price", label: "Price" },
    { path: "quantity", label: "Quantity" },
    { path: "image", label: "Image" },
    {
      key: "Add",
      content: (product) => (
        <button
          onClick={() => this.props.onAdd(product)}
          className="btn btn-warning"
        >
          Add
        </button>
      ),
    },
  ];
  render() {
    const { products, onSort, sortColumn } = this.props;
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

export default StoreTable;
