import "./ShareAcc.css";
import Navbar from "../../../../components/navbar/navbar.jsx";
import Footer from "../../../../components/footer/footer.jsx";
import { useState, useContext, useRef } from "react";
import { AuthContext } from "../../../../context/AuthContext.js";
import * as rdrLocales from "react-date-range/dist/locale";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

export default function ShareAcc() {
  const [openDate, setOpenDate] = useState(false);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
  const city = useRef();
  const price = useRef();
  const description = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const startDate = dateRange[0].startDate.toLocaleDateString("tr-TR");
    const endDate = dateRange[0].endDate.toLocaleDateString("tr-TR");
    const newAcc = {
      userId: user._id,
      username: user.username,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      city: city.current.value,
      price: price.current.value,
      bookingdate: startDate,
      leavingdate: endDate,
      maxperson: personNumber.adult,
      description: description.current.value,
      avatar: user.avatar,
    };
    try {
      await axios.post("/acc/create", newAcc);
      await axios.put("/acc/createMyAccOffer", newAcc);
      navigate("/Profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="shareAcc">
        <form className="shareAccContainer" onSubmit={handleClick}>
          <div className="shareAccContainerItem ">
            <div className="shareAccDate">
              <label className="accDateLabel">Hangi tarih aralığında?</label>
              <span
                className="shareAccRangeDatePicker"
                onClick={() => setOpenDate(!openDate)}
              >{`${dateRange[0].startDate.toLocaleDateString(
                "tr-TR"
              )} -> ${dateRange[0].endDate.toLocaleDateString("tr-TR")}`}</span>
              {openDate && (
                <DateRange
                  locale={rdrLocales.tr}
                  editableDateInputs={true}
                  onChange={(item) => setDateRange([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  className="accDateRangePicker"
                  rangeColors={["#42a72b"]}
                />
              )}
            </div>

            <div className="shareAccPersonNumber">
              <label className="accDateLabel">
                Paylaşıma açacagım kişi sayısı
              </label>
              <div className="shareAccPersonNumberOptions">
                <div className="shareAccPersonNumberOptionItem">
                  <span className="shareAccPersonNumberText">{`${personNumber.adult} Kişi`}</span>
                  <div className="numberCounter">
                    <button
                      className="shareAccPersonCounterButton"
                      onClick={() => handleNumber("adult", "i")}
                    >
                      +
                    </button>
                    <button
                      disabled={personNumber.adult <= 1}
                      className="shareAccPersonCounterButton"
                      onClick={() => handleNumber("adult", "d")}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="shareAccLocation">
              <label className="accDateLabel">Sen neredesin?</label>
              <input
                className="shareAccInputShare"
                placeholder="Antalya"
                required
                ref={city}
              ></input>
            </div>

            <div className="shareAccPrice">
              <label className="accDateLabel">
                Tek gecelik kişi başı istediğin ücret nedir?
              </label>
              <input
                className="shareAccInputShare"
                placeholder="200 ₺"
                required
                ref={price}
              ></input>
            </div>
          </div>

          <div className="shareAccContainerItem">
            <div className="shareAccdescription">
              <textarea
                className="shareAccInputTextArea "
                placeholder="Teklifin ile ilgili ek açıklamaları burada belirtmelisin."
                ref={description}
              ></textarea>
            </div>
            <button className="shareAccButton " type="submit">
              Teklifi Yayınla
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
