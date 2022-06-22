import React, { useContext } from "react";
import "./travelDetail.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useFetch from "../../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext.js";
import axios from "axios";
import { SearchContext } from "../../../context/SearchContext.js";

const TravelDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/travel/get/${id}`);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { personNumber } = useContext(SearchContext);

  const handleClick = async (e) => {
    e.preventDefault();

    if (data.userId !== user._id) {
      if (!data.bookers.includes(user._id)) {
        if (personNumber.adult <= data.unReserveSeats) {
          try {
            for (let i = 0; i < personNumber.adult; i++) {
              await axios.put(`/travel/reserve/${id}/${user._id}`);
            }
            await axios.put(`/travel/updateMyTravelreservation/${user._id}/${id}/${personNumber.adult}`);
            navigate("/Profile");
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log("no available seat");
        }
      } else {
        console.log("You have already a reservation");
      }
    } else {
      console.log("You cannot book your own travel offer.");
    }
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        ""
      ) : (
        <div className="travelDetailContainer">
          <div className="travelDetailWrapper">
            <h2 className="travelDetailTitle">Seçtiğin Teklif</h2>
            <div className="travelDetailBox">
              <div className="travelDetailUpperContainer">
                <div className="travelDetailUserInfo">
                  <img
                    src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                    alt=""
                    className="travelDetailAvatar"
                  />
                  <div className="travelDetailUserInfoStringBox">
                    <h3 className="travelDetailUsername">{data.username}</h3>
                    <h4 className="travelDetailNameSurname">
                      {data.name} {data.surname}
                    </h4>
                  </div>
                </div>
                <div className="travelDetailInfo">
                  <div className="travelDetailDeparture">
                    <span className="travelDetailDepartureTime">
                      {data.departureTime}
                    </span>
                    <span className="travelDetailDepartureCity">
                      {data.departureCity}
                    </span>
                  </div>
                  <ArrowRightAltIcon className="travelDetailArrow" />
                  <div className="travelDetailArrival">
                    <span className="travelDetailArrivalTime">
                      {data.arrivalTime}
                    </span>
                    <span className="travelDetailArrivalCity">
                      {data.arrivalCity}
                    </span>
                  </div>
                </div>
                <h1 className="travelDetailPrice">{data.price}</h1>
              </div>
              <div className="travelDetailDownContainer">
                <div className="travelDetailDownLeft">
                  <div className="travelDetailDownLeftString">
                    <div className="travelDetailDownLeftStringBox1">
                      <span className="travelDetailDepartureDate">
                        Yolculuk tarihi:{" "}
                        {data.departureDate}
                      </span>
                      <span className="travelDetailUserPhone">
                        İletişim: {data.phone}
                      </span>
                    </div>
                    <div className="travelDetailDownLeftStringBox2">
                      <span className="travelDetailAvailability">
                        Boş koltuk: {data.reserveSeats}/ {data.maxperson}
                      </span>
                    </div>
                  </div>

                  <span className="travelDetailDescription ">
                    {data.description}
                  </span>
                </div>
                <div className="travelDetailDownRight">
                  <button className="travelReserve" onClick={handleClick}>
                    Reserve et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelDetail;
