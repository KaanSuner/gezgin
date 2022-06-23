import "./myActiveAccOffers.css";
import React from "react";
import axios from "axios";
import HomeIcon from '@mui/icons-material/Home';

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
        <div className="myAccActiveOffersInfo2">
          <span className="myAccActiveOffersLocation">{item.city}</span>
          <span className="myAccActiveOffersDates">
            {item.bookingdate} - {item.leavingdate}
          </span>
        </div>
        <div className="myAccActiveOffersInfo3">
          <span className="myAccActiveOffersPrice">{item.price}</span>
          <div className="myAccActiveOffersText"> <HomeIcon/> Aktif Teklif</div>
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
