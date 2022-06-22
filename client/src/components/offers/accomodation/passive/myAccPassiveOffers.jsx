import "./myAccPassiveOffers.css";
import React from "react";
import axios from "axios";

const myAccPassiveOffers = ({item,user}) => {
  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/acc/deleteMyAccOffer/${user._id}/${item._id}`);
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };
  return (
    <div className="myAccPassiveOffersContainer">
      <div className="myAccPassiveOffers">
        <div className="myAccPassiveOffersInfo1">
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="myAccPassiveOffersAvatar"
          />
          <span className="myAccPassiveOffersUsername">{user.username}</span>
        </div>
        <div className="myAccPassiveOffersInfo2">
          <span className="myAccPassiveOffersLocation">{item.city}</span>
          <span className="myAccPassiveOffersDates">{item.bookingdate} - {item.leavingdate}</span>
        </div>
        <div className="myAccPassiveOffersInfo3">
          <span className="myAccPassiveOffersPrice">{item.price}</span>
          <div className="myAccPassiveOffersText"> Sonlandırılmış Teklif</div>
        </div>
      </div>
      <div className="myAccPassiveOffersbuttons">
        <button className="myAccPassiveOffersCancel" onClick={handleClick}>Sil</button>
      </div>
    </div>
  );
};

export default myAccPassiveOffers ;
