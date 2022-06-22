import "./travel.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import SearchResults from "../../../components/SearchResults/Travel/searchResultTravel.jsx";
import useFetch from "../../../hooks/useFetch";
import { useContext, useState } from "react";
import * as rdrLocales from "react-date-range/dist/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";

const Travel = () => {
  const { user } = useContext(AuthContext);
  const currentDate=new Date().toLocaleDateString("tr-TR")
  const { dispatch } = useContext(SearchContext);
  const [travelDate, setTravelDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
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
    dispatch({ type: "NEW_SEARCH", payload: { personNumber } });
  };

  const { data, loading, error, reFetch } = useFetch(
    `/travel/?userId=${user._id}&departureCity=${departure}&arrivalCity=${destination}&departureDate=${travelDate.toLocaleDateString("tr-TR")}&personNumber=${personNumber.adult}`
  );

  return (
    <div>
      <Navbar type="travel" />
      <div className="listTravelContainer">
        <div className="listTravelWrapper">
          <div className="listTravelResult">
            {loading ? (
              ""
            ) : (
              <>
                {data.map((item) => (
                  <Link
                    to={`/travel/${item._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <SearchResults item={item} key={item._id} />
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="listTravelSearch">
            <h1 className="lstTravelTitle">
              Kendine uygun seyahat teklifi bul
            </h1>

            <div className="listTravelItem">
              <label>Nereden?</label>
              <input
                type="text"
                placeholder="Antalya"
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>

            <div className="listTravelItem">
              <label>Nereye?</label>
              <input
                type="text"
                placeholder="İstanbul"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="listTravelItem">
              <label>Hangi tarihte?</label>
              <span>
                <DatePicker
                  className="travelDate"
                  selected={travelDate}
                  onChange={(date) => setTravelDate(date)}
                  locale={rdrLocales.tr}
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
                />
              </span>
            </div>

            <div className="listTravelItem">
              <label>Kişi Sayısı</label>
              <span className="travelPersonNumber">
                <span className="travelPerson">{`${personNumber.adult}`}</span>
                <div className="travelNumberCounter">
                  <button
                    className="travelPersonCounterButton"
                    onClick={() => handleNumber("adult", "i")}
                  >
                    +
                  </button>
                  <button
                    disabled={personNumber.adult <= 1}
                    className="travelPersonCounterButton"
                    onClick={() => handleNumber("adult", "d")}
                  >
                    -
                  </button>
                </div>
              </span>
            </div>
            <div className="listTravelItem">
              <button className="travelSearchButton" onClick={handleClick}>
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
export default Travel;
