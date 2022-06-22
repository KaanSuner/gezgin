import "./login.css";
import React from "react";
import { useRef, useContext } from "react";
import { loginCall } from "../../context/apiCalls.js";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [credentials, setCridentials] = useState({
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCridentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(credentials, dispatch);
  };


  const handleClick2 = () => navigate("/register");

  console.log(user);
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Gezgin</h3>
            <span className="loginDesc">
              Gezgine hoşgeldin. Gezgin seni ekonomik seyahat ve konaklama
              hizmeti veren diğer kullanıcılar ile tanıştırıyor. Üstelik sende
              hizmet verebilirsin.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                className="loginInput"
                ref={email}
                required
                id="email"
                onChange={handleChange}
              ></input>
              <input
                placeholder="Parola"
                type="password"
                className="loginInput"
                ref={password}
                required
                minLength="6"
                id="password"
                onChange={handleChange}
              ></input>

              <button
                className="loginButton"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Giriş Yap"
                )}
              </button>

              {error && <span>{error.message}</span>}

              <button className="loginRegisterButton" onClick={handleClick2}>
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Kayıt ol"
                )}
              </button>

              <Link to={"./forgotPassword"} className="loginForgot">
                <span>Parolanı mı unuttun?</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
