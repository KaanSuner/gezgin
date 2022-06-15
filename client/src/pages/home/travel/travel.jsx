import "./travel.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import SearchResults from "../../../components/SearchResults/Travel/searchResultTravel.jsx";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import * as rdrLocales from "react-date-range/dist/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Travel = () => {
  const [date, setDate] = useState(new Date());
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
  };

  const { data, loading, error, reFetch } = useFetch(
    `/travel/?departureCity=${departure}&arrivalCity=${destination}&departureDate=${format(date, "yyyy-MM-dd")}`
  );

  return (
    <div>
      <Navbar type="travel" />
      <div className="listTravelContainer">
        <div className="listTravelWrapper">
          <div className="listTravelResult">
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
                  selected={date}
                  onChange={(date) => setDate(date)}
                  locale={rdrLocales.tr}
                />
              </span>
            </div>

            <div className="listTravelItem">
              <label>Kişi Sayısı</label>
              <span
                className="travelPersonNumber">
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
