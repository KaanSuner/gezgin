import "./accPassiveRsv.css";
import React from "react";
import axios from "axios";

const AccRsv = ({item,user}) => {
  const reloadPage = () => {
    window.location.reload()
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/acc/deleteAccReservations/${user._id}/${item._id}`);
      
    } catch (err) {
      console.log(err);
    }
    reloadPage();
  };
  return (
    <div className="accPassiveRsvContainer">
      <div className="accPassiveRsv">
        <div className="accRsvPassiveInfo1">
          <img
            src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
            alt=""
            className="accRsvPassiveAvatar"
          />
          <span className="accRsvPassiveUsername">{user.username}</span>
        </div>
        <div className="accRsvPassiveInfo2">
          <span className="accRsvPassiveLocation">{item.city}</span>
          <span className="accRsvPassiveDates">{item.bookingdate} - {item.leavingdate}</span>
        </div>
        <div className="accRsvPassiveInfo3">
          <span className="accRsvPassivePrice">{item.price}</span>
          <div className="accRsvPassiveText"> Kapalı</div>
        </div>
      </div>
      <div className="accRsvPassivebuttons">
        <button className="accRsvPassiveCancel" onClick={handleClick}>Sil</button>
      </div>
    </div>
  );
};

export default AccRsv;
