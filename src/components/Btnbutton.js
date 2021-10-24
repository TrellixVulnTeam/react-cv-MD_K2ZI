import React from "react";
import { NavLink } from "react-router-dom";
const Btnbutton = props => {
  return (
    <div>
      {props.left && <NavLink to={props.left}>&#10092;</NavLink>}
      <p>SCROLL</p>
      {props.right && <NavLink to={props.right}>&#10093;</NavLink>}
    </div>
  );
};

export default Btnbutton;
