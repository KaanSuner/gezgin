import "./SearchTravel.css";
import { useState } from "react";
import * as rdrLocales from "react-date-range/dist/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const Search = () => {
const Search = () => {
  /* const [openDate, setOpenDate] = useState(false); */
  const [date, setDate] = useState(new Date());

  const [openPersonNumber, setOpenPersonNumber] = useState(false);
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

  return (
    <div>
      <div className="listSearch">
        <h1 className="lstTitle">Kendine uygun seyahat teklifi bul</h1>

        <div className="listItem">
          <label>Nereden?</label>
          <input type="text" />
        </div>

        <div className="listItem">
          <label>Nereye?</label>
          <input type="text" />
        </div>

        <div className="listItem">
          <label>Hangi tarihte?</label>
          <span>
            <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)} 
            locale={rdrLocales.tr}
            />
          </span>
        </div>

        <div className="listItem">
          <label>Kişi Sayısı</label>
          <span
            onClick={() => setOpenPersonNumber(!openPersonNumber)}
            className="personNumber"
          >{`${personNumber.adult} kişi`}</span>
          {openPersonNumber && (
            <div className="personNumberOptions">
              <div className="personNumberOptionItem">
                <span className="personNumberText">Yetişkin</span>
                <div className="numberCounter">
                  <button
                    disabled={personNumber.adult <= 1}
                    className="personCounterButton"
                    onClick={() => handleNumber("adult", "d")}
                  >
                    -
                  </button>
                  <span className="personCounterNumber">{personNumber.adult}</span>
                  <button
                    className="personCounterButton"
                    onClick={() => handleNumber("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="listItem">
          <button className="searchButton">Ara</button>
        </div>
      </div>
    </div>
  );
};
export default Search;
