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
