import "./travelActiveRsv.css";
import React from "react";
import axios from "axios";

const TravelRsv = ({ item,user }) => {


  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/travel/cancelTravelReservations/${user._id}/${item._id}/${item.offerId}/${item.personNumber}`);
      
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };

  return (
    <div className="travelActiveRsvContainer">
      <div className="travelRsvActive">
        <div className="travelRsvActiveInfo1">
        <span className="ownerTitle"> Teklif Sahibi</span>
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="travelRsvActiveAvatar"
          />
          <span className="travelRsvActiveUsername">{item.username}</span>
        </div>
        <div className="travelRsvActiveInfo2">
          <span className="travelRsvActiveDepartureDate">{item.departureDate}
          </span>
          <span className="travelRsvActiveCities">{item.departureCity} --> {item.arrivalCity}</span>
        </div>
        <div className="travelRsvActiveInfo3">
          <span className="travelRsvActivePrice">{item.price}</span>
          <div className="travelRsvActiveText"> Aktif Rezervasyon</div>
        </div>
      </div>
      <div className="travelRsvActiveButtons">
        <button className="travelRsvActiveCancel" onClick={handleClick}>
          İptal et
        </button>
      </div>
    </div>
  );
};

export default TravelRsv;
