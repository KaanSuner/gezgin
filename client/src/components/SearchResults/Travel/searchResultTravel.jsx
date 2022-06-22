import "./searchResultTravel.css";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const searchResultTravel = ({item}) => {
  return (
    <div className="travelResult">
      <div className="travelInfo1">
        <img
          src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
          alt=""
          className="travelResultItemAvatar"
        />
        <span className="travelUsername">{item.username}</span>
      </div>
      <div className="travelInfo2">
        <div className="travelDepartureInfo">
          <span className="travelDepartureTime">{item.departureTime}</span>
          <span className="travelDepartureCity">{item.departureCity}</span>
        </div>
        <ArrowRightAltIcon className="travelArrow" />

        <div className="travelArrivalInfo">
          <span className="travelArrivalTime">{item.arrivalTime}</span>
          <span className="travelArrivalCity">{item.arrivalCity}</span>
        </div>
      </div>
      <div className="travelInfo3">
        <div className="travelPrice">{item.price}</div>
        <div className="travelAvailability"> Boş koltuk: {item.reserveSeats}/{item.maxperson}</div>
      </div>
    </div>
  );
};

export default searchResultTravel;
