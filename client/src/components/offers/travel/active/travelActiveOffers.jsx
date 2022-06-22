import "./travelActiveOffers.css";
import React from "react";
import axios from "axios";

const TravelActiveOffers = ({ item, user }) => {
  const reloadPage = () => {
    window.location.reload();
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/travel/cancelMyTravelOffer/${user._id}/${item.offerId}`
      );
      await axios.delete(`/travel/delete/${item.offerId}`);
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };

  return (
    <div className="travelActiveOffersContainer">
      <div className="travelActiveOffersActive">
        <div className="travelActiveOffersActiveInfo1">
          <span className="travelActiveOffersDepartureDate">
            {item.departureDate}
          </span>
        </div>
        <div className="travelActiveOffersActiveInfo2">
          <span className="travelActiveOffersCities">
            {item.departureCity} --> {item.arrivalCity}
          </span>
        </div>
        <div className="travelActiveOffersActiveInfo3">
          <span className="travelActiveOffersActivePrice">{item.price}</span>
          <div className="travelActiveOffersActiveText"> Aktif Rezervasyon</div>
        </div>
      </div>
      <div className="travelActiveOffersActiveButtons">
        <button
          className="travelActiveOffersActiveCancel"
          onClick={handleClick}
        >
          İptal et
        </button>
      </div>
    </div>
  );
};

export default TravelActiveOffers;
