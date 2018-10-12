import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
    let inventory = this.props.inventory.map((product, index) => {
      return (
        <div key={index} className="product-card">
          <p>{product.img}</p>
          <p>{product.price}</p>
          <p>{product.name}</p>
        </div>
      );
    });
    return (
      <div className="dashboard-body">
        <div className="product-display">{inventory}</div>
        <Product />
      </div>
    );
  }
}
