import React from 'react';
import {  Link } from "react-router-dom";
const navBar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Dogs</Link>
    </li>
    <li>
      <Link to="/cards">Cats</Link>
    </li>
    <li>
      <Link to="/sets">Sheeps</Link>
    </li>
    <li>
      <Link to="/goats">Goats</Link>
    </li>
  </div>
  );
}
export default navBar;