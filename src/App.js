import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Store from "./components/store";
import Cart from "./components/cart";
import NavBar from "./components/common/navBar";

class Apps extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/store" component={Store}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Redirect path="/" exact to="/store"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Apps;
