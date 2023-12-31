import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Asasets/user.svg";
import email_icon from "../Asasets/mail.svg";
import password_icon from "../Asasets/lock.svg";

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>

        {action === "Sign Up" ? (
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Repeat password" />
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Passward? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div className="submit-button">{action}</div>
      </div>

      <div className="choice-container">
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div
            className={action === "Login" ? "choice gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
        )}

        {action === "Login" ? (
          <div></div>
        ) : (
          <div
            className={action === "Sign Up" ? "choice gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};
