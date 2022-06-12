import "./login.css";
import Hero from "../../components/Hero/Hero";
import More from "../../components/more/more";
import Footer from "../../components/footer/footer";
import React from "react";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              ></input>
              <input
                placeholder="Parola"
                type="password"
                className="loginInput"
                ref={password}
                required
                minLength="6"
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

              <button className="loginRegisterButton" onClick={handleClick2}>
                {isFetching ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : (
                  "Kayıt ol"
                )}
              </button>

              <Link to={"./forgotPassword"} className="loginForgot">
                <span >Parolanı mı unuttun?</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
