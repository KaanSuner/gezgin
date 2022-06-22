import "./travelPassiveRsv.css";
import React from "react";
import axios from "axios";

const TravelRsv = ({item,user}) => {
  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/travel/deleteTravelReservations/${user._id}/${item._id}`);
      
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };
  return (
    <div className="travelPassiveRsvContainer">
      <div className="travelPassiveRsv">
        <div className="travelRsvPassiveInfo1">
        <span className="ownerTitle"> Teklif Sahibi</span>
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="travelRsvPassiveAvatar"
          />
          <span className="travelRsvPassiveUsername">{user.username}</span>
        </div>
        <div className="travelRsvPassiveInfo2">
        <span className="travelRsvPassiveDepartureDate">{item.departureDate}
          </span>
          <span className="travelRsvPassiveCities">{item.departureCity} --> {item.arrivalCity}</span>
        </div>
        <div className="travelRsvPassiveInfo3">
          <span className="travelRsvPassivePrice">{item.price}</span>
          <div className="travelRsvPassiveText">Kapalı</div>
        </div>
      </div>
      <div className="travelRsvPassivebuttons">
        <button className="travelRsvPassiveCancel" onClick={handleClick}>Sil</button>
      </div>
    </div>
  );
};

export default TravelRsv;
