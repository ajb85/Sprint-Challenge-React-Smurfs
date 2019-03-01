import React, { Component } from "react";
import axios from "axios";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const { name, age, height } = this.state;
    // add code to create the smurf using the api

    // Add new smurf to database if all three forms are filled out
    if (name && age && height) {
      const url = "http://localhost:3333/smurfs";
      axios
        .post(url, { name, age, height })
        .then(res => this.props.updateSmurfList(res.data))
        .catch(err => console.log("Form Post Error", err));

      // Re-populate state in api with new smurf list

      // Clear state and forms
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    } else {
      // Otherwise throw an error
      alert("You smurfed your form!  All three forms are smurfing needed!");
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
