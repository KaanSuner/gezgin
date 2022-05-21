import "./login.css";
// import Navbar from "../../components/navbar/Navbar";
import Topbar from "../../components/topbar/topbar";
import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-bootstrap";

export default function Login() {
  return (
    <>
    <Topbar/>
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
          <div className="loginBoxLogin">
            <input placeholder="Email" className="loginInputLogin"></input>
            <input placeholder="Parola" className="loginInputLogin"></input>
            <li className="loginButtonB"><Link to={"../accomodation"}>Giriş Yap</Link></li>
            <span className="loginForgot">Parolanı mı unuttun?</span>
            <li className="loginRegisterLogin"><Link to={"../register"}>Yeni bir hesap aç</Link></li>
          </div>
        </div>
      </div>
    </div>
    </>
);
}
