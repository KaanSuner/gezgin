import "./acc.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import SearchResults from "../../../components/SearchResults/Accomodation/searchResultAcc.jsx";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from "react-date-range/dist/locale";
import useFetch from "../../../hooks/useFetch";

const List = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [city, setCity] = useState("");
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

  const handleClick = () => {
    reFetch();
  };

  const { data, loading, error, reFetch } = useFetch(
    `/acc/?City=${city}&bookingDate=${format(
      date[0].startDate,
      "yyyy-MM-dd"
    )}&leavingDate=${format(date[0].endDate, "yyyy-MM-dd")}`
  );

  return (
    <div>
      <Navbar type="accomodation" />
      <div className="listAccContainer">
        <div className="listAccWrapper">
          <div className="listAccResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchResults item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
          <div className="listAccSearch">
            <h1 className="lstAccTitle">Kendine uygun konaklama teklifi bul</h1>

            <div className="listAccItem">
              <label>Nerede arıyorsun?</label>
              <input placeholder="İstanbul" type="text" onChange={(e)=>setCity(e.target.value)} />
            </div>

            <div className="listAccItem">
              <label>Hangi tarihlerde konaklayacaksın?</label>
              <span>{`${format(date[0].startDate, "dd/MM/yyyy")} -> ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              <DateRange
                locale={rdrLocales.tr}
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="accDate"
                rangeColors={["#42a72b"]}
              />
            </div>

            <div className="listAccItem">
              <label>Kişi Sayısı</label>
              <span
                onClick={() => setOpenPersonNumber(!openPersonNumber)}
                className="accPersonNumber"
              >{`${personNumber.adult} kişi`}</span>
              {openPersonNumber && (
                <div className="accPersonNumberOptions">
                  <div className="accPersonNumberOptionItem">
                    <span className="accPersonNumberText">Yetişkin</span>
                    <div className="accNumberCounter">
                      <button
                        disabled={personNumber.adult <= 1}
                        className="accPersonCounterButton"
                        onClick={() => handleNumber("adult", "d")}
                      >
                        -
                      </button>
                      <span className="accPersonCounterNumber">
                        {personNumber.adult}
                      </span>
                      <button
                        className="accPersonCounterButton"
                        onClick={() => handleNumber("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="listAccItem">
              <button className="accSearchButton" onClick={handleClick}>Ara</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
