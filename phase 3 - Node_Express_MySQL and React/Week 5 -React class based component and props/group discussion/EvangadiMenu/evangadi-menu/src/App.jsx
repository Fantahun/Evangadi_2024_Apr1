import React, { Component } from "react";
import "../src/assets/style.css";
import Header from "./components/Header";
import FoodList from "./components/FoodList";

export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodList />
      </div>
    );
  }
}
