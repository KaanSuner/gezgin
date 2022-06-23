import "./travelPassiveOffers.css";
import React from "react";
import axios from "axios";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GarageIcon from "@mui/icons-material/Garage";

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
        <span className="travelPassiveOffersDepartureDate">
            {item.departureDate}
          </span>
          <span className="travelPassiveOfferAvailability"> Doluluk: {item.reserveSeats}/{item.maxperson}</span>
        </div>
        <div className="travelPassiveOffersInfo2">
        <span className="travelPassiveDepartureBox">
        <span className="travelPassiveOffersDepartureTime">
            {item.departureTime}
          </span>
        <span className="travelPassiveOffersDepartureCity">
            {item.departureCity}
          </span>

        </span>
          <ArrowRightAltIcon className="travelArrow" />
          <span className="travelPassiveArrivalBox">
        
        <span className="travelPassiveOffersArrivalTime">
            {item.arrivalTime}
          </span>
          <span className="travelPassiveOffersArrivalCity">
            {item.arrivalCity}
          </span>
        </span>
        </div>
        <div className="travelPassiveOffersInfo3">
          <span className="travelPassiveOffersPrice">{item.price}</span>
          <div className="travelPassiveOffersText"><GarageIcon/> Kapalı</div>
        </div>
      </div>
      <div className="travelPassiveOffersbuttons">
        <button className="travelPassiveOffersCancel" onClick={handleClick}>Sil</button>
      </div>
    </div>
  );
};

export default TravelPassiveOffers;
