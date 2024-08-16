import React, { Component } from "react";
import "../src/assets/style.css";
import Header from "./assets/components/Header";
import FoodsContainer from "./assets/components/FoodsContainer";

export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodsContainer />
      </div>
    );
  }
}
