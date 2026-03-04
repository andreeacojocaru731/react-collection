import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import Style from "./login.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.length > 8 && password.length > 16) {
      const fakeAuthResponse = {
        token: "fake-jwt-token",
        role: "user",
      };
      localStorage.setItem("token", fakeAuthResponse.token);
      localStorage.setItem("role", fakeAuthResponse.role);
      navigate("/");
    }
  };

  return (
    <div className={cx(Style.loginPage)}>
      <div className={cx(Style.loginCard)}>
        <h2 className={cx(Style.loginTitle)}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={cx(Style.username)}>
            <label className={cx(Style.loginLabel)} htmlFor="username">
              Username
            </label>
            <input
              className={cx(Style.loginInput)}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className={cx(Style.password)}>
            <label className={cx(Style.loginLabel)} htmlFor="password">
              Password
            </label>
            <input
              className={cx(Style.loginInput)}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className={cx(Style.buttonGroup)}>
            <button className={cx(Style.loginButton)} type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
