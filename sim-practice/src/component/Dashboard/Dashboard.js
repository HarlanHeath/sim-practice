import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
    let inventory = this.props.inventory.map((product, index) => {
      return (
        <div key={index}>
          <p>{product.img}</p>
          <p>{product.price}</p>
          <p>{product.name}</p>
        </div>
      );
    });
    return (
      <div>
        <p>Dashboard</p>
        <div>{inventory}</div>
        <Product />
      </div>
    );
  }
}
