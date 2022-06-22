import "./acc.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import SearchResults from "../../../components/SearchResults/Accomodation/searchResultAcc.jsx";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from "react-date-range/dist/locale";
import useFetch from "../../../hooks/useFetch.js";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";

const Acc = () => {
  const { user } = useContext(AuthContext);
  const {dispatch}=useContext(SearchContext);
  const [accDate, setaccDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [city, setCity] = useState("");
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
    dispatch({type:"NEW_SEARCH",payload:{personNumber}})
    reFetch();
  };

  const { data, loading, error, reFetch } = useFetch(
    `/acc/?userId=${
      user._id
    }&City=${city}&bookingDate=${accDate[0].startDate.toLocaleDateString(
      "tr-TR"
    )}&leavingDate=${accDate[0].endDate.toLocaleDateString(
      "tr-TR"
    )}&personNumber=${personNumber.adult}`
  );

  return (
    <div>
      <Navbar type="accomodation" />
      <div className="listAccContainer">
        <div className="listAccWrapper">
          <div className="listAccResult">
            {loading ? (
              ""
            ) : (
              <>
                {data.map((item) => (
                  <Link
                    to={`/accomodation/${item._id}`}
                    style={{ textDecoration: "none", color: "black" }}
  
                  >
                    <SearchResults item={item} key={item._id} />
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="listAccSearch">
            <h1 className="lstAccTitle">Kendine uygun konaklama teklifi bul</h1>

            <div className="listAccItem">
              <label>Nerede arıyorsun?</label>
              <input
                placeholder="İstanbul"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="listAccItem">
              <label>Hangi tarihlerde konaklayacaksın?</label>
              <span>{`${accDate[0].startDate.toLocaleDateString(
                "tr-TR"
              )} -> ${accDate[0].endDate.toLocaleDateString("tr-TR")}`}</span>
              <DateRange
                locale={rdrLocales.tr}
                editableDateInputs={true}
                onChange={(item) => setaccDate([item.selection])}
                minDate={new Date()}
                moveRangeOnFirstSelection={false}
                ranges={accDate}
                className="accDate"
                rangeColors={["#42a72b"]}
              />
            </div>

            <div className="listAccItem">
              <label>Kişi Sayısı</label>
              <span className="accPersonNumber">
                <span className="accPerson">{`${personNumber.adult}`}</span>
                <div className="accNumberCounter">
                  <button
                    className="accPersonCounterButton"
                    onClick={() => handleNumber("adult", "i")}
                  >
                    +
                  </button>
                  <button
                    disabled={personNumber.adult <= 1}
                    className="accPersonCounterButton"
                    onClick={() => handleNumber("adult", "d")}
                  >
                    -
                  </button>
                </div>
              </span>
            </div>
            <div className="listAccItem">
              <button className="accSearchButton" onClick={handleClick}>
                Ara
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Acc;
