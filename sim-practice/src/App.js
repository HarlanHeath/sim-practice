import React, { Component } from "react";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          name: "Car",
          price: 1000,
          imgurl: "thisimageofcar.com"
        },
        {
          name: "Boat",
          price: 2000,
          imgurl: "thisimageofboat.com"
        },
        {
          name: "Plane",
          price: 3000,
          imgurl: "thisimageofplane.com"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
