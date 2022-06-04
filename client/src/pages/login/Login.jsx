import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import More from "../../components/more/more";
import Footer from "../../components/footer/footer";
import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
  
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("email");
  };

  return (
    <>
      <Navbar />
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
            <form className="loginBoxLogin" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                className="loginInputLogin"
                ref={email}
                required
              ></input>
              <input
                placeholder="Parola"
                type="password"
                className="loginInputLogin"
                ref={password}
                required
              ></input>
              <button className="loginButtonB"> Giriş yap</button>
              <span className="loginForgot">Parolanı mı unuttun?</span>
              <button className="loginRegisterLogin"> Kayıt ol</button>
            </form>
          </div>
        </div>
      </div>
      <Hero />
      <More />
      <Footer />
    </>
  );
}
