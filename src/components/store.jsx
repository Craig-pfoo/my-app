import React, { Component } from "react";
import { getProducts } from "../ItemsData";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import StoreTable from "./storeTable";
import ProductGroup from "./common/storeGroup";
import _ from "lodash";

class Store extends Component {
  state = {
    products: [],
    cartItems: [],
    currentPage: 1,
    pageSize: 3,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    const products = [{ id: "", name: "All Products" }, ...getProducts()];

    this.setState({ products, cartItems: [] });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleProductSelect = (product) => {
    this.setState({ selectedProduct: product, currentPage: 1 });
  };

  handleItemAddToCart = (selectedProduct) => {
    const { cartItems } = this.state;
    const existingCartItem = cartItems.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      this.setState({ cartItems: updatedCartItems });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...selectedProduct, quantity: 1 }],
      });
    }
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.products;
    const {
      currentPage,
      pageSize,
      sortColumn,
      selectedProduct,
      products: allProducts,
      cartItems,
    } = this.state;

    const filtered =
      selectedProduct && selectedProduct.id
        ? allProducts.filter((p) => p.name === selectedProduct.name)
        : allProducts;

    const filteredAll = filtered.filter((p) => p.name !== "All Products");

    if (count === 0) return <p>There are no products available.</p>;

    const sorted = _.orderBy(
      filteredAll,
      [sortColumn.path],
      [sortColumn.order]
    );

    const productsPaginated = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ProductGroup
            items={allProducts}
            textProperty="name"
            valueProperty="price"
            selectedItem={selectedProduct}
            onItemSelect={this.handleProductSelect}
          />
        </div>
        <div className="col">
          <p>There are {filteredAll.length} products in the table.</p>
          <StoreTable
            products={productsPaginated}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onAdd={this.handleItemAddToCart}
          />
          <Pagination
            itemCount={filteredAll.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
          <Link to="/cart" className="btn btn-success">
            Checkout ({cartItems.length})
          </Link>
        </div>
      </div>
    );
  }
}

export default Store;
