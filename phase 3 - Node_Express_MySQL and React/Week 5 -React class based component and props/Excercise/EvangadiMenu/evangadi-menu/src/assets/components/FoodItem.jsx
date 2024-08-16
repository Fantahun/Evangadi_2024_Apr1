import React, { Component } from "react";

export default class FoodItem extends Component {
  render() {
    // const { image, title, price, description } = this.props; // if you pass the values as they are on the parent component
    const { img, title, price, desc } = this.props.menuList;

    // if (!title || !desc) return null;  // better to use &&
    return (
      <div className="single-food">
       {img && <div className="img">
          <img src={img} />
        </div>}
       { title && price && <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>}
     { desc &&  <div className="desc-btn-holder">
          <div className="food-desc">
            {String(desc).substring(0, 240) + " . . ."}
          </div>
          <div className="btn-holder">
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
