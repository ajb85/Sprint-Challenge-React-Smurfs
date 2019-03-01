import React from "react";
import axios from "axios";

const Smurf = props => {
  function deleteSmurf() {
    const url = `http://localhost:3333/smurfs/${props.id}`;
    axios
      .delete(url)
      .then(res => props.updateSmurfList(res.data))
      .catch(err => console.log("Smurf Delete Error", err));
  }
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => deleteSmurf()}>Smurf {props.name}</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
