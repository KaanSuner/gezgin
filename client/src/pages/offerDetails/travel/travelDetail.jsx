import React from "react";
import "./travelDetail.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useFetch from "../../../hooks/useFetch.js";
import { useLocation } from "react-router";
import moment from 'moment'

const TravelDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/travel/get/${id}`);
  
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
                        Yolculuk tarihi: {moment(data.departureDate).format("DD.MM.YYYY")}
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

                  <textarea className="travelDetailDescription ">
                    {data.description}
                  </textarea>
                </div>
                <div className="travelDetailDownRight">
                  <button className="travelReserve">Reserve et</button>
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
