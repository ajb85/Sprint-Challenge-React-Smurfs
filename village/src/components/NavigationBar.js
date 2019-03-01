import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const activeStyles = { textDecoration: "none" };
  const styles = { color: "#000" };
  const divStyle = {
    width: "150px",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto"
  };

  return (
    <div style={divStyle}>
      <NavLink exact to="/" activeStyle={activeStyles} style={styles}>
        Home
      </NavLink>
      <NavLink to="/smurf-form" activeStyle={activeStyles} style={styles}>
        Add Smurfs!
      </NavLink>
    </div>
  );
}
