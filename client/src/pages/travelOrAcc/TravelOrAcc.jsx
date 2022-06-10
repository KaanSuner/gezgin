import "./TravelOrAcc.css";
import Navbar from "../../components/navbar/navbar.jsx";
import Hero from "../../components/Hero/Hero";
import More from "../../components/more/more";
import Footer from "../../components/footer/footer";
import React from "react";
import { Link } from "react-router-dom";
import home from "./home.png";
import car from "./car.png";

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <Link to={"../accomodation"}>
            <div className="card OptionCard">
            <img src={home} className="OptionImage" alt="" />
            <div className="card-body">
                <h5 className="card-title option-text">Konaklama Bul</h5>
                <p className="card-text option-text">Kriterlerine göre en uygun konaklama teklifini bul</p>
            </div>
            </div>
            </Link>
        </div>
        <div className="loginRight">
        <Link to={"../travel"}>
        <div className="card OptionCard">
            <img src={car} className="OptionImage" alt="" />
            <div className="card-body">
                <h5 className="card-title option-text">Seyahat Bul</h5>
                <p className="card-text option-text ">Kriterlerine göre en uygun seyahat teklifini bul</p>
            </div>
            </div>
            </Link>
        </div>
      </div>
    </div>
    <Hero/>
    <More/>
    <Footer/>
    </>
);
}
