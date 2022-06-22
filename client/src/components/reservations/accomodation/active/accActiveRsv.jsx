import "./accActiveRsv.css";
import React from "react";
import axios from "axios";

const AccRsv = ({ item,user }) => {


  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/acc/cancelAccReservations/${user._id}/${item._id}/${item.offerId}/${item.personNumber}`);
      
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };

  return (
    <div className="accActiveRsvContainer">
      <div className="accRsvActive">
        <div className="accRsvActiveInfo1">
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="accRsvActiveAvatar"
          />
          <span className="accRsvActiveUsername">username</span>
        </div>
        <div className="accRsvActiveInfo2">
          <span className="accRsvActiveLocation">{item.city}</span>
          <span className="accRsvActiveDates">
            {item.bookingdate} - {item.leavingdate}
          </span>
        </div>
        <div className="accRsvActiveInfo3">
          <span className="accRsvActivePrice">{item.price}</span>
          <div className="accRsvActiveText"> Aktif Rezervasyon</div>
        </div>
      </div>
      <div className="accRsvActiveButtons">
        <button className="accRsvActiveCancel" onClick={handleClick}>
          İptal et
        </button>
      </div>
    </div>
  );
};

export default AccRsv;
