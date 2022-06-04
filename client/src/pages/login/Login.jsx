import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import More from "../../components/more/more";
import Footer from "../../components/footer/footer";
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
          <div className="loginBoxLogin">
            <input placeholder="Email" className="loginInputLogin"></input>
            <input placeholder="Parola" className="loginInputLogin"></input>
            <li className="loginButtonB"><Link to={"../TravelOrAccomodation"}>Giriş Yap</Link></li>
            <span className="loginForgot"><Link to={"../"}>Parolanı mı unuttun?</Link></span>
            <li className="loginRegisterLogin"><Link to={"../register"}>Yeni bir hesap aç</Link></li>
          </div>
        </div>
      </div>
    </div>
    <Hero/>
    <More/>
    <Footer/>
    </>
);
}
