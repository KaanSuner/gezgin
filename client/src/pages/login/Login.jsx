import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Gezgin</h3>
          <span className="loginDesc">
            Gezgine hoşgeldin. Gezgin seni ekonomik seyahat ve konaklama hizmeti
            veren diğer kullanıcılar ile tanıştırıyor. Üstelik sende hizmet
            verebilirsin.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput"></input>
            <input placeholder="Parola" className="loginInput"></input>
            <button className="loginButton">Giriş yap</button>
            <span className="loginForgot">Parolanı mı unuttun?</span>
            <li className="loginRegister"><Link to={"../register"}>Yeni bir hesap aç</Link></li>
            <button className="loginRegister">Yeni bir hesap aç</button>
          </div>
        </div>
      </div>
    </div>
    </>
);
}
