import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  handleName = value => {
    this.setState({ name: value });
  };

  handlePrice = value => {
    this.setState({ price: value });
  };

  handleImg = value => {
    this.setState({ imgurl: value });
  };

  handleClear = () => {
    this.setState({ name: "", price: 0, imgurl: "" });
    this.props.showProducts();
  };

  createProduct = () => {
    let { name, price, imgurl } = this.state;
    axios
      .post("/api/product", { name, price, imgurl })
      .then(() => this.handleClear());
  };

  render() {
    return (
      <div>
        <div className="form-card">
          <div className="form-input">
            <span>Name:</span>
            <input
              type="text"
              onChange={e => this.handleName(e.target.value)}
            />
            <span>Price:</span>
            <input
              type="text"
              onChange={e => this.handlePrice(e.target.value)}
            />
            <span>Image:</span>
            <input type="text" onChange={e => this.handleImg(e.target.value)} />
          </div>
          <br />
          <button className="form-button" onClick={this.createProduct}>
            Add
          </button>
          <button className="form-button" onClick={this.handleClear}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
