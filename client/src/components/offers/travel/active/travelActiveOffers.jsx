import "./travelActiveOffers.css";
import React from "react";
import axios from "axios";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GarageIcon from '@mui/icons-material/Garage';

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
          <span className="travelActiveOfferAvailability"> Doluluk: {item.reserveSeats}/{item.maxperson}</span>
        </div>
        
        <div className="travelActiveOffersActiveInfo2">
        <span className="travelActiveDepartureBox">
        <span className="travelActiveOffersDepartureTime">
            {item.departureTime}
          </span>
        <span className="travelActiveOffersDepartureCity">
            {item.departureCity}
          </span>

        </span>
          <ArrowRightAltIcon className="travelArrow" />
          <span className="travelActiveArrivalBox">
        
        <span className="travelActiveOffersArrivalTime">
            {item.arrivalTime}
          </span>
          <span className="travelActiveOffersArrivalCity">
            {item.arrivalCity}
          </span>
        </span>
        </div>
        <div className="travelActiveOffersActiveInfo3">
          <span className="travelActiveOffersActivePrice">{item.price}</span>
          <div className="travelActiveOffersActiveText"> <GarageIcon/> Aktif Teklif</div>
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
