import React from "react";
import { Link, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Hello from "./Hello";
const Category = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:id`}
        render={({ match }) => (
          <div>
            <h3> {match.params.id} </h3>
          </div>
        )}
      />
    </div>
  );
};
export default Category;
