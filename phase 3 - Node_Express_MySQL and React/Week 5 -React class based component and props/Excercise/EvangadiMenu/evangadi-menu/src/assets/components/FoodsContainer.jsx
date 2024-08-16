import React, { Component } from "react";
import FoodItem from "./FoodItem";
import menus from "../data";

export default class FoodsContainer extends Component {
  render() {
    return (
      <div className="foods-container">
        {menus.map((menu, index) => {
          return (
            <FoodItem
              key={menu.id}
              // image={menu.img}
              // title={menu.title}
              // price={menu.price}
              // description={menu.desc}
              menuList={menu}
              //   we may pass {...menu}  and access the keys by destructuring as they are on the data in FoodItem components
            />
          );
        })}
      </div>
    );
  }
}
