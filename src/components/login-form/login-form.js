import React, { useState } from "react";
import "./login-form.scss";

function LoginForm(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const user = {
      email: userEmail,
      password: userPassword,
    };
    const response = await fetch(
      "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      }
    );
    const result = await response.json();
    localStorage.setItem('accessToken', result.access_token);
    props.toggleUserStatus();

    setTimeout(() => {
      props.togglePopup("login");
    }, 2000);
  };

  return (
    <form className="login d-flex flex-column">
      <input
        type="email"
        placeholder="Email"
        className="login__input"
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="login__input"
        onChange={(e) => setUserPassword(e.target.value)}
        required
      />
      <div className="d-flex  justify-between">
        <button type="button" className="btn-accent" onClick={(e) => login(e)}>
          Ok
        </button>
        <button className="btn-main" onClick={() => props.togglePopup("login")}>
          Cancel
        </button>
      </div>
      {props.isUserLogined && (
        <span className="login__notification base-heading-sm">
          Welcome back!
        </span>
      )}
    </form>
  );
}

export default LoginForm;
