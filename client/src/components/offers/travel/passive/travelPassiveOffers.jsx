import "./travelPassiveOffers.css";
import React from "react";
import axios from "axios";

const TravelPassiveOffers = ({item,user}) => {
  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/travel/deleteMyTravelOffer/${user._id}/${item._id}`);
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };
  return (
    <div className="travelPassiveOffersContainer">
      <div className="travelPassiveOffers">
        <div className="travelPassiveOffersInfo1">
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="travelPassiveOffersAvatar"
          />
          <span className="travelPassiveOffersUsername">{user.username}</span>
        </div>
        <div className="travelPassiveOffersInfo2">
          <span className="travelPassiveOffersLocation">{item.city}</span>
          <span className="travelPassiveOffersDates">{item.bookingdate} - {item.leavingdate}</span>
        </div>
        <div className="travelPassiveOffersInfo3">
          <span className="travelPassiveOffersPrice">{item.price}</span>
          <div className="travelPassiveOffersText"> Kapalı</div>
        </div>
      </div>
      <div className="travelPassiveOffersbuttons">
        <button className="travelPassiveOffersCancel" onClick={handleClick}>Sil</button>
      </div>
    </div>
  );
};

export default TravelPassiveOffers;
