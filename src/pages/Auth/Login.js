import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../context/auth/authContext";
import { useData } from "../../context/data/videoContext";
export function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { token, loginUser } = useAuth();
  const { setLoader } = useData();
  useEffect(() => {
    (async () => {
      loginUser(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);

  if (token) {
    setLoader(true);
    setTimeout(() => {
      navigate("/");
      setLoader(false);
    }, 1000);
  }

  const loginHandler = () => {
    setLoginForm((form) => ({
      ...form,
      email: "mramandeepsinha@gmail.com",
      password: "Abc@123",
    }));
  };

  return (
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <div className="auth-title">
          <h2 className="text-center">Login</h2>
        </div>
        <form className="auth-main" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-email">
            <label htmlFor="mail">Email Address</label>
            <input
              placeholder="test@gmail.com"
              className="text-input"
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((form) => ({ ...form, email: e.target.value }))
              }
              required
            />
          </div>

          <div className="auth-pwd">
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="***********"
              className="pwd-input"
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((form) => ({ ...form, password: e.target.value }))
              }
              required
            />
          </div>

          <div className="auth-primary-btn text-center" onClick={() => loginHandler()}>
            Login with Test Credentials
          </div>

          <Link to="/signup">
            <div className="auth-secondary-btn text-center">
              Create New Account
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}