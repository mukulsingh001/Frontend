import React from "react";

const SignUp = () => {
  return (
    <form className="login__form">
      <label htmlFor="firstName">FirstName</label>
      <input id="firstName" />
      <label htmlFor="lastName">lastName</label>
      <input id="lastName" />
      <label htmlFor="password">Password</label>
      <input id="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" />
      <button>Signup</button>
    </form>
  );
};

export default SignUp;
