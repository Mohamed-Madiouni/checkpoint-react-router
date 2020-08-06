import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Login = ({location,auth}) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    setRedirectToReferrer(true);
    auth(true)
  };
 

  const { from } = location.state;

  if (redirectToReferrer) {
    return <Redirect to={from.pathname} />;
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname} </p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
// export const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
// };
