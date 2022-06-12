import "./SearchAcc.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from "react-date-range/dist/locale";

const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
        <h1 className="lstTitle">Kendine uygun konaklama teklifi bul</h1>

        <div className="listItem">
          <label>Nerede arıyorsun?</label>
          <input type="text" />
        </div>

        <div className="listItem">
          <label>Hangi tarihlerde konaklayacaksın?</label>
          <span onClick={() => setOpenDate(!openDate)}>{`${format(
            date[0].startDate,
            "dd/MM/yyyy"
          )} -> ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
          {openDate && (
            <DateRange
              locale={rdrLocales.tr}
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              rangeColors={["#febb02"]}
            />
          )}
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
