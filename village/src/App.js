import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import NavigationBar from "./components/NavigationBar";
import axios from "axios";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    const url = "http://localhost:3333/smurfs";
    axios
      .get(url)
      .then(res => this.updateSmurfList(res.data))
      .catch(err => console.log("App Get Error: ", err));
  };

  updateSmurfList = smurfs => {
    this.setState({ smurfs });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} updateSmurfList={this.updateSmurfList} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
