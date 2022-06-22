import "./myActiveAccOffers.css";
import React from "react";
import axios from "axios";

const MyAccActiveOffers = ({ item,user }) => {


  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/acc/cancelMyAccOffer/${user._id}/${item.offerId}`);
      await axios.delete(`/acc/delete/${item.offerId}`);
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };

  return (
    <div className="myAccActiveOffersContainer">
      <div className="myAccActiveOffers">
        <div className="myAccActiveOffersInfo1">
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="myAccActiveOffersAvatar"
          />
          <span className="myAccActiveOffersUsername">username</span>
        </div>
        <div className="myAccActiveOffersInfo2">
          <span className="myAccActiveOffersLocation">{item.city}</span>
          <span className="myAccActiveOffersDates">
            {item.bookingdate} - {item.leavingdate}
          </span>
        </div>
        <div className="myAccActiveOffersInfo3">
          <span className="myAccActiveOffersPrice">{item.price}</span>
          <div className="myAccActiveOffersText"> Aktif Teklif</div>
        </div>
      </div>
      <div className="myAccActiveOffersButtons">
        <button className="myAccActiveOffersCancel" onClick={handleClick}>
          İptal et
        </button>
      </div>
    </div>
  );
};

export default MyAccActiveOffers;
