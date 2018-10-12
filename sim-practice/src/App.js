import React, { Component } from "react";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      console.log(res);
      this.setState({ inventory: res.data });
    });
  }

  showProducts = () => {
    axios.get("/api/inventory").then(res => {
      console.log(res);
      this.setState({ inventory: res.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="dashboard-split">
          <div className="dashboard-inventory">
            <Dashboard inventory={this.state.inventory} />
          </div>
          <br />
          <Form showProducts={this.showProducts} />
        </div>
      </div>
    );
  }
}

export default App;
