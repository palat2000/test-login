import { useState, useContext } from "react";
import "./Login.css";
import { LoginContext } from "../context/LoginContextProvider";

function Login() {
  const {
    username,
    password,
    handleChangeUsername,
    handleChangePassword,
    handleSubmit,
    isUsed,
  } = useContext(LoginContext);
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />
        {isUsed?.userWrong ? (
          <p style={{ color: "red" }}>Invalid Username or Password</p>
        ) : (
          ""
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
