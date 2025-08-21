import React from "react";

const Login = () => {
  return (
    <form className="login__form">
      <label htmlFor="userName">Username</label>
      <input id="userName" />
      <label htmlFor="userPassword">Password</label>
      <input id="userPassword" />
      <button>Login</button>
    </form>
  );
};

export default Login;
