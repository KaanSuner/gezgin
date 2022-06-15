import "./ShareTravel.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import { useState, useContext, useRef } from "react";
import { AuthContext } from "../../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as rdrLocales from "react-date-range/dist/locale";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ShareAcc() {
  const [date, setDate] = useState(new Date());
  const [personNumber, setPersonNumber] = useState({
    adult: 1,
  });

  const handleNumber = (name, operation) => {
    setPersonNumber((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? personNumber[name] + 1 : personNumber[name] - 1,
      };
    });
  };
  const { user } = useContext(AuthContext);
  const departureCity = useRef();
  const arrivalCity = useRef();
  const price = useRef();
  const departureTime = useRef();
  const arrivalTime = useRef();
  const description = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const newTravel = {
      userId: user._id,
      username: user.username,
      departureCity: departureCity.current.value,
      arrivalCity: arrivalCity.current.value,
      price: price.current.value,
      departureTime: departureTime.current.value,
      arrivalTime: arrivalTime.current.value,
      maxperson: personNumber.adult,
      emptySeats:personNumber.adult,
      description: description.current.value,
      departureDate: date,
    };
    try {
      await axios.post("/travel/create", newTravel);
      navigate("/Profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="shareTravel">
        <form className="shareTravelContainer" onSubmit={handleClick}>

          <div className="shareTravelContainerItem ">
            <div className="shareTravelDeparture">
              <label className="travelDepartureLabel">
                Nereden yola çıkacaksın?
              </label>
              <input
                className="shareTravelInputShare"
                placeholder="Antalya"
                required
                ref={departureCity}
              ></input>
            </div>

            <div className="shareTravelDestination">
              <label className="travelDepartureLabel">Nereye gideceksin?</label>
              <input
                className="shareTravelInputShare"
                placeholder="İstanbul"
                required
                ref={arrivalCity}
              ></input>
            </div>

            <div className="shareTravelDepartureDate">
              <label className="travelDepartureLabel">Hangi tarihte?</label>
              <DatePicker
                className="shareTraveldate-picker "
                placeholderText="--/--/----"
                selected={date}
                onChange={(date) => setDate(date)}
                locale={rdrLocales.tr}
              />
            </div>

            <div className="shareTravelPersonNumber">
              <label className="travelDepartureLabel">
                Paylaşıma açacagım kişi sayısı
              </label>
              <div className="shareTravelPersonNumberOptions">
                <div className="shareTravelpersonNumberOptionItem">
                  <span className="shareTravelPersonNumberText">{`${personNumber.adult} Kişi`}</span>
                  <div className="numberCounter">
                    <button
                      className="shareTravelPersonCounterButton"
                      onClick={() => handleNumber("adult", "i")}
                    >
                      +
                    </button>
                    <button
                      disabled={personNumber.adult <= 1}
                      className="shareTravelPersonCounterButton"
                      onClick={() => handleNumber("adult", "d")}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shareTravelPrice">
              <label className="travelDepartureLabel">
                Kişi başına talep ettiğin ücret nedir?
              </label>
              <input
                className="shareTravelInputShare"
                placeholder="100 ₺"
                required
                ref={price}
              ></input>
            </div>
          </div>


          <div className="shareTravelContainerItem">
            <div className="shareTravelDepartureTime">
              <ion-icon
                size="large"
                className="iconShare"
                name="time-outline"
              ></ion-icon>
              <input
                className="shareTravelInputShare"
                placeholder="08.30"
                required
                ref={departureTime}
              ></input>
            </div>

            <div className="shareTravelDestinationTime">
              <ion-icon
                size="large"
                className="iconShare"
                name="time-outline"
              ></ion-icon>
              <input
                className="shareTravelInputShare "
                placeholder="12.30"
                required
                ref={arrivalTime}
              ></input>
            </div>
            <div className="shareTraveldescription">
              <textarea
                className="shareTravelInputTextArea "
                placeholder="Teklifin ile ilgili ek açıklamaları burada belirtmelisin."
                ref={description}
              ></textarea>
            </div>
            <button className="shareTravelButton" type="submit">
              Teklifi Yayınla
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
