import "./searchResultAcc.css";
import React from "react";

const searchResultAcc = ({ item }) => {
  return (
    <div className="accResult">
      <div className="accInfo1">
        <img
          src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
          alt=""
          className="accResultItemAvatar"
        />
        <span className="accUsername">{item.username}</span>
      </div>
      <div className="accInfo2">
        <div className="accPrice">{item.price}</div>
        <div className="accAvailability">
          {" "}
          Boş yer: {item.reserveSeats}/{item.maxperson}
        </div>
      </div>
    </div>
  );
};

export default searchResultAcc;


/*  return (
    <>
      {item.isAvailable ? (
        <>
          <div className="accResult">
            <div className="accInfo1">
              <img
                src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                alt=""
                className="accResultItemAvatar"
              />
              <span className="accUsername">{item.username}</span>
            </div>
            <div className="accInfo2">
              <div className="accPrice">{item.price}</div>
              <div className="accAvailability">
                {" "}
                Boş yer: {item.reserveSeats}/{item.maxperson}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="accResult2">
            <div className="accInfo1">
              <img
                src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                alt=""
                className="accResultItemAvatar"
              />
              <span className="accUsername">{item.username}</span>
            </div>
            <div className="accInfo2">
              <div className="accPrice">{item.price}</div>
              <div className="accAvailability">
                {" "}
                Boş yer: {item.reserveSeats}/{item.maxperson}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  ); */


