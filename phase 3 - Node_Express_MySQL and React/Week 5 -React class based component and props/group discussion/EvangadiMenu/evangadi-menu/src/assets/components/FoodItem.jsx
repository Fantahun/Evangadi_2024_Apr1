import React, { Component } from "react";

export default class FoodItem extends Component {
  render() {
    const { image, title, price, description } = this.props;
    if (!title || !description) return null;
    return (
      <div className="single-food">
        <div className="img">
          <img src={image} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="desc-btn-holder">
          <div className="food-desc">
            {String(description).substring(0, 240) + " . . ."}
          </div>
          <div className="btn-holder">
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    );
  }
}
