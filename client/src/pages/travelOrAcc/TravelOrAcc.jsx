import "./TravelOrAcc.css";
import Navbar from "../../components/navbar/navbar.jsx";
import Hero from "../../components/Hero/Hero";
import More from "../../components/more/more";
import Footer from "../../components/footer/footer";
import React from "react";
import { useNavigate } from "react-router-dom";
import home from "./home.png";
import car from "./car.png";

export default function Login() {
  const navigate = useNavigate();
  const handleClick1 = () => navigate("/accomodation");
  const handleClick2 = () => navigate("/travel");

  return (
    <>  
      <Navbar type="travelOrAcc" />
      <div className="TravelorAcc">
        <div className="TravelorAccWrapper">
          <div className="AccCard">
            <div className="OptionCard" onClick={handleClick1}>
              <img src={home} className="OptionImage" alt="" />
              <h5 className="OptionCardText">Konaklama</h5>
            </div>
          </div>
          <div className="TravelCard">
            <div className="OptionCard" onClick={handleClick2}>
              <img src={car} className="OptionImage" alt="" />
              <h5 className="OptionCardText">Seyahat</h5>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <More />
      <Footer />
    </>
  );
}
